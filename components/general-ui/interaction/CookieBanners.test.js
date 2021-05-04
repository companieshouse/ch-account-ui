import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import CookieBanners from './CookieBanners'

describe('CookieBanners', () => {
  beforeEach(() => {
    global.CookieConsent = {
      start: jest.fn(),
    }
  })

  afterEach(() => {
    delete global.CookieConsent
  })

  it('Renders cookie banner markup', () => {
    render(<CookieBanners testId="CookieBanners"/>)
    expect(screen.getByText('Accept additional cookies')).toBeInTheDocument()
    expect(screen.getByText('Reject additional cookies')).toBeInTheDocument()
    expect(screen.getByText('View cookies')).toBeInTheDocument()
  })

  it('Initialises cookie banner plugin', () => {
    const onStart = () => {}
    const onStop = () => {}
    render(<CookieBanners testId="CookieBanners" onStart={onStart} onStop={onStop}/>)
    expect(global.CookieConsent.start).toHaveBeenCalledWith(onStart, onStop)
  })
})
