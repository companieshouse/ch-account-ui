variable "region" {
  type        = string
  description = "AWS region for deployment"
}

variable "environment" {
  type        = string
  description = "The environment name to be used when creating AWS resources"
}

variable "service_name" {
  type        = string
  description = "The service name to be used when creating AWS resources"
  default     = "ch-account-ui"
}

variable "route53_zone" {
  type        = string
  description = "The Route53 hosted zone to use for DNS records"
}
