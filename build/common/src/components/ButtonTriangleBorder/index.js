import React from 'react'
import PropTypes from 'prop-types'

import Button from './styles'

const TriangleButton = props => (
  <Button
    onClick={props.action}
    width={props.width}
    disabled={props.disabled}
    condensed={props.condensed}
    customStyle={props.customStyle}
    gray={props.gray}
    left={props.left}
    right={props.right}
  >
    {props.children}
  </Button>
)

TriangleButton.defaultProps = {
  customStyle: '',
  width: '40%',
  disabled: false,
  gray: false,
  condensed: false,
  left: false,
  right: false
}

TriangleButton.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
  width: PropTypes.string,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  gray: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  condensed: PropTypes.bool
}

export default TriangleButton
