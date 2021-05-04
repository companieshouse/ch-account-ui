import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Table', () => {
  it('renders table content and caption', () => {
    const content = <tbody>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    </tbody>
    render(<Table caption="Test caption">{content}</Table>)
    const table = screen.getByRole('table', { name: /Test caption/i })

    expect(screen.getByText('The table body')).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(table).toHaveClass('govuk-table')
  })
})
