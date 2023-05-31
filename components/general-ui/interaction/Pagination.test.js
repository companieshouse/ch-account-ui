import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from './Pagination'

jest.mock('../../../scripts/cleanAnalytics.js')

describe('Pagination', () => {
  it('Renders as Pagination component, default behaviour', () => {
    render(<Pagination />)

    const testElement = screen.getByTestId('nav-id')

    expect(testElement).toBeInTheDocument()
  })

})
