import React from 'react'
import { render } from '@testing-library/react'
import Br from './Br'

describe('Br', () => {
  it('renders page break', () => {
    const {container} = render(<Br className={'br'} style={{color: 'blue'}}/>)
    const breakEl = container.querySelector('.br')

    expect(breakEl).toBeInTheDocument()
    expect(breakEl).toHaveStyle('color: blue')
  })
})
