/* eslint-disable no-template-curly-in-string */
const EWF_LOGIN_5 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('EWF_LOGIN_5.[2].PageHeading.storeCompanyDetailsForFutureOnline')
    }
  },
  {
    component: 'Caption',
    props: {
      showErrorSummary: true
    },
    dynamicProps: {
      children: '${company.name}'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('EWF_LOGIN_5.[2].PageHeading.storeCompanyDetailsForFutureOnline'),
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('EWF_LOGIN_5.[3].BodyText.weCanSecurelyStoreTheCompanyDetailsYou')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('EWF_LOGIN_5.[4].BodyText.thisMeansYou')
    }
  },
  {
    component: 'List',
    props: {
      items: [
        tokens('EWF_LOGIN_5.[4].List.willNotNeedToReenterTheCompanyAuthenticationCode'),
        tokens('EWF_LOGIN_5.[4].List.canAuthoriseOtherPeople')
      ]
    }
  },
  {
    component: 'DisplayUiElements',
    dynamicProps: {
      'elementProps.IDToken2.label': tokens('SHARED.doYouWantUsToStoreTheCompanyDetailsFor')
    },
    props: {
      elementProps: {
        IDToken2: {
          fixedWidth: '10',
          options: [
            {
              label: tokens('SHARED.yes')
            },
            {
              label: tokens('SHARED.no')
            }
          ],
          customValidation: [
            {
              name: 'radioRequired',
              token: 'SELECT_YES_NO'
            }
          ],
          matomo: ['trackEvent', tokens('SHARED.doYouWantUsToStoreTheCompanyDetailsFor.analytics')]
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  }
]

export default EWF_LOGIN_5
