import React from 'react'
import propTypes from 'prop-types'

function Added ({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 47 47'
      version='1.1'
    >
      <title>Group 3</title>
      <desc>Created with Sketch.</desc>
      <g id='MOTO-1.0' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Added-Car' transform='translate(-452.000000, -615.000000)'>
          <g id='Group-3' transform='translate(452.000000, 615.000000)'>
            <circle id='Oval' fill='#7ED321' cx='23.2549681' cy='23.2549681' r='23.2549681' />
            <g id='check-mark-(2)-copy' transform='translate(13.000000, 12.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <path d='M8.80301608,24.6345001 C8.03181881,24.6345001 7.30244198,24.2762416 6.83355688,23.6617825 L0.5009499,15.3574345 C-0.322700123,14.2773801 -0.108281765,12.7394727 0.979404088,11.9212497 C2.06886199,11.1026747 3.61657269,11.3169964 4.44057712,12.3963469 L8.60560942,17.8575018 L19.0809208,1.15589797 C19.8021462,0.00686647326 21.3250482,-0.34470549 22.4846794,0.370403849 C23.6428929,1.08621704 23.9965946,2.59948975 23.2750148,3.74957702 L10.9004175,23.4784301 C10.4705175,24.1643298 9.72838191,24.5957885 8.91571862,24.6323886 C8.87779669,24.6337963 8.84058359,24.6345001 8.80301608,24.6345001 Z' id='Shape' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
Added.defaulProps = {
  width: 5,
  height: 5
}
Added.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number])
}

export default Added
