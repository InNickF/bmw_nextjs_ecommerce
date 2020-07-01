import React from 'react'
import PropTypes from 'prop-types'

function Instagram ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 23 22'
      fill={fill}
    >
      <g fillRule='evenodd'>
        <path d='M7.025 1.645a5.39 5.39 0 0 0-5.382 5.387v7.583a5.39 5.39 0 0 0 5.382 5.387h8.597a5.39 5.39 0 0 0 5.382-5.387V7.032a5.39 5.39 0 0 0-5.382-5.387H7.025zm8.597 19.896H7.025c-3.816 0-6.92-3.107-6.92-6.926V7.032c0-3.82 3.104-6.926 6.92-6.926h8.597c3.815 0 6.92 3.107 6.92 6.926v7.583c0 3.819-3.105 6.926-6.92 6.926z' />
        <path d='M11.323 6.197a4.629 4.629 0 0 0-4.622 4.626 4.63 4.63 0 0 0 4.622 4.627 4.63 4.63 0 0 0 4.622-4.627 4.629 4.629 0 0 0-4.622-4.626m0 10.792c-3.396 0-6.16-2.766-6.16-6.166 0-3.4 2.764-6.165 6.16-6.165 3.397 0 6.16 2.766 6.16 6.165 0 3.4-2.763 6.166-6.16 6.166M18.667 4.848a1.278 1.278 0 1 1-2.557.001 1.278 1.278 0 0 1 2.557-.001' />
      </g>
    </svg>
  )
}

Instagram.defaultProps = {
  width: 23,
  height: 22,
  fill: 'black'
}

Instagram.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Instagram
