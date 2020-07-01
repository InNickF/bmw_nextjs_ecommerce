import React from 'react'
import PropTypes from 'prop-types'

function Warning ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 39 35'
      fill={fill}
    >
      <g fillRule='nonzero'>
        <path d='M19.5 11.667c-.509 0-.848.434-.848 1.087v7.826c0 .652.34 1.087.848 1.087.509 0 .848-.435.848-1.087v-7.826c0-.653-.34-1.087-.848-1.087zM20.16 25.238a1.032 1.032 0 0 0-1.32 0c-.188.159-.188.476-.188.635 0 .317 0 .476.189.635.188.159.565.159.753.159.189 0 .565 0 .377-.16.188-.158.377-.475.377-.634 0-.317 0-.476-.188-.635z' />
        <path d='M38.137 26.194L24.562 2.935C23.642 1.13 21.571 0 19.5 0c-2.07 0-3.911 1.13-5.062 2.935L.863 26.194a5.425 5.425 0 0 0 0 5.87C1.783 33.872 3.853 35 5.925 35h27.15c2.301 0 4.142-1.13 5.062-2.935a5.425 5.425 0 0 0 0-5.871zm-1.84 4.967c-.46 1.13-1.611 1.807-2.992 1.807H5.925c-1.15 0-2.301-.678-2.991-1.807a3.41 3.41 0 0 1 0-3.613L16.509 4.29c.46-1.129 1.61-1.806 2.991-1.806 1.38 0 2.53.677 3.221 1.806l13.575 23.258a3.41 3.41 0 0 1 0 3.613z' />
      </g>
    </svg>
  )
}

Warning.defaultProps = {
  width: 39,
  height: 35,
  fill: 'black'
}

Warning.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Warning
