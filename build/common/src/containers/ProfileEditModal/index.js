import React from 'react'
import NoSSR from 'react-no-ssr'
import PropTypes from 'prop-types'

import {
  InPartLoading,
  Modal
} from '../../components'

import ProfileEditData from '../ProfileEditData'

import {
  Container
} from './styles'

import withStore from './store'

function ProfileEditModal ({
  isVisible,
  isLoading,
  dialogName,
  closeModal
}) {
  return (
    <NoSSR>
      <Modal
        name={dialogName}
        isVisible={isVisible}
        isLoading={isLoading}
        closeModal={closeModal}
      >
        <Container>
          <h3>Mis datos</h3>
          <InPartLoading isLoading={isLoading} canAbsolute>
            <ProfileEditData />
          </InPartLoading>
        </Container>
      </Modal>
    </NoSSR>
  )
}

ProfileEditModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dialogName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default withStore(ProfileEditModal)
