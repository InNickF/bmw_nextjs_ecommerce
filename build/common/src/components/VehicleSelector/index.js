import React from 'react'
import { withState, compose, withHandlers } from 'recompose'
import PropTypes from 'prop-types'

import { Button, Modal, VehicleMatch, VehicleRegister } from '../'

import { VehicleSelectorContainer, VehicleItem } from './styles'

function VehicleSelector ({
  vehicles,
  isVehicleRegisterVisible,
  toggleRegister,
  isVehicleMatchVisible,
  toggleMatch
}) {
  const product = {
    name: 'Pinlock 70 for BMW',
    ref: 'P095748',
    image: 'https://i.imgur.com/662dvDH.png'
  }
  return (
    <VehicleSelectorContainer>
      <h3>Elegir motocicleta registrada</h3>
      <div>
        {vehicles.map(item => (
          <VehicleItem key={item.id} onClick={toggleMatch}>
            <div>
              <img src={item.image} alt={item.code} />
            </div>
            <div className='data'>
              <h4>{item.code}</h4>
              <div>
                <span>Placa: {item.placa}</span>
                <span>Modelo: {item.model}</span>
              </div>
            </div>
            <span className={`check ${item.isSelected ? 'checked' : ''}`} />
          </VehicleItem>
        ))}
      </div>
      <div className='register'>
        <button type='button' onClick={toggleRegister}>
          Registrar motocicleta
        </button>
      </div>
      <div className='button-container'>
        <Button>ACEPTAR</Button>
      </div>
      <Modal isVisible={isVehicleRegisterVisible} toggleModal={toggleRegister}>
        <VehicleRegister toggleModal={toggleRegister} />
      </Modal>
      <Modal isVisible={isVehicleMatchVisible} toggleModal={toggleMatch}>
        <VehicleMatch
          toggleModal={toggleMatch}
          vehicle={vehicles[0]}
          product={product}
        />
      </Modal>
    </VehicleSelectorContainer>
  )
}

VehicleSelector.propTypes = {
  vehicles: PropTypes.array.isRequired,
  toggleVehicleRegister: PropTypes.func.isRequired,
  isVehicleRegisterVisible: PropTypes.bool.isRequired,
  toggleVehicleMatch: PropTypes.func.isRequired,
  isVehicleMatchVisible: PropTypes.bool.isRequired,
  toggleRegister: PropTypes.func.isRequired,
  toggleMatch: PropTypes.func.isRequired
}

const funcs = withHandlers({
  toggleRegister: props => () =>
    props.toggleVehicleRegister(!props.isVehicleRegisterVisible),
  toggleMatch: props => () =>
    props.toggleVehicleMatch(!props.isVehicleMatchVisible)
})

const enhance = compose(
  withState('isVehicleRegisterVisible', 'toggleVehicleRegister', false),
  withState('isVehicleMatchVisible', 'toggleVehicleMatch', false),
  funcs
)

export default enhance(VehicleSelector)
