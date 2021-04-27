import React from 'react'
import { render, screen } from '@testing-library/react'
import Tr from './Tr'

describe('Tr', () => {
  it('renders table row with content', () => {
    render(
      <Tr>
        <td>Test row content</td>
      </Tr>,
      {
        wrapper: ({ children }) => <table>
          <tbody>{children}</tbody>
        </table>
      }
    )
    const row = screen.getByRole('row', { name: /Test row content/i })

    expect(row).toBeInTheDocument()
    expect(row).toHaveClass('govuk-table__row')
  })
})
