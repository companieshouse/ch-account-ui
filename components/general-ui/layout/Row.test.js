import React from 'react'
import { render, screen } from '@testing-library/react'
import Row from './Row'

const content = 'itemOne\nitemTwo\nitemThree'

describe('Row', () => {
  it('renders grid row content', () => {
    render(<Row>Row content</Row>)
    const row = screen.getByText('Row content')

    expect(row).toBeInTheDocument()
    expect(row).toHaveClass('govuk-grid-row')
  })
})
