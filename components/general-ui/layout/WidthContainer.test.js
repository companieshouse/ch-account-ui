import React from 'react'
import { render, screen } from '@testing-library/react'
import WidthContainer from './WidthContainer'

describe('WidthContainer', () => {
  it('renders container with content', () => {
    render(<WidthContainer>Container content</WidthContainer>)
    const container = screen.getByText('Container content')

    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('govuk-width-container')
  })
})
