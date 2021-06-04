import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import RadioGroup from './RadioGroup'
import HeadingCount from '../../../services/HeadingCount'
import CheckboxGroup from './CheckboxGroup'

const defaultProps = {
  heading: 'Test heading',
  headingCount: new HeadingCount(),
  id: 'RadioGroup',
  label: 'Radio Group',
  options: [
    { checked: true, label: 'option1', value: 'option1' },
    { checked: true, label: 'option2', value: 'option2', }
  ],
  testId: 'RadioGroupID'
}

describe('RadioGroup', () => {
  it('Renders as radio group', () => {
    render(<RadioGroup {...defaultProps} renderLabelAs="heading" />)
    const testElement = screen.getByTestId('RadioGroupID')

    expect(testElement).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByLabelText('option2')).toBeChecked()
  })

  it('Renders as radio group group with error', () => {
    render(<RadioGroup {...defaultProps} errors={[{ anchor: 'RadioGroup', label: 'Test error' }]}/>)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })

  it('Should have no common accessibility issues', async () => {
    const { container } = render(<RadioGroup {...defaultProps} errors={[{ anchor: 'RadioGroup', label: 'Test error' }]}/>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
