import React from 'react'
import PropTypes from 'prop-types'

function TwitterCircular ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 38.8 38.2'
      fill={fill}
    >
      <path d='M19.4,0.4C9,0.4,0.6,8.8,0.6,19.1S9,37.9,19.4,37.9s18.8-8.4,18.8-18.8S29.7,0.4,19.4,0.4z M28.7,14.5c0,0.2,0,0.4,0,0.6
c0,6.2-4.9,13.3-13.7,13.3c-2.7,0-5.3-0.8-7.4-2.1c0.4,0,0.8,0.1,1.2,0.1c2.3,0,4.3-0.7,6-2c-2.1,0-3.9-1.4-4.5-3.2
c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.9-0.1,1.3-0.2c-2.2-0.4-3.9-2.3-3.9-4.6c0,0,0,0,0-0.1c0.7,0.3,1.4,0.6,2.2,0.6
c-1.3-0.8-2.1-2.3-2.1-3.9c0-0.9,0.2-1.7,0.7-2.3c2.4,2.8,5.9,4.7,9.9,4.9c-0.1-0.3-0.1-0.7-0.1-1.1c0-2.6,2.2-4.7,4.8-4.7
c1.4,0,2.6,0.6,3.5,1.5c1.1-0.2,2.1-0.6,3.1-1.1c-0.4,1.1-1.1,2-2.1,2.6c1-0.1,1.9-0.4,2.8-0.7C30.5,13,29.7,13.8,28.7,14.5z' />
    </svg>
  )
}

TwitterCircular.defaultProps = {
  width: 24,
  height: 19,
  fill: 'black'
}

TwitterCircular.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default TwitterCircular
