import React from 'react'
import PropTypes from 'prop-types'

import { Button, Modal } from '../'

import { Container, Title, Description, ButtonContainer } from './styles'

function FeedbackModal ({ title, description, toggleModal, isVisible }) {
  return (
    <Modal
      name='feedback'
      isVisible={isVisible}
      closeModal={toggleModal}
    >
      <Container centered={!description.length}>
        <Title>{title}</Title>
        {(description ) ? (
          <Description>{description}</Description>
        ) : null}
        <ButtonContainer>
          <Button action={toggleModal}>Aceptar</Button>
        </ButtonContainer>
      </Container>
    </Modal>
  )
}

FeedbackModal.defaultProps = {
  description: '',
  isVisible: false
}

FeedbackModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isVisible: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired
}

export default FeedbackModal
