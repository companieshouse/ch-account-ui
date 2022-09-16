import log from '../services/log'

export const matomoHelper = (data, title = false, id = "NONE") => {
  log.debug("helper: ", data )
  const eventKeys = ['type', 'category', 'action', 'name', 'value', 'href']

  const finalMatomoData = cleanAnalytics(data, title, id).reduce((finalMatomoData, field, index) => {
    finalMatomoData[eventKeys[index]] = field
    return finalMatomoData
  }, {})

  return finalMatomoData
}

export const cleanAnalytics = (matomo, title = false, id = "NONE") => {

  log.debug("Matomo data IN: ", matomo, title, id)

  let patterns = [
    'company.name', 
    'emailAddress', 
    'userDisplayName', 
    'user.email', 
    'company.inviter.displayName', 
    'companyNumber=[0-9A-Z]+',
    'companyNo=[0-9A-Z]+',
    'companyName=[0-9a-zA-Z\s()%]+',
    'userName=[a-zA-Z\.]+%40[a-zA-Z\.]+[^%0-9]',
    'userName=[a-zA-Z\.\%0-9]+',
    'invitedUser=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]',
    'notifyId=[0-9a-zA-Z\-]+',
    'userId=[0-9a-zA-Z\-]+'
  ]

  const titlePatterns = [
    '[A-Z0-9ÀÁÂÄÃÅĀĂĄÆǼÇĆĈĊČÐĎÞÈÉÊËĒĔĖĘĚĜĞĠĢĤĦÌÍÎÏĨĪĬĮİĴĶĹĻĽĿŁÑŃŅŇŊÒÓÔÕÖØŌŎŐǾŒŔŖŘŚŜŞŠŢŤŦÙÚÛÜŨŪŬŮŰŲŴẀẂẄỲÝŶŸŹŻŽ:._!@£$%^&*()"]+[A-Z0-9:._!@£$%^&*()" \-]+[^ a-z\t\n\r]+'
  ]

  const hashMap = {
    ['emailAddress']: '<emailAddress>',
    ['userDisplayName']: '<user>',
    ['user.email']: '<emailAddress>',
    ['company.inviter.displayName']: '<user>',
    ['companyNumber=[0-9A-Z]+']: '<companyNumber>',
    ['companyNo=[0-9A-Z]+']: '<companyNumber>',
    ['companyName=[0-9a-zA-Z\s()%.\-]+']: '<companyName>',
    ['userName=[a-zA-Z\.\%0-9]+']: '<user>',
    ['userName=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]']: '<user>',
    ['invitedUser=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]']: '<invitedUser>',
    ['notifyId=[0-9a-zA-Z\-]+']: '<notifyId>',
    ['userId=[0-9a-zA-Z\-]+']: '<userId>',
    ['[A-Z0-9]+[A-Z0-9\W]+']: '<companyName>',
    ['[A-Z0-9]+[A-Z0-9:!@£$%^&*() \-]+']: '<companyName>',
    ['[A-Z0-9ÀÁÂÄÃÅĀĂĄÆǼÇĆĈĊČÐĎÞÈÉÊËĒĔĖĘĚĜĞĠĢĤĦÌÍÎÏĨĪĬĮİĴĶĹĻĽĿŁÑŃŅŇŊÒÓÔÕÖØŌŎŐǾŒŔŖŘŚŜŞŠŢŤŦÙÚÛÜŨŪŬŮŰŲŴẀẂẄỲÝŶŸŹŻŽ:._!@£$%^&*()"]+[A-Z0-9:._!@£$%^&*()" \-]+[^ a-z\t\n\r]+']: '<COMPANYNAME>'
  }

  if (title) {
    patterns = titlePatterns
  }

  let updated = matomo.map((string) => {
    // check the string for matches
    let match = patterns.filter(pattern => {
      const re = new RegExp(pattern)
      return re.test(string)
    });

    let formatted = string

    log.debug("PS MATOMO MATCH:", match)

    if (match.length) {
      // we have more than one match
      match.forEach(currentMatch => {
        const re = new RegExp(currentMatch)
        formatted = typeof string == "string" ? formatted.replace(re, hashMap[currentMatch]) : string
      });
    }
    

    log.debug("PS MATOMO CLEAN", formatted)

    return formatted
  })
  return updated
}