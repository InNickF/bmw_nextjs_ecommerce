import React from 'react'
import PropTypes from 'prop-types'

function NotFound ({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 212 228'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Error-404-mini' transform='translate(-659.000000, -300.000000)' fillRule='nonzero'>
          <g id='traffic-signal' transform='translate(659.000000, 300.000000)'>
            <polygon id='Rectangle-path' fill={fill} points='0 47 212 47 212 94 0 94 0 66' />
            <polygon id='Shape' fill='#FFFFFF' points='31.4615385 94 4 94 27.5384615 47 55 47' />
            <polygon id='Shape' fill='#FFFFFF' points='109.461538 94 82 94 105.538462 47 133 47' />
            <polygon id='Shape' fill='#FFFFFF' points='184.461538 94 157 94 180.538462 47 208 47' />
            <circle id='Oval' fill={fill} cx='48.5' cy='17.5' r='17.5' />
            <circle id='Oval' fill={fill} cx='162.5' cy='17.5' r='17.5' />
            <path d='M49,35.0319149 C45.296,35.0319149 41.86,33.9109043 39,32 L39,47 L59,47 L59,32 C56.14,33.9109043 52.704,35.0319149 49,35.0319149 Z' id='Shape' fill='#9B9B9B' />
            <path d='M163,35.0319149 C159.296,35.0319149 155.86,33.9109043 153,32 L153,47 L173,47 L173,32 C170.14,33.9109043 166.704,35.0319149 163,35.0319149 Z' id='Shape' fill='#9B9B9B' />
            <polygon id='Shape' fill='#9B9B9B' points='172.583333 228 200 228 153 94 125.583333 94 140.689917 141.294118 71.3100833 141.294118 86.4166667 94 59 94 12 228 39.4166667 228 62.9166667 164.941176 149.083333 164.941176' />
          </g>
        </g>
      </g>
    </svg>
  )
}

NotFound.defaultProps = {
  width: 212,
  height: 228,
  fill: 'black'
}

NotFound.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default NotFound
