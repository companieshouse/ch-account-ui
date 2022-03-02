export const cleanAnalytics = (matomo) => {

  const patterns = [
    'company.name', 
    'emailAddress', 
    'userDisplayName', 
    'user.email', 
    'company.inviter.displayName', 
    'companyName', 
    'invitedUser', 
    'userName',
    '\\?.+[0-9]',
    '\\&.+[0-9][a-z|A-Z]+',
    '\\&companyName.+[0-9][a-z|A-Z]+'
  ]

  const hashMap = {
    ['company.name']: '<company>',
    ['emailAddress']: '<emailAddress>',
    ['userDisplayName']: '<user>',
    ['user.email']: '<emailAddress>',
    ['company.inviter.displayName']: '<user>',
    ['companyName']: '<company>', 
    ['invitedUser']: '<invitedUser>', 
    ['userName']: '<user>',
    ['\\?.+[0-9]']: '<companyNumber>',
    ['\\&.+[0-9][a-z|A-Z]+']: '<companyNumber>',
    ['\\&companyName.+[0-9][a-z|A-Z]+']: '<companyName>'
  }

  let updated = matomo.map((string) => {
    let newString = string
    let match = patterns.filter(pattern => {
      const re = new RegExp(pattern)
      if (re.test(string)) {
        newString = string.replace(re, hashMap[pattern])
      }
      return re.test(string)
    });
    let formatted = newString.replace(/(\${.+})/, hashMap[match])
    return formatted
  })
  return updated
}