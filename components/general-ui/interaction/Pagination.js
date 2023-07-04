import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'
import log from '../../../services/log'
import generateEllipsisBreaks from '../../../services/pagination'
import { MATOMO_LOGGING } from '../../../services/environment'

const Pagination = (props) => {
  const {
    pages,
    currentPage,
    startPage,
    clickNext,
    clickPrevious,
    clickToSelectPage,
    displayPrev,
    displayNext,
    display,
    matomo
  } = props
  const { trackEvent, pushInstruction } = useMatomo()
  const [pageElements, setPageElements] = useState([])
  const listItems = []
  const pageList = () => {
    const ellipses = generateEllipsisBreaks(pages, currentPage)
    for (let i = startPage; i <= pages?.length; i++) {
      let classStyle = 'govuk-pagination__item'
      let ariaCurrent = ''
      if (i === currentPage) {
        classStyle = 'govuk-pagination__item govuk-pagination__item--current'
        ariaCurrent = 'page'
      }
      if (
        ellipses?.isQualifiedForEllipsis &&
        ellipses?.pageEllipsis.includes(i)
      ) {
        listItems.push(
          <li className='govuk-pagination__item govuk-pagination__item--ellipses'>
            ...
          </li>
        )
      }
      if (
        !ellipses?.pageEllipsis.includes(i) &&
        ellipses?.displayedPages.includes(i)
      ) {
        const listItem = (
          <li key={i} className={classStyle}>
            <a
              className='govuk-link govuk-pagination__link'
              aria-label={`Page ${i}`}
              aria-current={ariaCurrent}
              value={i}
              tabIndex='0'
              onClick={(e) => clickToSelectPage(e)}
            >
              {i}
            </a>
          </li>
        )
        listItems.push(listItem)
      }
    }

    return listItems
  }

  useEffect(() => {
    setPageElements(pageList())
  }, [pages, currentPage])

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
    clickPrevious()
  }

  const onClickNext = (e) => {
    matomoTracking(e)
    clickNext()
  }

  const previousHtml = (
    <div className='govuk-pagination__prev' data-testid='previous-id'>
      <a
        className='govuk-link govuk-pagination__link'
        rel='prev'
        tabIndex='0'
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
    <div className='govuk-pagination__next' data-testid='next-id'>
      <a
        className='govuk-link govuk-pagination__link'
        rel='next'
        tabIndex='0'
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
  const previous = displayPrev ? (previousHtml) : (<div className='govuk-pagination__prev'></div>)
  const next = displayNext ? (nextHtml) : (<div className='govuk-pagination__next'></div>)
  const paginationHtml = (
    <nav
      className='govuk-pagination'
      role='navigation'
      aria-label='results'
      data-testid='nav-id'
    >
      {previous}
      <ul className='govuk-pagination__list'>{pageElements}</ul>
      {next}
    </nav>
  )
  return display ? paginationHtml : <div data-testid='div-id'></div>
}

export default Pagination

Pagination.propTypes = {
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  startPage: PropTypes.number,
  displayPrev: PropTypes.bool,
  displayNext: PropTypes.bool,
  display: PropTypes.bool,
  clickNext: PropTypes.func,
  clickPrevious: PropTypes.func,
  clickToSelectPage: PropTypes.func
}
