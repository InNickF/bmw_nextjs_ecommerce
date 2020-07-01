import React from 'react'
import PropTypes from 'prop-types'

function CheckPaper ({ width, height, fill }) {
  return (
    <svg width={width}
      height={height}
      viewBox='0 0 101 97'
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
    >
      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Solicitud-de-garantia' transform='translate(-554.000000, -781.000000)' stroke='#000000' strokeWidth='3'>
          <g id='Group-3' transform='translate(554.000000, 781.000000)'>
            <g id='Group'>
              <path d='M1.5,1.5 L1.5,95.5 L81.5,95.5 L81.5,1.5 L1.5,1.5 Z' id='Rectangle-2' />
              <circle id='Oval' fill='#FFFFFF' cx='80' cy='68' r='19' />
              <path d='M17.5,22.5 L66.5407993,22.5' id='Line' strokeLinecap='square' />
              <path d='M17.5,37.5 L66.5407993,37.5' id='Line-Copy' strokeLinecap='square' />
              <path d='M17.5,52.5 L51.5,52.5' id='Line-Copy-2' strokeLinecap='square' />
              <polyline id='Path-5' points='70 69.8636364 75.4545455 76 89.0909091 61' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

CheckPaper.defaultProps = {
  height: 100,
  fill: 'black'
}

CheckPaper.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default CheckPaper
