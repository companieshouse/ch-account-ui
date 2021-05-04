import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('Renders as button, default behaviour', () => {
    render(<Button testId="button">Button text</Button>)

    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('type', 'submit')
    expect(testElement).toHaveTextContent('Button text')
  })

  it('Renders as link', () => {
    render(<Button testId="button" renderAs="link" href="/account/register" secondary>Link text</Button>)

    const testElement = screen.getByTestId('button')

    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveAttribute('href', '/account/register')
    expect(testElement).toHaveClass('govuk-button--secondary')
    expect(testElement).toHaveTextContent('Link text')
  })
})
