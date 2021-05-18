locals {
  common_tags = {
    Environment    = var.environment
    Service        = "ch-account"
    ServiceSubType = var.service_name
    Team           = "amido"
  }
}