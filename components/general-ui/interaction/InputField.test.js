import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import InputField from './InputField'

import { useRouter } from 'next/router'

const defaultProps = {
  label: 'Input field',
  lang: 'EN',
  id: 'InputField',
  testId: 'InputFieldID'
}

describe('InputField', () => {
  it('Renders as input field with default props', () => {
    render(<InputField {...defaultProps} />)
    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument()
  })

  it('Renders as input field with label as heading', () => {
    render(<InputField {...defaultProps} renderLabelAs="heading"/>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('Renders with hint and errors', () => {
    render(<InputField {...defaultProps} errors={[{ anchor: 'InputField', label: 'Test error' }]} hint="Test hint"/>)
    expect(screen.getByText('Test hint')).toBeInTheDocument()
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })

  it('Should have no common accessibility issues', async () => {
    HTMLCanvasElement.prototype.getContext = jest.fn();

    const { container } = render(<InputField {...defaultProps}
       errors={[{ anchor: 'InputField', label: 'Test error' }]}
       hint="Test hint"
    />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
