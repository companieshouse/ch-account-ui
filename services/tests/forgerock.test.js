const {normaliseErrors, findCustomStage, findCallback, forgerockFlow, getUserFields, getCompaniesAssociatedWithUser, findCustomPageProps} = require('../forgerock')

import { StepType } from '@forgerock/javascript-sdk/lib'
const noStageData = {
  payload: {
    callbacks: [
      {
        type: "NameCallBack",
        output: [
          {
            name: 'test',
            value: 'test value'
          }
        ],
        input: [
          {
            name: "IDToken1",
            value: ""
          }
        ]
      },
    ],
    stage: "LOGIN"
  },
}

const stageData = {
  payload: {
    callbacks: [
      {
        type: "NameCallBack",
        output: [
          {
            name: 'test',
            value: 'test value'
          }
        ],
        input: [
          {
            name: "IDToken1",
            value: ""
          }
        ]
      },
      {
        type: "HiddenValueCallback",
        output: [
          {
            name: 'value',
            value: 'EWF_LOGIN_OTP'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: "IDToken1",
            value: "stage"
          }
        ]
      },
    ],
    stage: "LOGIN"
  },
}

const callbackData = {
  payload: {
    callbacks: [
      {
        type: "HiddenValueCallback",
        output: [
            {
                name: "value",
                value: "{\"phoneNumber\":\"\",\"emailAddress\":\"p*****@companieshouse.gov.uk\",\"type\":\"email\"}"
            },
            {
                name: "id",
                value: "pagePropsJSON"
            }
        ],
        input: [
              {
                  name: "IDToken1",
                  value: "pagePropsJSON"
              }
          ]
      }
    ]
  }
}

