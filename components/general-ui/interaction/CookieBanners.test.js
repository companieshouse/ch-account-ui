import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CookieBanners from './CookieBanners'

describe('CookieBanners', () => {
  beforeEach(() => {
    global.CookieConsent = {
      start: jest.fn(),
      acceptCookies: jest.fn(),
      rejectCookies: jest.fn(),
      hideCookieBanners: jest.fn()
    }
  })

  afterEach(() => {
    delete global.CookieConsent
  })

  it('Renders cookie banner markup', () => {
    render(<CookieBanners testId="CookieBanners"/>)
    expect(screen.getByText('Accept analytics cookies')).toBeInTheDocument()
    expect(screen.getByText('Reject analytics cookies')).toBeInTheDocument()
    expect(screen.getByText('View cookies')).toBeInTheDocument()
  })

  it('Initialises cookie banner plugin', () => {
    const onStart = () => {}
    const onStop = () => {}
    render(<CookieBanners testId="CookieBanners" onStart={onStart} onStop={onStop}/>)
    expect(global.CookieConsent.start).toHaveBeenCalledWith(onStart, onStop)
  })

  it('Accepts the cookie consent', () => {
    const acceptCookies = () => {}
    render(<CookieBanners testId="CookieBanners" onAcceptCookies={acceptCookies} />)
    const testElement = screen.getByText("Accept analytics cookies")
    fireEvent.click(testElement)
    expect(global.CookieConsent.acceptCookies).toHaveBeenCalledWith(acceptCookies, "full-journey")
  })

  it('Rejects the cookie consent', () => {
    const rejectCookies = () => {}
    render(<CookieBanners testId="CookieBanners" onRejectCookies={rejectCookies} />)
    const testElement = screen.getByText("Reject analytics cookies")
    fireEvent.click(testElement)
    expect(global.CookieConsent.rejectCookies).toHaveBeenCalledWith(rejectCookies, "full-journey")
  })

  it('Hides the cookie consent', () => {
    const hideCookies = () => {}
    render(<CookieBanners testId="CookieBanners" onHideCookies={hideCookies} />)
    const testElement = screen.getAllByText("Hide this message")
    fireEvent.click(testElement[0])
    expect(global.CookieConsent.hideCookieBanners).toHaveBeenCalled()
  })
})
