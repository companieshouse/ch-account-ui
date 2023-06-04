import React from 'react'
import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'

jest.mock('../../../scripts/cleanAnalytics.js')

describe('Pagination', () => {
  it('Renders as Pagination component, when display is true', () => {
    render(<Pagination display={true} />)
    const testElement = screen.getByTestId('nav-id')
   
    expect(testElement).toBeInTheDocument()
  })

  it('Should not renders as Pagination component, when display is false', () => {
    render(<Pagination display={false} />)
    const testElement = screen.getByTestId('div-id')
   
    expect(testElement).toBeInTheDocument()
    expect(testElement.innerHTML).toBe("")
  })

  it('Should renders as Pagination Next Button, when displayNext is true', () => {
    render(<Pagination display={true} displayNext={true}/>)
    const testElement = screen.getByTestId('next-id')
   
    expect(testElement).toBeInTheDocument()
  })

  it('Should renders as Pagination Previous Button, when displayPrevious is true', () => {
    render(<Pagination display={true} displayPrev={true}/>)
    const testElement = screen.getByTestId('previous-id')
   
    expect(testElement).toBeInTheDocument()
  })
})
