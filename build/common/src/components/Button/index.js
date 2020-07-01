import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { InPartLoading } from '../'
import Content from './styles'

const types = ['normal', 'line']

function Button(props) {
  const {
    action,
    condensed,
    children,
    customStyle,
    disabled,
    isLoading,
    isSubmit,
    inBlock,
    theme,
    type,
    asLink,
    thinBorder,
    gray,
    white,
    withLoader,
    compatibility
  } = props
  return (
    <Content
      condensed={condensed}
      customStyle={customStyle}
      disabled={disabled || isLoading}
      inBlock={inBlock}
      onClick={action}
      theme={theme}
      buttonType={type}
      asLink={asLink}
      thinBorder={thinBorder}
      gray={gray}
      compatibility={compatibility}
      white={white}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
      <InPartLoading isLoading={isLoading} canAbsolute />
    </Content>
  )
}

Button.defaultProps = {
  customStyle: '',
  disabled: false,
  isLoading: false,
  isSubmit: false,
  condensed: false,
  action: () => { },
  inBlock: false,
  theme: {},
  type: types[0],
  asLink: false,
  thinBorder: false,
  gray: false,
  compatibility: false,
  white: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool,
  asLink: PropTypes.bool,
  isLoading: PropTypes.bool,
  inBlock: PropTypes.bool,
  isSubmit: PropTypes.bool,
  condensed: PropTypes.bool,
  thinBorder: PropTypes.bool,
  theme: PropTypes.object,
  gray: PropTypes.bool,
  compatibility: PropTypes.bool,
  white: PropTypes.bool,
  type: PropTypes.oneOf(types)
}

export default withTheme(Button)
