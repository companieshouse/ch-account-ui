import React from 'react'
import { render, screen } from '@testing-library/react'
import BackLink from './BackLink'

describe('BackLink', () => {
  it('Renders a link, has correct href and content', () => {
    render(<BackLink testId="backLink" href="#linkTest">Back Link Test</BackLink>)

    const testElement = screen.getByTestId('backLink')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('href', '/#linkTest')
    expect(testElement).toHaveTextContent('Back Link Test')
  })
})
