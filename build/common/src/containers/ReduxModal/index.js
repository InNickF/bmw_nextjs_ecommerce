import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../../components'

import withStore from './store'

function ReduxModal ({ name, isLoading, isVisible, closeModal, children }) {
  return (
    <Modal
      name={name}
      isLoading={isLoading}
      isVisible={isVisible}
      closeModal={closeModal}
    >
      {children}
    </Modal>
  )
}
ReduxModal.propTypes = {
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default withStore(ReduxModal)
