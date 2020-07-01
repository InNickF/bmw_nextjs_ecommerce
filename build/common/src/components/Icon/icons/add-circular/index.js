import React from 'react'

function AddCircular ({ width, height, fill }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 30 30'
      fill={fill}
    >
      <path
        fillRule='nonzero'
        d='M15 0C6.715 0 0 6.715 0 15s6.715 15 15 15 15-6.716 15-15c0-8.284-6.715-15-15-15zm0 28.125C7.751 28.125 1.875 22.249 1.875 15S7.751 1.875 15 1.875 28.125 7.751 28.125 15 22.249 28.125 15 28.125zm5.625-14.063h-4.688V9.375a.938.938 0 0 0-1.874 0v4.688H9.375a.938.938 0 0 0 0 1.874h4.688v4.688a.938.938 0 0 0 1.874 0v-4.688h4.688a.938.938 0 0 0 0-1.874z' />
    </svg>
  )
}

AddCircular.defaultProps = {
  width: 30,
  height: 30,
  fill: 'black'
}

export default AddCircular
