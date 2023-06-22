import React from 'react'

import Pagination from './Pagination'

const story = {
  title: 'GDS-Components/Pagination',
  component: Pagination,
  args: {}
}

export default story
const next = (current) => {}
const previous = (current) => {}
const selected = (current) => {}

// eslint-disable-next-line react/prop-types
const Template = (args) => <Pagination {...args} />

export const PAGINATION = Template.bind({})
PAGINATION.args = {
  pages: 5,
  currentPage: 2,
  startPage: 1,
  displayPrev: true,
  displayNext: true,
  display: true,
  clickNext: () => {
    next(1)
  },
  clickPrevious: () => {
    previous(1)
  },
  clickToSelectPage: () => {
    selected(1)
  }
}
