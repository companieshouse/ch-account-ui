import React from 'react'
import { render, screen } from '@testing-library/react'
import FormGroup from './FormGroup'

describe('FormGroup', () => {
  it('Renders as form group', () => {
    render(<FormGroup>Some inputs</FormGroup>)
    expect(screen.getByText('Some inputs')).toBeInTheDocument()
  })

  it('Renders as form group with error', () => {
    render(<FormGroup
      errors={[{ anchor: 'FormGroup', label: 'Test error' }]}
      groupIds={['FormGroup']}>Some inputs</FormGroup>
    )
    expect(screen.getByText('Some inputs')).toHaveClass('govuk-form-group--error')
  })
})
