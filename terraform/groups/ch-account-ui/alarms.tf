data "aws_sns_topic" "forgerock_monitoring" {
  name = "forgerock-monitoring"
}

resource "aws_cloudwatch_metric_alarm" "cloudfront_500_errors" {
  alarm_name          = "${var.service_name}-AWS-CloudFront-High-5xx-Error-Rate"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "5xxErrorRate"
  namespace           = "AWS/Cloudfront"
  period              = 60
  statistic           = "Average"
  threshold           = 25
  treat_missing_data  = "notBreaching"
  alarm_actions       = [data.aws_sns_topic.forgerock_monitoring.arn]
  actions_enabled     = true

  dimensions = {
    DistributionId = aws_cloudfront_distribution.website.id
    Region         = "Global"
  }
}


resource "aws_cloudwatch_metric_alarm" "s3_total_request_latency" {
  alarm_name          = "${var.service_name}-AWS-S3-Total-Request-Latency"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "TotalRequestLatency"
  namespace           = "AWS/S3"
  period              = 2
  statistic           = "Average"
  threshold           = 3000
  treat_missing_data  = "notBreaching"
  alarm_actions       = [data.aws_sns_topic.forgerock_monitoring.arn]
  actions_enabled     = true

  dimensions = {
    BucketName = local.fqdn
  }
}