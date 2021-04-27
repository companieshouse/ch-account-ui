import React from 'react'
import { render, screen } from '@testing-library/react'
import THead from './THead'

describe('THead', () => {
  it('renders table header with content', () => {
    const content = <tr>
      <th scope="col">Header column one</th>
      <th scope="col">Header column two</th>
    </tr>
    const { container } = render(
      <THead>{content}</THead>,
      { wrapper: ({ children }) => <table>{children}</table> }
    )

    expect(container.querySelector('.govuk-table__head')).toBeInTheDocument()
    expect(screen.getByText('Header column one')).toBeInTheDocument()
  })
})
