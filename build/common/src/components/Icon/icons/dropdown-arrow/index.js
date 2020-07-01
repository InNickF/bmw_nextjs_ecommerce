import React from 'react'
import PropTypes from 'prop-types'

function DropdownArrow ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 15 8'
    >
      <path
        fillRule='nonzero'
        d='M7.5 6.963L.725.126a.42.42 0 0 0-.6 0 .43.43 0 0 0 0 .606l7.076 7.142a.42.42 0 0 0 .6 0L14.874.732A.433.433 0 0 0 15 .431a.42.42 0 0 0-.126-.302.42.42 0 0 0-.6 0L7.5 6.963z'
      />
    </svg>
  )
}

DropdownArrow.defaultProps = {
  width: 15,
  height: 8,
  fill: 'black'
}

DropdownArrow.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default DropdownArrow
