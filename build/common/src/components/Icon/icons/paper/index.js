import React from 'react'
import PropTypes from 'prop-types'

function Paper ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 39 45'
      fill={fill}
    >
      <g fillRule='nonzero'>
        <path d='M30.418 13.195a.635.635 0 0 0-.19-.447l-5.012-4.915a.659.659 0 0 0-.463-.188H10.83c-.76 0-1.378.606-1.378 1.352v24.716c0 .745.618 1.352 1.378 1.352H29.04c.76 0 1.378-.607 1.378-1.352V13.202l-.001-.007zm-5.01-3.358l2.776 2.723h-2.707a.068.068 0 0 1-.07-.068V9.837zm3.702 23.876c0 .037-.031.068-.069.068H10.83a.068.068 0 0 1-.069-.068V8.997c0-.038.031-.068.069-.068h13.268v3.563c0 .745.619 1.352 1.379 1.352h3.633v19.869z' />
        <path d='M25.732 16.516H14.14c-.362 0-.655.361-.655.807 0 .445.293.806.655.806h11.593c.362 0 .655-.361.655-.806 0-.446-.293-.807-.655-.807zM25.732 20.548H14.14c-.362 0-.655.362-.655.807 0 .445.293.806.655.806h11.593c.362 0 .655-.36.655-.806 0-.445-.293-.807-.655-.807zM25.732 24.58H14.14c-.362 0-.655.362-.655.807 0 .446.293.807.655.807h11.593c.362 0 .655-.361.655-.807 0-.445-.293-.806-.655-.806zM20.073 27.806h-5.92c-.37 0-.67.362-.67.807 0 .445.3.806.67.806h5.92c.37 0 .669-.36.669-.806 0-.446-.3-.807-.669-.807z' />
      </g>
    </svg>
  )
}

Paper.defaultProps = {
  width: 39,
  height: 45,
  fill: 'black'
}

Paper.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default Paper
