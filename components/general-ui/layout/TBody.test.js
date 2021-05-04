import React from 'react'
import { render, screen } from '@testing-library/react'
import TBody from './TBody'

describe('TBody', () => {
  it('renders table body with content', () => {
    const content =
      <tr>
        <td>Table body content</td>
      </tr>
    const { container } = render(<TBody>{content}</TBody>, { wrapper: ({ children }) => <table>{children}</table> })

    expect(container.querySelector('.govuk-table__body')).toBeInTheDocument()
    expect(screen.getByText('Table body content')).toBeInTheDocument()
  })
})
