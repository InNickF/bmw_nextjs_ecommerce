import React from 'react'
import PropTypes from 'prop-types'

function Menu({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 12'
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
    >
      <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" />
    </svg>
  )
}

Menu.defaultProps = {
  width: 18,
  height: 12,
  fill: 'black'
}

Menu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Menu
