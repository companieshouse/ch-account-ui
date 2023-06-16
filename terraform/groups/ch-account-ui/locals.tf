locals {
  common_tags = {
    Environment    = var.environment
    Service        = "ch-account"
    ServiceSubType = var.service_name
    Repository     = "https://github.com/companieshouse/ch-account-ui"
    ManagedBy      = "terraform"
    Team           = "amido"
  }

  secrets                        = jsondecode(data.vault_generic_secret.secrets.data_json)
  concourse_role_arn_list        = local.secrets["concourse_role_arn_list"]
  website_iam_policy_identifiers = local.concourse_role_arn_list
}
