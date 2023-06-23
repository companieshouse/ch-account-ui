locals {
  fqdn = "${var.service_name}.${var.domain_name}"
}

data "vault_generic_secret" "secrets" {
  path = "applications/${var.environment}-${var.region}/${var.service_name}"
}

# CloudFront certificates must be in us-east-1
resource "aws_acm_certificate" "domain" {
  provider                  = aws.us_east_1
  domain_name               = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method         = "DNS"
}

resource "aws_s3_bucket" "website" {
  bucket        = local.fqdn
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.website.json
}

resource "aws_s3_bucket_acl" "website" {
  bucket = aws_s3_bucket.website.id
  acl    = "private"
}

resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "website" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["cloudfront.amazonaws.com"]
      type        = "Service"
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.website.arn]
    }
    resources = [
      "arn:aws:s3:::${local.fqdn}/*"
    ]
  }
  statement {
    actions = [
      "s3:*",
    ]
    principals {
      identifiers = local.website_iam_policy_identifiers
      type        = "AWS"
    }
    resources = [
      "arn:aws:s3:::${local.fqdn}/*",
      "arn:aws:s3:::${local.fqdn}",
    ]
  }
}

data "aws_route53_zone" "domain" {
  count = var.create_route53_record ? 1 : 0
  name  = var.route53_zone
}

resource "aws_route53_record" "website" {
  count   = var.create_route53_record ? 1 : 0
  name    = local.fqdn
  zone_id = data.aws_route53_zone.domain.0.id
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_cloudfront_origin_access_control" "website" {
  name                              = var.service_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "website" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = [local.fqdn]

  origin {
    domain_name              = aws_s3_bucket.website.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
    origin_id                = var.service_name
  }

  custom_error_response {
    error_caching_min_ttl = 0
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 0
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404/index.html"
  }

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = var.service_name
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0

    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }

    dynamic "function_association" {
      for_each = var.enable_auth ? [] : [1]
      content {
        event_type   = "viewer-request"
        function_arn = aws_cloudfront_function.website.arn
      }
    }

    dynamic "lambda_function_association" {
      for_each = var.enable_auth ? [1] : []
      content {
        event_type   = "viewer-request"
        lambda_arn   = aws_lambda_function.auth.0.qualified_arn
        include_body = true
      }
    }

    response_headers_policy_id = aws_cloudfront_response_headers_policy.security_headers_policy.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.domain.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  depends_on = [
      aws_s3_bucket.website
    ]
}

# See: https://github.com/aws-samples/amazon-cloudfront-functions/tree/main/url-rewrite-single-page-apps
resource "aws_cloudfront_function" "website" {
  name    = "${var.service_name}-url-rewrite-single-page-apps"
  runtime = "cloudfront-js-1.0"
  publish = true
  code    = file("${path.module}/cf_function/index.js")
}

resource "aws_cloudfront_response_headers_policy" "security_headers_policy" {
  name = replace("${local.fqdn}-security-headers-policy", ".", "-")

  security_headers_config {
    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }
  }

  remove_headers_config {
     items {
        header = "Server"
     }
  }
}
