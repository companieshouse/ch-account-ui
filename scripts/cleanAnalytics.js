export const matomoHelper = (data) => {
  const eventKeys = ['type', 'category', 'action', 'name', 'value']

  const finalMatomoData = cleanAnalytics(data).reduce((finalMatomoData, field, index) => {
    console.log(field, index)
    finalMatomoData[eventKeys[index]] = field
    return finalMatomoData
  }, {})

  return finalMatomoData
}

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
    'companyNumber=[0-9A-Z]+',
    'companyName=[0-9a-zA-Z\s%]+',
    'userName=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]',
    'invitedUser=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]'

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
    ['companyNumber=[0-9A-Z]+']: '<companyNumber>',
    ['companyName=[0-9a-zA-Z\s%]+']: '<companyName>',
    ['userName=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]']: '<userEmail>',
    ['invitedUser=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]']: '<invitedUser>'
  }

  let updated = matomo.map((string) => {
    let newString = string
    let match = patterns.filter(pattern => {
      const re = new RegExp(pattern)
      if (re.test(string) && typeof string == "string") {
        newString = string.replace(re, hashMap[pattern])
      }
      return re.test(string)
    });
    let formatted = typeof string == "string" ? newString.replace(/(\${.+})/, hashMap[match]) : string
    return formatted
  })
  return updated
}