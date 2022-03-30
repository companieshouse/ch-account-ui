import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Details from './Details'
import { matomoHelper } from '../../../scripts/cleanAnalytics.js'

jest.mock('../../../scripts/cleanAnalytics.js')

describe('Details', () => {
  it('Renders as details', () => {
    class mockConstructor {
      constructor () {
        this.init = () => null
      }
    }
    global.GOVUKFrontend = { Details: mockConstructor }
    render(<Details label="Test details label">Some details</Details>, )

    expect(screen.getByText('Test details label')).toBeInTheDocument()
    expect(screen.getByText('Some details')).toBeInTheDocument()
  })

  it('has a matomo prop, fires the onClick and tracks an event then a goal', () => {
    render(<Details label="Test details label" testId='details' matomo={['trackEvent', 'companyNo=12323', 'test']}>Some Details</Details>)
    const testElement = screen.getByText('Test details label')

    expect(testElement).toBeInTheDocument()

    matomoHelper.mockImplementationOnce(() => ({type: 'trackEvent'}))

    fireEvent.click(testElement)

    matomoHelper.mockImplementationOnce(() => ({type: 'trackGoal'}))

    fireEvent.click(testElement)
  })
})
