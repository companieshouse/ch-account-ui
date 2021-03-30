import PropTypes from 'prop-types'

export const errorsPropType = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string,
  token: PropTypes.string,
  anchor: PropTypes.string
}))
