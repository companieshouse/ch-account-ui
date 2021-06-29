/* eslint-disable no-template-curly-in-string */
import registrationStages from './regsitrationStages.js'
import loginStages from './loginStages.js'
import resetPasswordStages from './resetPasswordStages.js'
import companyAssociationStages from './companyAssociationStages.js'
import requestAuthCodeStages from './requestAuthCodeStages.js'
import homeStages from './homeStages.js'
import sharedErrorStages from './sharedErrorStages.js'
import changePasswordStages from './changePasswordStages.js'
import changeNameStages from './changeNameStages.js'
import updatePhoneStages from './updatePhoneStages.js'
import inviteUserStages from './inviteUserStages.js'

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
  ...inviteUserStages

}

export default features
