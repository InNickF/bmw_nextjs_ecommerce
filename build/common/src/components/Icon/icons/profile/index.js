import React from 'react'
import PropTypes from 'prop-types'

function Profile({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 21'
      fill={fill}
    >
      <path d="M9 10.0455C11.7949 10.0455 13.0625 7.84588 13.0625 5.02273C13.0625 2.19957 11.7949 0 9 0C6.20508 0 4.9375 2.19957 4.9375 5.02273C4.9375 7.84588 6.20508 10.0455 9 10.0455ZM13.5 12.1818L11.5629 13.0909C10.7824 13.4531 9.91406 13.6591 9 13.6591C8.08594 13.6591 7.22109 13.4531 6.43711 13.0909L4.5 12.1818C2.01445 12.1818 0 14.2166 0 16.7273V17.2955C0 18.2365 0.755859 19 1.6875 19H16.3125C17.2441 19 18 18.2365 18 17.2955V16.7273C18 14.2166 15.9855 12.1818 13.5 12.1818Z" />
    </svg>
  )
}

Profile.defaultProps = {
  width: 36,
  height: 36,
  fill: 'black'
}

Profile.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Profile
