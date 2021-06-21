import React from 'react'
import fetchMock from 'fetch-mock'
import Login from '../../pages/account/login'
import { mockAuthId } from './common-mocks'
import { setCallback } from './story-utils'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHLogin'

export default {
  title: 'Pages/Shared',
  argTypes: {
    lang: {
      options: ['en', 'ch'],
      control: { type: 'radio' }
    }
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ pageProps, responseData, ...rest }) => {
  if (pageProps) {
    // eslint-disable-next-line react/prop-types
    setCallback(responseData.callbacks, 'pagePropsJSON', pageProps)
  }
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <Login {...rest} />
}

export const GENERIC_ERROR = Template.bind({})
const generalErrors = {
  ERROR_UNKNOWN: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ERROR_UNKNOWN"}]}'
}
GENERIC_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(generalErrors),
    type: 'select',
    mapping: generalErrors
  }
}
GENERIC_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
GENERIC_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'GENERIC_ERROR'
        },
        {
          name: 'id',
          value: 'stage'
        }
      ],
      input: [
        {
          name: 'IDToken2',
          value: 'stage'
        }
      ]
    }, {
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: ''
        },
        {
          name: 'id',
          value: 'pagePropsJSON'
        }
      ],
      input: [
        {
          name: 'IDToken5',
          value: 'pagePropsJSON'
        }
      ]
    }]
  }
}

export const LIMIT_EXCEEDED_ERROR = Template.bind({})
const limitExceededErrors = {
  ERROR_UNKNOWN: '{"errors":[{"label":"Exceeded number of attempts, please try again later.,","token":"MAX_ATTEMPTS_EXCEEDED"}]}'
}
LIMIT_EXCEEDED_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(limitExceededErrors),
    type: 'select',
    mapping: generalErrors
  }
}
LIMIT_EXCEEDED_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
LIMIT_EXCEEDED_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'LIMIT_EXCEEDED_ERROR'
        },
        {
          name: 'id',
          value: 'stage'
        }
      ],
      input: [
        {
          name: 'IDToken2',
          value: 'stage'
        }
      ]
    }, {
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: ''
        },
        {
          name: 'id',
          value: 'pagePropsJSON'
        }
      ],
      input: [
        {
          name: 'IDToken5',
          value: 'pagePropsJSON'
        }
      ]
    }]
  }
}