describe('normaliseErrors', () => {
  test('returns normalised errors', () => {
    expect(normaliseErrors(stageData)).toStrictEqual([])
  })

  test('returns early when no step passed', () => {
    expect(normaliseErrors()).toStrictEqual([])
  })

  test('adds an error when step type is login failure', () => {
    const step = {
      type: StepType.LoginFailure
    }
    expect(normaliseErrors(step)).toStrictEqual([{
      anchor: "IDToken1",
      errData: {
        type: "LoginFailure",
      },
      stage: "NO_SESSION_ERROR",
      token: "UNKNOWN_ERROR_LOGIN_FAILURE",
      tokenNoNamespace: "ERROR_LOGIN_FAILURE",
      }])
  })

  test('step has callbacks', () => {
    const step = {
      callbacks: [
          {
            type: "NameCallBack",
            output: [
              {
                name: 'test',
                value: 'test value'
              }
            ],
            input: [
              {
                name: "IDToken1",
                value: ""
              }
            ]
          },
          
          {
            type: "HiddenValueCallback",
            output: [
                {
                    name: "value",
                    value: "{\"phoneNumber\":\"\",\"emailAddress\":\"p*****@companieshouse.gov.uk\",\"type\":\"email\"}"
                },
                {
                    name: "id",
                    value: "pagePropsJSON"
                }
            ],
            input: [
                  {
                      name: "IDToken1",
                      value: "pagePropsJSON"
                  }
              ]
          },
          {
            type: "HiddenValueCallback",
            output: [
                {
                    name: "value",
                    value: "{\"errors\":[{\"label\":\"Username missing\",\"token\":\"CREDENTIALS_MISSING_USERNAME\",\"fieldName\":\"IDToken1\",\"anchor\":\"IDToken1\"},{\"label\":\"Password missing\",\"token\":\"CREDENTIALS_MISSING_PASSWORD\",\"fieldName\":\"IDToken2\",\"anchor\":\"IDToken2\"}]}"
                },
                {
                    name: "id",
                    value: "pagePropsJSON"
                }
            ],
            input: [
                {
                    name: "IDToken5",
                    value: "pagePropsJSON"
                }
            ],
            _id: 6
        },
        
      ]
    }
    expect(normaliseErrors(step)).toStrictEqual([])
  })

  test('step has callbacks and policy errors', () => {
    const step2 = {
        payload: {
          callbacks: [
            {
              type: "CUSTOMCallBack",
              output: [
                {
                  name: 'failedPolicies',
                  value: 'test value'
                },
                {
                  name: 'name',
                  value: 'test value'
                }
              ],
              input: [
                {
                  name: "IDToken1",
                  value: ""
                }
              ]
            },
            {
              type: "HiddenValueCallback",
              output: [
                  {
                      name: 'value',
                      value: "{\"errors\":[{\"label\":\"The new password does not meet the password policy requirements.\",\"token\":\"PWD_POLICY_ERROR\",\"fieldName\":\"IDToken3\",\"anchor\":\"IDToken3\"}],\"failedPolicies\":[{\"policyRequirements\":[{\"policyRequirement\":\"LENGTH_BASED\",\"params\":{\"max-password-length\":0,\"min-password-length\":8}}],\"property\":\"password\"},{\"policyRequirements\":[{\"policyRequirement\":\"DICTIONARY\",\"params\":{\"case-sensitive-validation\":false,\"check-substrings\":false,\"min-substring-length\":5,\"test-reversed-password\":true}}],\"property\":\"password\"},{\"policyRequirements\":[{\"policyRequirement\":\"REPEATED_CHARACTERS\",\"params\":{\"case-sensitive-validation\":true,\"max-consecutive-length\":2}}],\"property\":\"password\"}]}"
                  },
                  {
                      name: "id",
                      value: "pagePropsJSON"
                  }
              ],
              input: [
                  {
                      name: "IDToken6",
                      value: "pagePropsJSON"
                  }
              ]
            }
          ]
        },
        callbacks: [
          {
            type: "CUSTOMCallBack",
            output: [
              {
                name: 'failedPolicies',
                value: 'test value'
              },
              {
                name: 'name',
                value: 'test value'
              }
            ],
            input: [
              {
                name: "IDToken1",
                value: ""
              }
            ]
          },
          {
            type: "HiddenValueCallback",
            output: [
                {
                    name: 'value',
                    value: "{\"errors\":[{\"label\":\"The new password does not meet the password policy requirements.\",\"token\":\"PWD_POLICY_ERROR\",\"fieldName\":\"IDToken3\",\"anchor\":\"IDToken3\"}],\"failedPolicies\":[{\"policyRequirements\":[{\"policyRequirement\":\"LENGTH_BASED\",\"params\":{\"max-password-length\":0,\"min-password-length\":8}}],\"property\":\"password\"},{\"policyRequirements\":[{\"policyRequirement\":\"DICTIONARY\",\"params\":{\"case-sensitive-validation\":false,\"check-substrings\":false,\"min-substring-length\":5,\"test-reversed-password\":true}}],\"property\":\"password\"},{\"policyRequirements\":[{\"policyRequirement\":\"REPEATED_CHARACTERS\",\"params\":{\"case-sensitive-validation\":true,\"max-consecutive-length\":2}}],\"property\":\"password\"}]}"
                },
                {
                    name: "id",
                    value: "pagePropsJSON"
                }
            ],
            input: [
                {
                    name: "IDToken6",
                    value: "pagePropsJSON"
                }
            ]
          }
        ]
    }
    console.log('step has callbacks and policy errors')
    expect(normaliseErrors(step2)).toStrictEqual([
      {
        anchor: "IDToken3",
        errData: {
          anchor: "IDToken3",
          fieldName: "IDToken3",
          label: "The new password does not meet the password policy requirements.",
          token: "PWD_POLICY_ERROR",
        },
        fieldName: "IDToken3",
        label: undefined,
        params: {
          'max-password-length': 0,
          'min-password-length': 8,
        },
        token: "UNKNOWN_LENGTH_BASED",
        tokenNoNamespace: "LENGTH_BASED",
        },
        {
        anchor: "IDToken3",
        errData: {
          anchor: "IDToken3",
          fieldName: "IDToken3",
          label: "The new password does not meet the password policy requirements.",
          token: "PWD_POLICY_ERROR",
        },
        fieldName: "IDToken3",
        label: undefined,
        params: {
          'case-sensitive-validation': false,
          'check-substrings': false,
          'min-substring-length': 5,
          'test-reversed-password': true,
        },
        token: "UNKNOWN_DICTIONARY",
        tokenNoNamespace: "DICTIONARY",
        },
        {
        anchor: "IDToken3",
        errData: {
          anchor: "IDToken3",
          fieldName: "IDToken3",
          label: "The new password does not meet the password policy requirements.",
          token: "PWD_POLICY_ERROR",
        },
        fieldName: "IDToken3",
        label: undefined,
        params: {
          'case-sensitive-validation': true,
          'max-consecutive-length': 2,
        },
        token: "UNKNOWN_REPEATED_CHARACTERS",
        tokenNoNamespace: "REPEATED_CHARACTERS",
        }
    ])
  })
})

