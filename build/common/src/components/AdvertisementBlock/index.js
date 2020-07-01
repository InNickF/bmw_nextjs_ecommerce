import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import {
  Container,
  LeftBlock,
  RightBlock,
  CenterBlock
} from './styles'

function AdvertisementBlock ({
  leftBlock,
  centerBlock,
  rightBlock,
  margin
}) {
  return (
    <Container margin={margin}>
      <LeftBlock>{leftBlock}</LeftBlock>
      <CenterBlock>{centerBlock}</CenterBlock>
      <RightBlock>{rightBlock}</RightBlock>
    </Container>
  )
}

AdvertisementBlock.defaultProps = {
  margin: '0'
}

AdvertisementBlock.propTypes = {
  leftBlock: PropTypes.node,
  centerBlock: PropTypes.node,
  rightBlock: PropTypes.node,
  margin: PropTypes.string,
  closableInMobile: PropTypes.bool
}

export default withTheme(AdvertisementBlock)
