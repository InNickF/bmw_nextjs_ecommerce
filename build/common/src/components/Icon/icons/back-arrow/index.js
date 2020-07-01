import PropTypes from 'prop-types'

function BackArrow ({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 41 65'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Shape</title>
      <desc>Created with Sketch.</desc>
      <g id='Page-2' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Artboard' transform='translate(-59.000000, -53.000000)' fill='#4A4A4A'>
          <polygon id='Shape' points='99.4 60.5833333 91.7567568 53 59 85.5 91.7567568 118 99.4 110.416667 74.2864865 85.5' />
        </g>
      </g>
    </svg>
  )
}

BackArrow.defaultProps = {
  width: 12,
  height: 24
}

BackArrow.PropTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BackArrow
