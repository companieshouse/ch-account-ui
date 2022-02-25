export const cleanAnalytics = (matomo) => {

  const patterns = ['company.name', 'emailAddress', 'userDisplayName', 'user.email', 'company.inviter.displayName', 'companyName', 'invitedUser', 'userName']

  const hashMap = {
    ['company.name']: '<company>',
    ['emailAddress']: '<emailAddress>',
    ['userDisplayName']: '<user>',
    ['user.email']: '<emailAddress>',
    ['company.inviter.displayName']: '<user>',
    ['companyName']: '<company>', 
    ['invitedUser']: '<invitedUser>', 
    ['userName']: '<user>'
  }

  let updated = matomo.map((string) => {
    let match = patterns.filter(pattern => {
      const re = new RegExp(pattern)
      return re.test(string)
    });
    return string.replace(/(\${.+})/, hashMap[match])
  })

  return updated
}