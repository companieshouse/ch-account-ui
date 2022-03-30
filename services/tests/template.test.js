const { getTemplateDataValue, parseTemplateString, processDynamicProps } = require('../template')

const data = {
  phoneNumber: '',
  emailAddress: 'p*****@companieshouse.gov.uk',
  type: 'email',
  company: null,
  errors: [],
  handlers: {
      onSubmitCallbacks: [
          null,
          null
      ]
  }}

const templateString = '${type}'

const noMatches = {
  phoneNumber: '',
  emailAddress: 'p*****@companieshouse.gov.uk',
  company: null,
  errors: [],
  handlers: {
      onSubmitCallbacks: [
          null,
          null
      ]
  }}

describe('getTemplateDataValue', () => {
  
  test('should return a string that matches type', () => {
    expect(getTemplateDataValue(data, templateString)).toStrictEqual('email')
  })
  test('should return undefined', () => {
    expect(getTemplateDataValue(noMatches, templateString)).toStrictEqual(undefined)
  })
})

describe('parseTemplateString', () => {
  test('should return a string that matches type', () => {
    expect(parseTemplateString(data, templateString))
  })
  test('should return undefined', () => {
    expect(parseTemplateString(noMatches, templateString)).toStrictEqual(undefined)
  })
  test('should return template string', () => {
    expect(parseTemplateString(noMatches, templateString, false, false)).toStrictEqual('${type}')
  })
  const templateStrings = 'your ${phoneNumber} and ${emailAddress}'
  const moreThanOneMatches = {
    phoneNumber: '071221',
    emailAddress: 'p*****@companieshouse.gov.uk',
    company: null,
    errors: [],
    handlers: {
        onSubmitCallbacks: [
            null,
            null
        ]
    }
  }
  test('should have more than one match', () => {
    expect(parseTemplateString(moreThanOneMatches, templateStrings, false, false)).toStrictEqual('your 071221 and p*****@companieshouse.gov.uk')
  })
})

describe('ProcessDynamicProps', () => {
  const obj = {
    component: 'PadPhoneNumber',
    dynamicProps: {
        phoneNumber: '${profile.phone_number}'
    }
}
const props = {
  errors: [],
  headingCount: { count: 0 },
  listItems: [
    {
      label: 'Full name',
      action: {
          label: 'Update',
          desc: 'name',
          href: '/account/manage/change-name/_start'
      }
    },
    {
      label: 'Email',
      action: {
          label: 'Update',
          desc: 'email',
          href: '/account/manage/change-email/_start'
      }
    },
    {
      label: 'Password',
      value: '*************',
      action: {
          label: 'Update',
          desc: 'password',
          href: '/account/manage/change-password/_start'
      }
  }
  ]
}
  test('return an object', () => {
    expect(processDynamicProps(obj, props)).toStrictEqual({
      component: 'PadPhoneNumber',
      dynamicProps: {
        phoneNumber: undefined
      }
    })
  })
})