import React from 'react'
import PropTypes from 'prop-types'

function DownArrow ({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 11'
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
    >
      <g stroke='none' strokeWidth='1' fillRule='evenodd'>
        <g transform='translate(-1021.000000, -468.000000)' fillRule='nonzero'>
          <path d='M1027.42544,473.49945 L1036.82659,464.015508 C1037.0578,463.78226 1037.0578,463.408184 1036.82659,463.174936 C1036.59538,462.941688 1036.22457,462.941688 1035.99336,463.174936 L1026.17341,473.081364 C1025.9422,473.314612 1025.9422,473.688689 1026.17341,473.921936 L1035.99336,483.823964 C1036.10678,483.938387 1036.25947,484 1036.40779,484 C1036.55612,484 1036.7088,483.942788 1036.82223,483.823964 C1037.05344,483.590716 1037.05344,483.21664 1036.82223,482.983392 L1027.42544,473.49945 Z' transform='translate(1031.500000, 473.500000) rotate(-90.000000) translate(-1031.500000, -473.500000) ' />
        </g>
      </g>
    </svg>
  )
}

DownArrow.defaultProps = {
  width: 21,
  height: 11,
  fill: 'black'
}

DownArrow.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default DownArrow
