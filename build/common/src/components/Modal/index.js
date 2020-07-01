import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveModal from 'react-responsive-modal'
import { withTheme } from 'styled-components'

import { InPartLoading, Icon } from '../'

import { ModalContent, CloseButton, Content } from './styles'

const Modal = props => {
  return <ResponsiveModal
    center
    open={props.isVisible ? true : false
    }
    onClose={props.closeModal}
    showCloseIcon={false}
    styles={{ maxWidth: 1000 }}
    classNames={{
      modal: props.name === 'login' ? 'modal-container' : props.name === 'editProfileModal' ? 'editProfileModal' : '',
      overlay: 'modal-overlay',
    }}
    closeOnEsc={false}
    closeOnOverlayClick={false}
  >
    <Content bgImg={props.bgImg} >
      <InPartLoading canAbsolute isLoading={props.isLoading}>
        <CloseButton className="close-button" onClick={props.closeModal}>
          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 2.71929L24.2807 0L13.5 10.7807L2.71929 0L0 2.71929L10.7807 13.5L0 24.2807L2.71929 27L13.5 16.2193L24.2807 27L27 24.2807L16.2193 13.5L27 2.71929Z" fill="#D5D5D5" />
          </svg>
        </CloseButton>
        <ModalContent>{props.children}</ModalContent>
      </InPartLoading>
    </Content>
  </ResponsiveModal >
}

Modal.defaultProps = {
  modalStyle: '',
  borderLess: false,
  isLoading: false
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  isLoading: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  bgImg: PropTypes.string
}

export default withTheme(Modal)
