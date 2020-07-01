import React from 'react'
import PropTypes from 'prop-types'

function RightArrow ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 13 21'
      fill={fill}
    >
      <path
        fill='none'
        fillRule='evenodd'
        stroke={fill}
        strokeWidth='2' d='M1 1l10 9.5L1 20'
      />
    </svg>
  )
}

RightArrow.defaultProps = {
  width: 13,
  height: 21,
  fill: 'black'
}

RightArrow.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default RightArrow
