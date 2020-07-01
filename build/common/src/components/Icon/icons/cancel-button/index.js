import React from 'react'
import PropTypes from 'prop-types'

function CancelButton ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 32 32'
    >
      <g fillRule='nonzero'>
        <path d='M15.53 31.059C6.967 31.059 0 24.092 0 15.529 0 6.966 6.967 0 15.53 0c8.563 0 15.529 6.966 15.529 15.529-.001 8.563-6.967 15.53-15.529 15.53zm0-29.285c-7.584 0-13.755 6.171-13.755 13.755 0 7.584 6.17 13.754 13.755 13.754 7.584 0 13.754-6.17 13.754-13.754S23.114 1.774 15.53 1.774z' />
        <path d='M11.2 20.746a.887.887 0 0 1-.627-1.515l5.333-5.334.012-.011 3.314-3.314a.887.887 0 1 1 1.255 1.254l-5.333 5.334-.012.012-3.313 3.314a.892.892 0 0 1-.629.26z' />
        <path d='M19.859 20.746a.884.884 0 0 1-.627-.26l-3.314-3.314-.012-.012-5.333-5.334a.887.887 0 1 1 1.255-1.254l3.313 3.314.012.011 5.333 5.334a.887.887 0 0 1-.627 1.515z' />
      </g>
    </svg>
  )
}

CancelButton.defaultProps = {
  width: 30,
  height: 30,
  fill: 'black'
}

CancelButton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default CancelButton
