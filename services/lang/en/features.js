/* eslint-disable no-template-curly-in-string */
import registrationStages from './regsitrationStages'
import loginStages from './loginStages'
import resetPasswordStages from './resetPasswordStages'
import companyAssociationStages from './companyAssociationStages'
import requestAuthCodeStages from './requestAuthCodeStages'
import homeStages from './homeStages'
import sharedErrorStages from './sharedErrorStages'
import changePasswordStages from './changePasswordStages'
import changeNameStages from './changeNameStages'
import updatePhoneStages from './updatePhoneStages'
import inviteUserStages from './inviteUserStages'
import onboardingStages from './onboardingStages'

const features = {
  ...loginStages,
  ...registrationStages,
  ...resetPasswordStages,
  ...companyAssociationStages,
  ...requestAuthCodeStages,
  ...changePasswordStages,
  ...changeNameStages,
  ...updatePhoneStages,
  ...homeStages,
  ...sharedErrorStages,
  ...inviteUserStages,
  ...onboardingStages

}

export default features
