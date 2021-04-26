import React from 'react'
import { render, screen } from '@testing-library/react'
import LinkText from './LinkText'

describe('LinkText', () => {
  it('Renders as details', () => {
    render(<LinkText testId="Button" href="/account/register">Test link text</LinkText>)
    const testElement = screen.getByTestId('Button')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('href', '/account/register')
    expect(screen.getByText('Test link text')).toBeInTheDocument()
  })
})
