import React from 'react'
import { render, screen } from '@testing-library/react'
import NlToBr from './NlToBr'

const content = 'itemOne\nitemTwo\nitemThree'

describe('NlToBr', () => {
  it('renders content as split items', () => {
    const { container } = render(<NlToBr content={content}/>)

    expect(container.querySelectorAll('br')).toHaveLength(3)
    expect(screen.getByText(/itemThree/i)).toBeInTheDocument()
  })
})
