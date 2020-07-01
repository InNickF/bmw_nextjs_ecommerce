import React from 'react'
import PropTypes from 'prop-types'

import {
  Button
} from '../'

import ButtonsContainer from './styles'

function PurchaseBottomSteps(props) {
  return (
    <ButtonsContainer>
      <Button action={props.onClickLeftButton} condensed>
        {props.leftButtonText}
      </Button>
      <Button action={props.onClickRightButton} condensed className="btn-bordered">
        {props.rightButtonText}
      </Button>
    </ButtonsContainer>
  )
}

PurchaseBottomSteps.propTypes = {
  onClickLeftButton: PropTypes.func.isRequired,
  onClickRightButton: PropTypes.func.isRequired,
  leftButtonText: PropTypes.string.isRequired,
  rightButtonText: PropTypes.string.isRequired
}

export default PurchaseBottomSteps
