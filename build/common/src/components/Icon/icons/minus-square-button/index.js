import React from 'react'

function MinusSquareButton(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="39" height="39" stroke={props.stroke} />
      <path d="M12.1861 19H27.8139C27.9379 19 27.9999 19.0702 27.9999 19.2105V20.7894C27.9999 20.9298 27.9379 20.9999 27.8139 20.9999H12.1861C12.0621 20.9999 12.0001 20.9298 12.0001 20.7894V19.2105C12.0001 19.0702 12.0621 19 12.1861 19Z" fill={props.stroke} />
    </svg>
  )
}

export default MinusSquareButton
