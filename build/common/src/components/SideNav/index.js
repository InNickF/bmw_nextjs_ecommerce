import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'

import {
  Content,
  Overlay
} from './styles'

function SideNav ({ isShowing, children, closeNav }) {
  return (
    <Motion
      style={{
        left: spring(isShowing ? 0 : -100),
        opacity: spring(isShowing ? 1 : 0, presets.gentle)
      }}
    >
      {({ left, opacity }) => (
        <Fragment>
          <Content left={left} isShowing={isShowing}>
            {children}
          </Content>
          <Overlay
            isShowing={isShowing}
            onClick={closeNav}
            opacity={opacity}
          />
        </Fragment>
      )}
    </Motion>
  )
}

SideNav.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  closeNav: PropTypes.func.isRequired
}

export default SideNav
