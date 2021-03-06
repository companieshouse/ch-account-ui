terraform {
  backend "s3" {}

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}

# Used for ACM with CloudFront
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
