import React from 'react'

function Filter(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 22 15'
      {...props}
    >
      <g fillRule='evenodd'>
        <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="inherit" />
      </g>
    </svg>
  )
}

export default Filter
