locals {
  common_tags = {
    Environment    = var.environment
    Service        = "ch-account"
    ServiceSubType = var.service_name
    Repository     = "https://github.com/companieshouse/ch-account-ui"
    ManagedBy      = "terraform"
    Team           = "amido"
  }

  secrets            = data.vault_generic_secret.secrets.data
  concourse_role_arn = local.secrets.concourse_role_arn
}
