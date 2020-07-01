import React from 'react'
import PropTypes from 'prop-types'

function Success ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 30 30'
      fill={fill}
    >
      <g fillRule='nonzero' stroke={fill}>
        <path d='M15 1C7.28 1 1 7.28 1 15s6.28 14 14 14 14-6.28 14-14S22.72 1 15 1zm0 26.923C7.875 27.923 2.077 22.125 2.077 15S7.875 2.077 15 2.077 27.923 7.875 27.923 15 22.125 27.923 15 27.923z' />
        <path d='M21.597 9.258l-8.275 9.31-4.986-3.989a.539.539 0 0 0-.673.842l5.385 4.307a.538.538 0 0 0 .74-.063l8.615-9.692a.538.538 0 1 0-.806-.715z' />
      </g>
    </svg>
  )
}

Success.defaultProps = {
  width: 30,
  height: 30,
  fill: 'black'
}

Success.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Success
