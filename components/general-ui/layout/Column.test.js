import React from 'react'
import { render, screen } from '@testing-library/react'
import Column from './Column'

describe('Column', () => {
  it('renders grid column', () => {
    const { container } = render(<Column className={'column'} width="full"/>)
    const columnEl = container.querySelector('.column')

    expect(columnEl).toBeInTheDocument()
    expect(columnEl).toHaveClass('govuk-grid-column-full')
  })
})