describe('findCustomStage', () => {
  test('should return no stage', () => {
    expect(findCustomStage(noStageData)).toStrictEqual("")
  })

  test('should return a stage', () => {
    expect(findCustomStage(stageData)).toStrictEqual("EWF_LOGIN_OTP")
  })
})

describe('findCallback', () => {
  test('should not find a callback', () => {
    expect(findCallback(stageData, 'pagePropsJSON')).toStrictEqual(undefined)
  })

  test('should not find a callback', () => {
    expect(findCallback(callbackData, 'pagePropsJSON')).toStrictEqual("{\"phoneNumber\":\"\",\"emailAddress\":\"p*****@companieshouse.gov.uk\",\"type\":\"email\"}")
  })
})



describe('findCustomPageProps', () => {
  const stepValue = {
    payload: {
      callbacks: [
        {
          type: "HiddenValueCallback",
          output: [
            {
              name: "value",
              value: "{\"errors\":[{\"label\":\"Username missing\",\"token\":\"CREDENTIALS_MISSING_USERNAME\",\"fieldName\":\"IDToken1\",\"anchor\":\"IDToken1\"},{\"label\":\"Password missing\",\"token\":\"CREDENTIALS_MISSING_PASSWORD\",\"fieldName\":\"IDToken2\",\"anchor\":\"IDToken2\"}]}"
            },
            {
                name: "id",
                value: "pagePropsJSON"
            }
          ],
          input: [
              {
                  name: "IDToken5",
                  value: "pagePropsJSON"
              }
          ],
          _id: 6
      }
      ]
    }
  }
  const stepNoValue = {
    payload: {
      callbacks: [
        {
          type: "HiddenValueCallback",
          output: [
              
              {
                  name: "id",
                  value: "pagePropsJSON"
              }
          ],
          input: [
              {
                  name: "IDToken5",
                  value: "pagePropsJSON"
              }
          ],
          _id: 6
      }
      ]
    }
  }
  test('should trigger early return', () => {
    expect( findCustomPageProps(stepNoValue) ).toStrictEqual({})
  })


  test('should have errors', () => {
    expect( findCustomPageProps(stepValue) ).toStrictEqual({
      errors: [
        {
           anchor: "IDToken1",
          fieldName: "IDToken1",
          label: "Username missing",
          token: "CREDENTIALS_MISSING_USERNAME",
        },
        {
          anchor: "IDToken2",
          fieldName: "IDToken2",
          label: "Password missing",
          token: "CREDENTIALS_MISSING_PASSWORD",
        },
      ],
    })
  })
})

const FRflowData = {
  onSuccess: jest.fn(),
  onFailure: jest.fn(),
  onUpdateUi: jest.fn(stageData),
  journeyName: 'EWF_LOGIN_OTP',
  journeyNamespace: '',
  stepOptions: {"query": {}},
  lang: false,
  getLang: false,
  isAuthOnly: false
}

describe('forgerockFlow', () => {
  
  test('should return null', () => {
    expect(forgerockFlow(FRflowData)).toStrictEqual(null)
  })

  test('should return undefined', async () => {
    () => jest.spyOn(window, 'fetch')
    FRflowData.lang = 'en'
    // await FRAuth.next(undefined, {});
    expect(forgerockFlow(FRflowData)).toStrictEqual(undefined)
  })
})

describe('getUserFields', () => {
  // beforeEach(() => jest.spyOn(window, 'fetch'))
  test('should return a promise object', async () => {
    // expect.hasAssertions();
    getUserFields('', '', {}).then(data => expect(data).toBeDefined());
  })

  // it('should be able to handle failed call', async () => {
  //   () => jest.spyOn(window, 'fetch')
  //   // expect.hasAssertions();
  //   return expect(getUserFields('', '', {})).rejects.toThrowError('Network request failed');
  // });
})

describe('getCompaniesAssociatedWithUser', () => {
  test('should return a promise object', () => {
    getCompaniesAssociatedWithUser('', 1, '', '').then(data => expect(data).toBeDefined());
  })

  test('should return an error', async () => {
    return getCompaniesAssociatedWithUser('', '', '', '').then(data => expect(data).toBeUndefined());;
  })
})