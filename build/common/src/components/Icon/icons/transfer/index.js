import React from 'react'
import PropTypes from 'prop-types'

function Transfer ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 23 20'
      fill={fill}
    >
      <path
        fillRule='nonzero'
        d='M12.465 14.459a.71.71 0 0 0 0 1.01c.281.279.736.279 1.017 0l4.958-4.929a.703.703 0 0 0 .204-.54.702.702 0 0 0-.204-.541L13.482 4.53a.721.721 0 0 0-1.017 0 .71.71 0 0 0 0 1.01l3.769 3.745H.719A.717.717 0 0 0 0 10c0 .394.322.714.719.714h15.515l-3.769 3.745zM20.125 0H5.75a2.866 2.866 0 0 0-2.875 2.857v2.857h1.438V2.857c0-.788.643-1.428 1.437-1.428h14.375c.794 0 1.438.64 1.438 1.428v14.286c0 .788-.644 1.428-1.438 1.428H5.75c-.794 0-1.438-.639-1.438-1.428v-2.857H2.875v2.857A2.866 2.866 0 0 0 5.75 20h14.375A2.866 2.866 0 0 0 23 17.143V2.857A2.866 2.866 0 0 0 20.125 0z'
      />
    </svg>
  )
}

Transfer.defaultProps = {
  width: 23,
  height: 20,
  fill: 'black'
}

Transfer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Transfer
