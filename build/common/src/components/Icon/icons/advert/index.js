import React from 'react'
import propTypes from 'prop-types'

function Advert ({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 66 75'
      version='1.1'
    >
      <title>icon (4)</title>
      <desc>Created with Sketch.</desc>
      <g id='MOTO-1.0' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Pop-up---Procesando-pago' transform='translate(-434.000000, -497.000000)' fill='#003399' fillRule='nonzero'>
          <g id='icon-(4)' transform='translate(434.000000, 497.000000)'>
            <path d='M33.0013303,0 L0,17.6453333 L0,18.8826667 C0,56.16 31.6763817,74.2613333 31.9956464,74.44 L33.0013303,75 L34.0043536,74.44 C34.3236183,74.2613333 66,56.1626667 66,18.8826667 L66,17.6453333 L33.0013303,0 Z M33.0013303,70.2106667 C27.8585077,66.9226667 4.7517233,50.4533333 4.13713871,20.1173333 L33.0013303,4.68533333 L61.8655218,20.1146667 C61.2509372,50.4506667 38.1441529,66.9173333 33.0013303,70.2106667 Z' id='Shape' />
            <path d='M6,21.3682223 C7.09593399,48.6049085 26.1588627,63.7149756 32.5,68 C38.8411373,63.7122975 57.904066,48.6075866 59,21.3709005 L32.5,7 L6,21.3682223 Z M32.3340292,56.692892 C29.5230639,56.692892 27.6499652,54.6280458 27.6499652,51.8749177 C27.6499652,49.0709049 29.5757531,47.0569434 32.3340292,47.0569434 C35.0949399,47.0569434 36.9153494,49.0709049 36.9680386,51.8749177 C36.9680386,54.630724 35.1449945,56.692892 32.3340292,56.692892 Z M35.3030619,44.4109409 L29.367631,44.4109409 L28.1663187,20.4308732 L36.4490506,20.4308732 L35.3030619,44.4109409 Z' id='Shape' />
          </g>
        </g>
      </g>
    </svg>
  )
}

Advert.defaultProps = {
  width: 45,
  height: 50
}

Advert.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number])
}

export default Advert
