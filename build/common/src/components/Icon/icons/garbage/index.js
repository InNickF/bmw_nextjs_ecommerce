import React from 'react'
import PropTypes from 'prop-types'

function Garbage ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 23 25'
      fill={fill}
    >
      <g fillRule='nonzero'>
        <path
          d='M22.282 3.598h-5.38V2.75c0-1.516-1.276-2.75-2.845-2.75H8.943C7.374 0 6.098 1.234 6.098 2.75v.848H.718A.703.703 0 0 0 0 4.292c0 .385.319.694.718.694h1.297v16.303C2.015 23.335 3.738 25 5.854 25h11.292c2.116 0 3.839-1.665 3.839-3.71V4.985h1.297A.703.703 0 0 0 23 4.292a.703.703 0 0 0-.718-.694zM7.534 2.75c0-.75.632-1.362 1.409-1.362h5.114c.777 0 1.41.611 1.41 1.362v.848H7.533V2.75zm12.015 18.54c0 1.279-1.079 2.322-2.403 2.322H5.854c-1.324 0-2.403-1.043-2.403-2.323V4.986h16.104v16.303h-.006z'
        />
        <path d='M11.14 21.429c.2 0 .36-.323.36-.727V7.87c0-.403-.16-.726-.36-.726-.199 0-.359.323-.359.726v12.828c0 .403.16.732.36.732zM6.11 20c.199 0 .359-.309.359-.695V8.552c0-.386-.16-.695-.36-.695-.2 0-.359.309-.359.695v10.753c0 .386.162.695.36.695zM15.453 20c.2 0 .36-.309.36-.695V8.552c0-.386-.16-.695-.36-.695-.2 0-.36.309-.36.695v10.753c0 .386.16.695.36.695z' />
      </g>
    </svg>

  )
}

Garbage.defaultProps = {
  width: 23,
  height: 25,
  fill: 'black'
}

Garbage.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Garbage
