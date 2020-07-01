import React from 'react'
import PropTypes from 'prop-types'

function Shipping ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 39 28'
      fill={fill}
    >
      <g fillRule='nonzero'>
        <path d='M21.809 2.914H4.517c-.498 0-.869.255-.869.902v8.187a1.02 1.02 0 1 1-2.039 0V3.816C1.61 1.846 3.02.875 4.517.875h17.292a1.02 1.02 0 0 1 0 2.039z' />
        <path d='M2.845 21.388v-7.95H22.42V3.203l8.276-.026 5.338 8.52v9.782c0 .757-.693.947-.905.947H3.782a.954.954 0 0 1-.937-1.038zm17.223-10.303H.492v10.712c0 1.93 1.617 2.982 2.61 2.982h32.523c1.61 0 2.762-1.5 2.762-2.838V11.02L31.995.82 20.068.857v10.227z' />
        <path stroke={fill} strokeWidth='2.039' d='M8.376 23.114c0 1.9 1.58 3.438 3.527 3.438 1.949 0 3.526-1.538 3.526-3.438 0-1.898-1.578-3.437-3.526-3.437-1.947 0-3.527 1.54-3.527 3.437zm19.983 3.438c1.948 0 3.527-1.538 3.527-3.438 0-1.898-1.579-3.437-3.527-3.437-1.947 0-3.526 1.54-3.526 3.437 0 1.9 1.579 3.438 3.526 3.438z' />
      </g>
    </svg>
  )
}

Shipping.defaultProps = {
  width: 39,
  height: 28,
  fill: 'black'
}

Shipping.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Shipping
