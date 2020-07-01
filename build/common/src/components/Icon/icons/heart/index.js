import React from 'react'
import PropTypes from 'prop-types'

function Heart ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 28 25'
      fill={fill}
    >
      <path
        fillRule='nonzero'
        d='M25.205 2.246A7.513 7.513 0 0 0 19.839.018a7.532 7.532 0 0 0-5.37 2.234l-.75.753-.762-.765A7.55 7.55 0 0 0 7.58 0C5.557 0 3.65.793 2.22 2.229A7.557 7.557 0 0 0 0 7.619c0 2.036.796 3.944 2.232 5.385L13.15 23.96a.788.788 0 0 0 .552.234.782.782 0 0 0 .552-.228l10.94-10.939a7.587 7.587 0 0 0 2.226-5.39 7.552 7.552 0 0 0-2.214-5.39zm-1.116 9.667L13.7 22.298 3.337 11.896A6.017 6.017 0 0 1 1.57 7.619c0-1.616.621-3.133 1.76-4.27A5.965 5.965 0 0 1 7.58 1.58c1.61 0 3.127.63 4.267 1.774l1.313 1.318a.78.78 0 0 0 1.11 0l1.303-1.307a5.983 5.983 0 0 1 4.26-1.773c1.605 0 3.116.63 4.256 1.767a6.012 6.012 0 0 1 1.76 4.277 5.988 5.988 0 0 1-1.76 4.276z' />
    </svg>
  )
}

Heart.defaultProps = {
  width: 28,
  height: 25,
  fill: 'black'
}

Heart.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Heart
