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
  default     = "idam-ui"
}

variable "route53_zone" {
  type        = string
  description = "The Route53 hosted zone to use for DNS records"
  default     = "N/A"
}

variable "create_route53_record" {
  type        = bool
  description = "Should a Route53 record be created"
}

variable "domain_name" {
  type        = string
  description = "The domain name to use for the application"
}

variable "enable_auth" {
  type        = bool
  description = "Should Basic Auth be enabled on the UI"
}

variable "auth_password" {
  type        = string
  description = "Basic Auth password"
  default     = "N/A"
}
