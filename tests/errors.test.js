// test data 
// "value": "{\"errors\":[{\"label\":\"Username missing\",\"token\":\"CREDENTIALS_MISSING_USERNAME\",\"fieldName\":\"IDToken1\",\"anchor\":\"IDToken1\"},{\"label\":\"Password missing\",\"token\":\"CREDENTIALS_MISSING_PASSWORD\",\"fieldName\":\"IDToken2\",\"anchor\":\"IDToken2\"}]}"}


const { getFieldError, translateErrors, processErrorMessageTemplateStrings } = require('../services/errors')

const errorData = [
  {
    label: 'Username missing',
    token: 'LOGIN_CREDENTIALS_MISSING_USERNAME',
    fieldName: 'IDToken1',
    anchor: 'IDToken1'
  }
]

describe('getFieldError', () => {
  test('should return the error object', () => {
    expect(getFieldError(errorData, 'IDToken1')).toBeTruthy()
  })
})

describe('translateErrors', () => {
  test('should return the translated errors array', () => {
    expect(translateErrors(errorData, 'en')).toStrictEqual(
      [{
        label: 'Enter an email address in the correct format, like name@example.com',
        token: 'LOGIN_CREDENTIALS_MISSING_USERNAME',
        fieldName: 'IDToken1',
        anchor: 'IDToken1',
        processed: true
      }]
    )
  })
})

const data = {
  "errors": [
      {
          "errData": {
              "label": "Invalid email format: pspence@companieshouse.gov.u",
              "token": "EMAIL_FORMAT_ERROR",
              "fieldName": "IDToken1",
              "anchor": "IDToken1"
          },
          "tokenNoNamespace": "EMAIL_FORMAT_ERROR",
          "token": "LOGIN_EMAIL_FORMAT_ERROR",
          "label": "Enter an email address in the correct format, like name@example.com",
          "anchor": "IDToken1",
          "fieldName": "IDToken1",
          "processed": true
      }
  ]
}

const newErrorData = [
  {
    token: 'LOGIN_CREDENTIALS_MISSING_USERNAME',
    label: 'Enter an email address in the correct format, like name@example.com',
    anchor: 'IDToken1',
    fieldName: 'IDToken1',
    processed: true
  }
]

describe('processErrorMessageTemplateStrings', () => {
  test('should return a new array of errors', () => {
    expect(processErrorMessageTemplateStrings(errorData, data)).toStrictEqual(newErrorData)
  })
})