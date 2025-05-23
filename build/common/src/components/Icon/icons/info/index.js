import React from 'react'
import PropTypes from 'prop-types'

function Info ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 65 65'
      xmlSpace='preserve'
      height={height}
      width={width}
      fill={fill}
    >
      <g>
        <g>
          <path d='M32.5,0C14.58,0,0,14.579,0,32.5S14.58,65,32.5,65S65,50.421,65,32.5S50.42,0,32.5,0z M32.5,61C16.785,61,4,48.215,4,32.5
          S16.785,4,32.5,4S61,16.785,61,32.5S48.215,61,32.5,61z' />
          <circle cx='33.018' cy='19.541' r='3.345' />
          <path d='M32.137,28.342c-1.104,0-2,0.896-2,2v17c0,1.104,0.896,2,2,2s2-0.896,2-2v-17C34.137,29.237,33.241,28.342,32.137,28.342z
          ' />
        </g>
      </g>
    </svg>
  )
}

Info.defaultProps = {
  width: 24,
  height: 24,
  fill: 'black'
}

Info.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Info
