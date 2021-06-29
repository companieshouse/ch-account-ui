
const REGISTRATION_ERROR = (lang, tokens) => [
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_GENERAL_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared'],
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared']
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared'],
              href: 'https://www.gov.uk/contact-companies-house',
              testId: 'contactCompaniesHouseLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['INVITE_USER_ERROR.[2].BodyText.tokenStartTokensSendMfaEmailError2BodyText']
            }
          }
        ]
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_SEND_EMAIL_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared'],
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared']
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared'],
              href: 'https://www.gov.uk/contact-companies-house',
              testId: 'contactCompaniesHouseLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['INVITE_USER_ERROR.[2].BodyText.tokenStartTokensSendMfaEmailError2BodyText']
            }
          }
        ]
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_NO_TOKEN_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens['REGISTRATION_ERROR.[2].Fragment.pageNotFound'],
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: [
            'If you typed the link, check it is correct.'
          ]
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['REGISTRATION_ERROR.[2].Fragment.ifYouPastedTheLinkCheckYouCopiedTheEntire']
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['REGISTRATION_ERROR.[2].Fragment.ifTheLinkIsCorrectYouMust']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['REGISTRATION_ERROR.[2].Fragment.startAgainToRegisterANewAccount'],
              href: '/account/register/_start/',
              testId: 'registrationLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.']
            }
          }
        ]
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_TOKEN_PARSING_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens['SHARED.pageNotFound'],
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: [
            'If you typed the link, check it is correct.'
          ]
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.ifYouPastedTheLinkCheckYouCopiedTheEntire']
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.ifTheLinkIsCorrectYouMust']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.startAgainToRegisterANewAccount'],
              href: '/account/register/_start/',
              testId: 'registrationLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.']
            }
          }
        ]
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_TOKEN_EXPIRED_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens['REGISTRATION_ERROR.[4].Fragment.verificationLinkHasExpired'],
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['REGISTRATION_ERROR.[4].Fragment.theLinkToVerifyYourEmailAddressHowNowExpired']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['REGISTRATION_ERROR.[4].Fragment.registerANewAccount'],
              href: '/account/register/_start/',
              testId: 'registrationLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.']
            }
          }
        ]
      }
    ]
  }
]
export default REGISTRATION_ERROR
