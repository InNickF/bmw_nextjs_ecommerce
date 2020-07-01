import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '..'

import { priceFormatter } from '../../helpers'

import {
  ActualCarContainer, ActualCarHeader, ActualCarData, ActualCarInfo
} from './styles'

function ActualCarCard({
  selectedCar,
  setShowSelectedCar
}) {
  return (
    <ActualCarContainer className={'hide-responsive'}>
      <ActualCarHeader>
        {parseInt(process.env.BRAND_ID) === 1 ? 'Tu moto' : 'Tu carro'}
      </ActualCarHeader>
      <ActualCarData>
        {/* <img
          src={
            image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
          }
          alt={name}
        /> */}
        <ActualCarInfo>
          <p>{selectedCar.model}</p>
          <div>
            <h3>{selectedCar.serie}</h3>
            <h4>{selectedCar.name}</h4>
          </div>
          <button onClick={() => setShowSelectedCar(true)}>Cambiar</button>
        </ActualCarInfo>
      </ActualCarData>

    </ActualCarContainer>
  )
}
export default withTheme(ActualCarCard)
