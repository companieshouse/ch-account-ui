import PropTypes from 'prop-types'
import React from 'react'

const ArrayJoin = (props) => {
  const { arr = [], joinWith = ', ', stripEmpty = true } = props
  let finalString = ''

  if (stripEmpty) {
    finalString = arr.filter((item) => Boolean(item)).join(joinWith)
  } else {
    finalString = arr.join(joinWith)
  }

  return (
    <>
      {finalString}
    </>
  )
}

export default ArrayJoin

ArrayJoin.propTypes = {
  arr: PropTypes.array,
  joinWith: PropTypes.string,
  stripEmpty: PropTypes.bool
}

ArrayJoin.defaultProps = {
  arr: [],
  stripEmpty: true,
  joinWith: ', '
}
