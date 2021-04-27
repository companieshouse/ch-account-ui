import React from 'react'
import { render, screen } from '@testing-library/react'
import Td from './Td'

describe('Td', () => {
  it('renders table data cell with content', () => {
    render(
      <Td>Test content</Td>,
      {
        wrapper: ({ children }) => <table>
          <tbody>
          <tr>{children}</tr>
          </tbody>
        </table>
      }
    )
    const cell = screen.getByRole('cell', { name: /Test content/i })

    expect(cell).toBeInTheDocument()
    expect(cell).toHaveClass('govuk-table__cell')
  })
})
