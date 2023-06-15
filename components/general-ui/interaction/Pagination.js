import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'
import log from '../../../services/log'
import { MATOMO_LOGGING } from '../../../services/environment'

const Pagination = (props) => {
  const { currentPage, startPage, totalPages, matomo } = props

  const { trackEvent, pushInstruction } = useMatomo()

  const [display, setDisplay] = useState(true)
  const [displayPrev, setDisplayPrev] = useState(true)
  const [displayNext, setDisplayNext] = useState(true)
  const [curPage, setCurrentPage] = useState(currentPage)
  const [firstPage] = useState(startPage)
  const [totPages] = useState(totalPages)
  const [pages, setPages] = useState([])

  const listItems = []

  useEffect(() => {
    if (totPages <= 1) {
      setDisplay(false)
    }
    if (curPage < 1) {
      setDisplayPrev(false)
      setCurrentPage(curPage + 1)
    }
    if (curPage > totPages) {
      setDisplayNext(false)
      setCurrentPage(curPage - 1)
    }
    pageList()
  }, [totPages, curPage])

  const matomoTracking = (e) => {
    if (matomo) {
      matomo.push(e.target.value)

      const cleanData = matomoHelper(matomo)
      cleanData.action = e.target.value
      cleanData.href = 'http://'
      cleanData.url = ''

      if (cleanData.type === 'trackEvent') {
        MATOMO_LOGGING &&
          log.debug(
            'Matomo - Tracking - Event - Pagination button: ',
            cleanData
          )
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        MATOMO_LOGGING &&
          log.debug(
            'Matomo - Tracking - Goal - Pagination button: ',
            matomo[1]
          )
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

  const onClickPrevious = (e) => {
    matomoTracking(e)
    setDisplayNext(true)
    setCurrentPage(curPage - 1)
  }

  const onClickNext = (e) => {
    matomoTracking(e)
    setDisplayPrev(true)
    setCurrentPage(curPage + 1)
  }

  const pageList = () => {
    for (let i = firstPage; i <= totPages; i++) {
      let classStyle = 'govuk-pagination__item'
      let ariaCurrent = ''
      if (i === curPage) {
        classStyle = 'govuk-pagination__item govuk-pagination__item--current'
        ariaCurrent = 'page'
      }
      const listItem = (
        <li key={i} className={classStyle}>
          <a
            className='govuk-link govuk-pagination__link'
            href='#'
            aria-label={`Page ${i}`}
            aria-current={ariaCurrent}
          >
            {i}
          </a>
        </li>
      )
      listItems.push(listItem)
    }
    setPages(listItems)
  }
  const previousHtml = (
    <div className='govuk-pagination__prev'>
      <a
        className='govuk-link govuk-pagination__link'
        rel='prev'
        onClick={() => onClickPrevious()}
      >
        <svg
          className='govuk-pagination__icon govuk-pagination__icon--prev'
          xmlns='http://www.w3.org/2000/svg'
          height='13'
          width='15'
          aria-hidden='true'
          focusable='false'
          viewBox='0 0 15 13'
        >
          <path d='m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z'></path>
        </svg>
        <span className='govuk-pagination__link-title'>Previous</span>
      </a>
    </div>
  )

  const nextHtml = (
    <div className='govuk-pagination__next'>
      <a
        className='govuk-link govuk-pagination__link'
        rel='next'
        onClick={() => onClickNext()}
      >
        {' '}
        <span className='govuk-pagination__link-title'>Next</span>{' '}
        <svg
          className='govuk-pagination__icon govuk-pagination__icon--next'
          xmlns='http://www.w3.org/2000/svg'
          height='13'
          width='15'
          aria-hidden='true'
          focusable='false'
          viewBox='0 0 15 13'
        >
          <path d='m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z'></path>
        </svg>
      </a>
    </div>
  )

  const previous = displayPrev ? previousHtml : ''
  const next = displayNext ? nextHtml : ''

  const paginationHtml = (
    <nav
      className='govuk-pagination'
      role='navigation'
      aria-label='results'
      data-testid={'nav-id'}
    >
      {previous}
      <ul className='govuk-pagination__list'>{pages}</ul>
      {next}
    </nav>
  )
  return display ? paginationHtml : ''
}

export default Pagination

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  startPage: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func
}
