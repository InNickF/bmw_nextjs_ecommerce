import React from 'react'
import PropTypes from 'prop-types'

import { ButtonTriangleBorder } from '../'

import {
  VehicleMatchContainer,
  Title,
  Description,
  Match,
  Card,
  ImageFeedback,
  Buttons
} from './styles'

function VehicleMath ({ isCompatible, product, vehicle }) {
  return (
    <VehicleMatchContainer>
      <Title>¡Producto {!isCompatible && 'no '}compatible!</Title>
      <Description>
        El producto elegido {!isCompatible && 'NO '}es compatible con las
        características de su vehiculo
      </Description>
      <Match>
        <Card>
          <h4>{product.name}</h4>
          <p>Ref: {product.ref}</p>
          <img src={product.image} alt='' />
        </Card>
        <ImageFeedback>
          <img
            src={
              isCompatible
                ? 'https://i.imgur.com/qAMiMgw.png'
                : 'https://i.imgur.com/BbCeov4.png'
            }
            alt=''
          />
        </ImageFeedback>
        <Card>
          <h4 className='centered'>{vehicle.code}</h4>
          <img src={vehicle.image} alt='' />
        </Card>
      </Match>
      <Buttons>
        <ButtonTriangleBorder left gray action={() => {}}>
          Atrás
        </ButtonTriangleBorder>
        <ButtonTriangleBorder right action={() => {}}>
          Aceptar
        </ButtonTriangleBorder>
      </Buttons>
    </VehicleMatchContainer>
  )
}

VehicleMath.defaultProps = {
  isCompatible: false
}

VehicleMath.propTypes = {
  isCompatible: PropTypes.bool,
  product: PropTypes.object.isRequired,
  vehicle: PropTypes.object.isRequired
}

export default VehicleMath
