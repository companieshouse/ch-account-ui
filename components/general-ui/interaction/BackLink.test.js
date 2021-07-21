import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import BackLink from './BackLink'

describe('BackLink', () => {
  it('Renders a link, has correct href and content', () => {
    render(<BackLink testId="backLink" href="#linkTest"/>)

    const testElement = screen.getByTestId('backLink')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('href', '/#linkTest')
    expect(testElement).toHaveTextContent('Back')
  })

  it('Renders a anchor, calls onClick handler', () => {
    const onClick = jest.fn()
    render(<BackLink testId="backLink" onClick={onClick} />)

    const testElement = screen.getByTestId('backLink')
    fireEvent.click(testElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
