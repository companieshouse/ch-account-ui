locals {
  common_tags = {
    Environment    = var.environment
    Service        = "ch-account"
    ServiceSubType = var.service_name
    Repository     = "https://github.com/companieshouse/ch-account-ui"
    ManagedBy      = "terraform"
    Team           = "amido"
  }
}
