import React from 'react'
import PropTypes from 'prop-types'

function Papers ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 21 26'
      fill={fill}
    >
      <g fillRule='nonzero'>
        <path d='M13.97 4H2.03C.91 4 0 4.945 0 6.108v17.784C0 25.055.91 26 2.03 26h11.94c1.12 0 2.03-.945 2.03-2.108V6.108C15.995 4.945 15.085 4 13.97 4zm.605 19.887c0 .35-.274.633-.61.633H2.024a.623.623 0 0 1-.61-.633V6.107c0-.349.273-.633.61-.633h11.94c.336 0 .61.284.61.634v17.779z' />
        <path d='M18.97 0H7.03C5.91 0 5 .945 5 2.108c0 .41.316.737.71.737.395 0 .71-.328.71-.737 0-.35.274-.634.61-.634h11.94c.336 0 .61.284.61.634v17.784c0 .35-.274.634-.61.634a.721.721 0 0 0-.71.737c0 .41.315.737.71.737 1.12 0 2.03-.945 2.03-2.108V2.108C21 .945 20.09 0 18.97 0z' />
      </g>
    </svg>
  )
}

Papers.defaultProps = {
  width: 21,
  height: 26,
  fill: 'black'
}

Papers.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Papers
