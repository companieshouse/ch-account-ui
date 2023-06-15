import React from 'react'

import Pagination from './Pagination'

const story = {
  title: 'GDS-Components/Pagination',
  component: Pagination,
  args: {}
}

export default story
const next = (current) => {}

// eslint-disable-next-line react/prop-types
const Template = (args) => <Pagination {...args} />

export const PAGINATION = Template.bind({})
PAGINATION.args = {
  totalPages: 5,
  currentPage: 2,
  startPage: 1,
  nextFunc: () => {
    next(1)
  }
}
