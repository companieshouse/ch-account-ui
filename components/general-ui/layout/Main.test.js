import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {
  it('renders main wrapper', () => {
    render(<Main>Test content</Main>)
    const wrapper = screen.getByRole('main')
    
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('govuk-main-wrapper')
  })
})
