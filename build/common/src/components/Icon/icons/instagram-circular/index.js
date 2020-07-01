import React from 'react'
import PropTypes from 'prop-types'

function InstagramCircular ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 35 34'
      fill={fill}
    >
      <path d='M17.5,13.2c-2,0-3.7,1.7-3.7,3.8s1.7,3.8,3.7,3.8s3.7-1.7,3.7-3.8S19.5,13.2,17.5,13.2z' />
      <path d='M21.6,8.6h-8.3c-2.3,0-4.1,1.9-4.1,4.2v8.4c0,2.3,1.8,4.2,4.1,4.2h8.3c2.3,0,4.1-1.9,4.1-4.2v-8.4
C25.8,10.5,23.9,8.6,21.6,8.6z M17.5,22.5c-3,0-5.4-2.5-5.4-5.5s2.4-5.5,5.4-5.5s5.4,2.5,5.4,5.5S20.5,22.5,17.5,22.5z M22.9,12.3
c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8s0.8,0.4,0.8,0.8S23.3,12.3,22.9,12.3z' />
      <path d='M17.5,0.2C8.2,0.2,0.7,7.7,0.7,17s7.5,16.8,16.8,16.8S34.3,26.3,34.3,17S26.8,0.2,17.5,0.2z M27.4,21.2
c0,3.3-2.6,5.9-5.8,5.9h-8.3c-3.2,0-5.8-2.7-5.8-5.9v-8.4c0-3.3,2.6-5.9,5.8-5.9h8.3c3.2,0,5.8,2.7,5.8,5.9V21.2z' />
    </svg>
  )
}

InstagramCircular.defaultProps = {
  width: 24,
  height: 19,
  fill: 'black'
}

InstagramCircular.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default InstagramCircular
