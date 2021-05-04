import React from 'react'
import { render, screen } from '@testing-library/react'
import Th from './Th'

describe('Th', () => {
  it('renders table header cell with content', () => {
    render(
      <Th>Test header cell</Th>,
      {
        wrapper: ({ children }) => <table>
          <tbody>
          <tr>{children}</tr>
          </tbody>
        </table>
      }
    )
    const header = screen.getByRole('columnheader', { name: /Test header cell/i })

    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('govuk-table__header')
  })
})
