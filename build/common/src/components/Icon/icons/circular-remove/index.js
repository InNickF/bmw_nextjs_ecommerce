import React from 'react'
import PropTypes from 'prop-types'

function CircularRemove ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 15 15'
      fill={fill}
    >
      <path d='M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 14.063A6.562 6.562 0 1 1 7.5.938a6.562 6.562 0 0 1 0 13.124zm2.813-7.032H4.688a.469.469 0 0 0 0 .938h5.624a.469.469 0 0 0 0-.938z' />
    </svg>
  )
}

CircularRemove.defaultProps = {
  width: 30,
  height: 30,
  fill: 'black'
}

CircularRemove.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default CircularRemove
