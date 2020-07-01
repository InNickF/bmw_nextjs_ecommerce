import React from 'react'
import PropTypes from 'prop-types'

function CheckMark ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 25'
      fill={fill}
      height={height}
      width={width}
    >
      <path
        fillRule='nonzero'
        d='M8.934 25a2.514 2.514 0 0 1-2-.987L.509 15.585a2.478 2.478 0 0 1 .486-3.487 2.52 2.52 0 0 1 3.512.482l4.227 5.542L19.364 1.173a2.52 2.52 0 0 1 3.454-.797 2.479 2.479 0 0 1 .802 3.43l-12.558 20.02A2.509 2.509 0 0 1 8.934 25z'
      />
    </svg>
  )
}

CheckMark.defaultProps = {
  width: 24,
  height: 25,
  fill: 'black'
}

CheckMark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default CheckMark
