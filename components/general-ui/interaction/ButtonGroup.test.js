import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonGroup from './ButtonGroup'
import Button from './Button'

describe('ButtonGroup', () => {
  it('Renders as button group with content', () => {
    render(<ButtonGroup><Button testId="test-button" label="Test button" /></ButtonGroup>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.closest('div')).toHaveClass('govuk-button-group')
  })

})
