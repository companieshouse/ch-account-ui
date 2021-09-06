import React from 'react'
import { render, screen } from '@testing-library/react'
import Details from './Details'

describe('Details', () => {
  it('Renders as details', () => {
    class mockConstructor {
      constructor () {
        this.init = () => null
      }
    }
    global.GOVUKFrontend = { Details: mockConstructor }
    render(<Details label="Test details label">Some details</Details>, )

    expect(screen.getByText('Test details label')).toBeInTheDocument()
    expect(screen.getByText('Some details')).toBeInTheDocument()
  })
})
