import React from 'react'
import PropTypes from 'prop-types'

function Edit ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 26 26'
    >
      <path
        fillRule='nonzero'
        d='M24.135 1.67a5.691 5.691 0 0 0-8.056 0L1.31 16.436a.739.739 0 0 0-.209.423L.007 24.965a.737.737 0 0 0 .21.621c.137.138.329.22.521.22.033 0 .066 0 .1-.005l4.882-.66a.743.743 0 0 0-.198-1.474l-3.915.528.765-5.653 5.949 5.95a.728.728 0 0 0 1.045 0L24.135 9.727a5.662 5.662 0 0 0 1.671-4.031 5.64 5.64 0 0 0-1.671-4.026zm-7.77 1.815l2.48 2.48L5.368 19.444l-2.48-2.48L16.365 3.485zM8.85 22.92l-2.425-2.425L19.901 7.016l2.425 2.425L8.849 22.919zm14.51-14.54l-5.932-5.933a4.2 4.2 0 0 1 2.683-.963c1.127 0 2.183.44 2.98 1.232a4.17 4.17 0 0 1 1.232 2.98c0 .996-.341 1.931-.962 2.684z' />
    </svg>

  )
}

Edit.defaultProps = {
  width: 26,
  height: 26,
  fill: 'black'
}

Edit.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Edit
