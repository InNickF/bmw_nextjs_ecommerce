import React from 'react'
import { Modal, Button, Icon } from '../../components'
import PropTypes from 'prop-types'
import withStore from './store'

const Popup = ({ isVisible, closeModal, invoiceNumber, idTransaction }) => {
  return (
    <Modal
      closeModal={() => closeModal()}
      name='blackFriday'
      isVisible={true}
    >
      hola
    </Modal>
  )
}

export default withStore(Popup)
