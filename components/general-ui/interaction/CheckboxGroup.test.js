import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckboxGroup from './CheckboxGroup'
import HeadingCount from '../../../services/HeadingCount'
import InputField from './InputField'
import { axe } from 'jest-axe'

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
  ]
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
})
