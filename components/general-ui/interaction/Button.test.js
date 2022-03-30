import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
import { matomoHelper } from '../../../scripts/cleanAnalytics.js'

jest.mock('../../../scripts/cleanAnalytics.js')

describe('Button', () => {
  it('Renders as button, default behaviour', () => {
    render(<Button testId="button">Button text</Button>)

    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('type', 'submit')
    expect(testElement).toHaveTextContent('Button text')
  })

  it('Renders as link', () => {
    render(<Button testId="button" renderAs="link" href="/account/register" secondary>Link text</Button>)

    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('href', '/account/register')
    expect(testElement).toHaveClass('govuk-button--secondary')
    expect(testElement).toHaveTextContent('Link text')

    
  })

  it('has warning prop set as true, has warning, and start class', () => {
    
    render(<Button testId="button" warning={true} hasStartIcon>Button text</Button>)
    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()

    expect(testElement).toHaveClass('govuk-button--warning')
    expect(testElement).toHaveClass('govuk-button--start')
  })

  it('has a matomo prop, fires the onClick and tracks an event', () => {
    render(<Button testId='button' matomo={['trackEvent', 'companyNo=12323', 'test']}>matomo event</Button>)
    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()

    matomoHelper.mockImplementationOnce(() => ({type: 'trackEvent'}))

    fireEvent.click(testElement)
  })

  it('has a matomo prop, fires the onClick and tracks a goal', () => {
    render(<Button testId='button' matomo={['trackGoal', '1']}>matomo goal</Button>)
    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()

    matomoHelper.mockImplementationOnce(() => ({type: 'trackGoal'}))

    fireEvent.click(testElement)
  })

  it('has a loading state', () => {
    render(<Button loading testId='button'>loading</Button>)
    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()

    expect(testElement).toHaveClass('govuk-button--disabled')
  })

  // it('has a handler prop passed', () => {
  //   const handler = {name: jest.fn()}
  //   const handlers = {handler}
  //   render(<Button testId='button' handler={handler} handlers={handlers}>handler example</Button>)
  //   const testElement = screen.getByTestId('button')

  //   expect(testElement).toBeInTheDocument()
  //   fireEvent.click(testElement)
  // })
  
})
