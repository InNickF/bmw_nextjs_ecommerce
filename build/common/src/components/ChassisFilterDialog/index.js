import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  ChassisFilterForm,
  Modal
} from '../'

import { Container } from './styles'

function ChassisFilterDialog({
  buttonText,
  checkIfAuthenticated,
  closeModal,
  onFormSubmit,
  modalTitle,
  toggleHelpModal,
  isVisible
}) {
  return (
    <Modal
      isVisible={isVisible}
      closeModal={closeModal}
    >
      <Container>
        <h4>{modalTitle + '.'}</h4>
        <p>Ingrese el número de chasis de su vehículo (Últimos siete dígitos)</p>
        <ChassisFilterForm
          onSubmit={onFormSubmit}
          toggleModal={toggleHelpModal}
          checkIfAuthenticated={checkIfAuthenticated}
        >
          <p className='chassis-help' onClick={toggleHelpModal}>¿Qué es mi número de chasis?</p>
          <Button isSubmit >{buttonText}</Button>
        </ChassisFilterForm>
      </Container>
    </Modal>
  )
}

ChassisFilterDialog.defaultProps = {
  isVisible: false
}

ChassisFilterDialog.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  buttonText: PropTypes.string,
  modalTitle: PropTypes.string,
  checkIfAuthenticated: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  toggleHelpModal: PropTypes.func.isRequired
}

export default ChassisFilterDialog
