locals {
  domain_name = "${var.service_name}.amido.${var.route53_zone}"
}

# CloudFront certificates must be in us-east-1
resource "aws_acm_certificate" "domain" {
  provider                  = aws.us_east_1
  domain_name               = "amido.${var.route53_zone}"
  subject_alternative_names = ["*.amido.${var.route53_zone}"]
  validation_method         = "DNS"
}

resource "aws_s3_bucket" "website" {
  bucket        = local.domain_name
  acl           = "public-read"
  policy        = data.aws_iam_policy_document.website.json
  force_destroy = true
  website {
    index_document = "index.html"
  }
}

data "aws_iam_policy_document" "website" {
  statement {
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject"
    ]
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    resources = [
      "arn:aws:s3:::${local.domain_name}/*"
    ]
  }
}

data "aws_route53_zone" "domain" {
  name = var.route53_zone
}

resource "aws_route53_record" "website" {
  name    = local.domain_name
  zone_id = data.aws_route53_zone.domain.id
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_cloudfront_distribution" "website" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = [local.domain_name]

  origin {
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
    domain_name = aws_s3_bucket.website.website_endpoint
    origin_id   = var.service_name
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
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.domain.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }
}
