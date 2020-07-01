import React from 'react'
import PropTypes from 'prop-types'

import {
  ModelFilterForm,
  Modal
} from '../'

import { Container } from './styles'

function ModelFilterDialog ({
  buttonText,
  closeModal,
  onFormSubmit,
  modalTitle,
  toggleHelpModal,
  checkIfAuthenticated,
  isVisible,
  series,
  models,
  years,
  getModels
}) {
  return (
    <Modal
      isVisible={isVisible}
      closeModal={closeModal}
    >
      <Container>
        <h4>{modalTitle}</h4>
        <ModelFilterForm
          buttonTextInMobile={buttonText}
          onSubmit={onFormSubmit}
          checkIfAuthenticated={checkIfAuthenticated}
          getModels={getModels}
          series={series}
          models={models}
          years={years}
        />
      </Container>
    </Modal>
  )
}

ModelFilterDialog.defaultProps = {
  isVisible: false
}

ModelFilterDialog.propTypes = {
  series: PropTypes.array.isRequired,
  models: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  getModels: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  isVisible: PropTypes.bool,
  buttonText: PropTypes.string,
  modalTitle: PropTypes.string,
  onFormSubmit: PropTypes.func,
  checkIfAuthenticated: PropTypes.func,
  toggleHelpModal: PropTypes.func
}

export default ModelFilterDialog
