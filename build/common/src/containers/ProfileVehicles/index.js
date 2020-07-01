import React from 'react'
import PropTypes from 'prop-types'

import {
  AlignWrapper,
  Button,
  Modal,
  Icon,
  VehicleRegister
} from '../../components'

import withStore from './store'

import {
  Container,
  Card,
  CardContent,
  DeleteButton,
  VehicleImage
} from './styles'

function ProfileVehicles ({
  modalName,
  vehicles,
  isRegisterVisible,
  isRegisterLoading,
  deleteVehicle,
  registerVehicle,
  openModal,
  closeModal
}) {
  // mientras se soluciona lo de las imagenes
  const tempImage = 'https://i.imgur.com/n90IBuT.png'

  return (
    <Container>
      {vehicles.map(item => (
        <Card key={item.id}>
          <VehicleImage>
            <img src={tempImage} alt='' />
          </VehicleImage>
          <CardContent>
            <h3>{item.vehicleBrand && item.vehicleBrand.name}</h3>
            <h4>Chasis: {item.chassis}</h4>
            <h4>Año: {item.model}</h4>
            <h4>Serie: {item.line && item.line.name}</h4>
          </CardContent>
          <DeleteButton onClick={() => deleteVehicle(item.id)}>
            <Icon name='garbage' />
          </DeleteButton>
        </Card>
      ))}
      <AlignWrapper>
        <Button action={openModal}>Agregar vehículo</Button>
      </AlignWrapper>
      <Modal
        name={modalName}
        isVisible={isRegisterVisible}
        closeModal={closeModal}
        isLoading={isRegisterLoading}
      >
        <VehicleRegister alternativeActionOnSubmit={registerVehicle} />
      </Modal>
    </Container>
  )
}

ProfileVehicles.propTypes = {
  modalName: PropTypes.string.isRequired,
  vehicles: PropTypes.array.isRequired,
  registerVehicle: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteVehicle: PropTypes.func.isRequired,
  isRegisterLoading: PropTypes.bool.isRequired,
  isRegisterVisible: PropTypes.bool.isRequired
}

export default withStore(ProfileVehicles)
