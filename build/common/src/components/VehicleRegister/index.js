import React from 'react'
import PropTypes from 'prop-types'

import { Modal, Button } from '../'

import {
  VehicleRegisterContainer,
  Error,
  Description,
  LinkDescription,
  ContentImgTP
} from './styles'

const chassisRef = React.createRef()

class VehicleRegister extends React.Component {
  state = {
    tarjetaPropiedadModal: false,
    error: ''
  };

  actionButton = () => {
    const { toggleModal, alternativeActionOnSubmit } = this.props
    const chassisValue = chassisRef.current.value

    if (
      chassisRef.current.value === '' ||
      chassisRef.current.value === undefined
    ) {
      return this.setState({ error: 'Campo obligatorio' })
    }

    this.setState({ error: '' })

    return alternativeActionOnSubmit
      ? alternativeActionOnSubmit(chassisValue)
      : toggleModal(chassisRef.current.value)
  };

  onSubmit = e => {
    e.preventDefault()
    this.actionButton()
  };

  render () {
    const { tarjetaPropiedadModal } = this.state

    return (
      <VehicleRegisterContainer>
        <h3>Registro de vehículo</h3>
        <Description>
          Ingrese el número de chasis de su vehículo
        </Description>
        <form>
          <div className='model'>
            <label htmlFor='vehicle-chasis'>
              <input
                type='text'
                id='vehicle-chasis'
                placeholder='Número de chasis'
                ref={chassisRef}
                required
              />
              <Error>{this.state.error}</Error>
            </label>
          </div>
          <div className='button-container'>
            <Button action={() => this.actionButton()}>
              REGISTRAR
            </Button>
          </div>
        </form>
        <LinkDescription
          onClick={() =>
            this.setState({ tarjetaPropiedadModal: !tarjetaPropiedadModal })
          }
        >
          ¿Qué es mi número de chasis?
        </LinkDescription>
        <Modal
          isVisible={tarjetaPropiedadModal}
          name='fichaTecnica'
          closeModal={() =>
            this.setState({ tarjetaPropiedadModal: !tarjetaPropiedadModal })
          }
        >
          <ContentImgTP>
            <img
              src='/static/images/tarjeta-propiedad.png'
              alt='tarjeta de propiedad'
            />
          </ContentImgTP>
        </Modal>
      </VehicleRegisterContainer>
    )
  }
}

VehicleRegister.propTypes = {
  toggleModal: PropTypes.func,
  alternativeActionOnSubmit: PropTypes.func
}

export default VehicleRegister
