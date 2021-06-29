
const REGISTRATION_3 = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens['REGISTRATION_3.[0].PageHeading.verifyYourEmailAddress']
    }
  },
  {
    component: 'DisplayUiElements'
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.weveSentAnEmailTo']
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens['SHARED.email']
        },
        props: {
          weight: 'bold'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['REGISTRATION_3.[2].BodyText.whichContainsAVerificationLink']
        }
      }
    ]
  },
  {
    component: 'List',
    props: {
      type: 'number',
      items: [
        'Open the email.',
        'Select the verification link in the email.'
      ]
    }
  },
  {
    component: 'InsetText',
    props: {
      children: tokens['REGISTRATION_3.[4].InsetText.theVerificationLinkWillExpireIfYouDoNot']
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['REGISTRATION_3.[5].BodyText.thisPageWillUpdateAutomaticallyWhenYouSelect'],
      weight: 'bold'
    }
  },
  {
    component: 'Details',
    props: {
      children: tokens['REGISTRATION_3.[6].Details.trCopyGoesHere'],
      summary: tokens['SHARED.iHaveNotReceivedAnEmail']
    }
  }
]
export default REGISTRATION_3
