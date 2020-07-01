import React from 'react'

function AddSquareButton(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="39" height="39" stroke={props.stroke} />
      <path d="M19.2105 12H20.7895C20.9298 12 21 12.0593 21 12.1778V27.8222C21 27.9407 20.9298 28 20.7895 28H19.2105C19.0702 28 19 27.9407 19 27.8222V12.1778C19 12.0593 19.0702 12 19.2105 12Z"  fill={props.stroke} />
      <path d="M12.186 19H27.8138C27.9379 19 27.9999 19.0702 27.9999 19.2105V20.7894C27.9999 20.9298 27.9379 20.9999 27.8138 20.9999H12.186C12.062 20.9999 12 20.9298 12 20.7894V19.2105C12 19.0702 12.062 19 12.186 19Z" fill={props.stroke} />
    </svg>
  )
}

export default AddSquareButton
