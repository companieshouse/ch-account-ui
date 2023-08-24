locals {
  function_name = "${var.service_name}-auth"
}

resource "aws_iam_role" "auth_lambda" {
  count = var.enable_auth ? 1 : 0
  name  = "${local.function_name}-lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [
          "edgelambda.amazonaws.com",
          "lambda.amazonaws.com"
        ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

}

resource "aws_iam_role_policy" "auth_lambda" {
  count = var.enable_auth ? 1 : 0
  name  = "${local.function_name}-lambda"
  role  = aws_iam_role.auth_lambda.0.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "ssm:GetParameter"
      ],
      "Effect": "Allow",
      "Resource": "${aws_ssm_parameter.password.0.arn}"
    }
  ]
}
EOF
}

data "archive_file" "auth" {
  type        = "zip"
  source_file = "${path.module}/lambda/auth/index.js"
  output_path = "${path.module}/lambda/auth/auth-lambda.zip"
}

# Lambda functions used with CloudFront must be in us-east-1
resource "aws_lambda_function" "auth" {
  count            = var.enable_auth ? 1 : 0
  provider         = aws.us_east_1
  function_name    = local.function_name
  role             = aws_iam_role.auth_lambda.0.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  publish          = true
  filename         = data.archive_file.auth.output_path
  source_code_hash = filebase64sha256(data.archive_file.auth.output_path)
}

resource "aws_ssm_parameter" "password" {
  count       = var.enable_auth ? 1 : 0
  provider    = aws.us_east_1
  name        = "${local.function_name}-password"
  description = "Basic Auth Password"
  type        = "SecureString"
  value       = var.auth_password
}
