import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CheckboxGroup from './CheckboxGroup'
import HeadingCount from '../../../services/HeadingCount'
import InputField from './InputField'
import { axe } from 'jest-axe'
import { matomoHelper } from '../../../scripts/cleanAnalytics.js'

jest.mock('../../../scripts/cleanAnalytics.js')

const defaultProps = {
  id: 'CheckboxGroup',
  testId: 'CheckboxGroup',
  label: 'Test heading',
  headingCount: new HeadingCount(),
  formGroup: 'testGroup',
  formGroupHeading: 'Test heading',
  formGroupHing: 'Test hint',
  options: [
    { checked: false, label: 'option1', value: 'option1', hint: 'option one hint text' },
    { checked: true, label: 'option2', value: 'option2', hint: 'option two hint text' }
  ],
  matomo: ['trackEvent', 'companyNo=12323', 'test']
}

describe('CheckboxGroup', () => {
  it('Renders as checkbox group', () => {
    render(<CheckboxGroup {...defaultProps}/>)

    const testElement = screen.getByTestId('CheckboxGroup')

    expect(testElement).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByLabelText('option2')).toBeChecked()
  })

  it('Renders as checkbox group with error', () => {
    render(<CheckboxGroup {...defaultProps} errors={[{ anchor: 'CheckboxGroup', label: 'Test error' }]}/>)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })

  it('Should have no common accessibility issues', async () => {
    const { container, debug } = render(<CheckboxGroup
      {...defaultProps}
      errors={[{ anchor: 'CheckboxGroup', label: 'Test error' }]}
    />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has a matomo prop, fires the onClick and tracks an event', () => {
    render(<CheckboxGroup {...defaultProps}  />)
    const testElement = screen.getByTestId('CheckboxGroup')

    expect(testElement).toBeInTheDocument()
    
    const option = screen.getByDisplayValue('option1')

    const option2 = screen.getByDisplayValue('option2')

    matomoHelper.mockImplementationOnce(() => ({type: 'trackEvent'}))

    fireEvent.click(option)

    matomoHelper.mockImplementationOnce(() => ({type: 'trackGoal'}))

    fireEvent.click(option2)
  })

  // it('has a matomo prop, fires the onClick and tracks a goal', () => {
  //   render(<CheckboxGroup {...defaultProps} matomo={['trackGoal', '1']} />)
  //   const testElement = screen.getByTestId('CheckboxGroup')

  //   expect(testElement).toBeInTheDocument()

  //   matomoHelper.mockImplementationOnce(() => ({type: 'trackGoal'}))

  //   fireEvent.click(testElement)
  // })
})
