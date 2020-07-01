import React from 'react'
import PropTypes from 'prop-types'

function FacebookCircular({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 24 24'
    >
      <path d="M23.998 12C23.998 5.372 18.626 0 11.999 0C5.372 0 0 5.372 0 12C0 17.988 4.388 22.952 10.124 23.852V15.468H7.078V11.999H10.124V9.356C10.124 6.348 11.916 4.687 14.656 4.687C15.969 4.687 17.342 4.921 17.342 4.921V7.874H15.83C14.34 7.874 13.875 8.799 13.875 9.748V12H17.203L16.671 15.469H13.875V23.853C19.611 22.953 23.999 17.989 23.999 12H23.998Z" />
    </svg>
  )
}

FacebookCircular.defaultProps = {
  width: 24,
  height: 24,
  fill: 'black'
}

FacebookCircular.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default FacebookCircular
