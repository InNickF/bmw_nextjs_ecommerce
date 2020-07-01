import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '..'

import { priceFormatter } from '../../helpers'

import {
  ActualCarContainer, ActualCarActions, ActualCarData, ActualCarInfo, ActualCarImg, ActualCarResponsive
} from './styles'

function getIcon() {
  return (
    parseInt(process.env.BRAND_ID) === 1 ?
      <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.08 9L16.08 12H14.925L14.55 10.965C14.28 10.245 13.92 9.585 13.47 9H19.08ZM23.115 0H16.5V3H21.885L24.885 6H7.5C3.3 6 0 9.3 0 13.5C0 17.7 3.3 21 7.5 21C11.19 21 14.175 18.465 14.85 15H17.325L21.48 10.845C21.165 11.655 21 12.555 21 13.5C21 17.7 24.3 21 28.5 21C32.7 21 36 17.7 36 13.5C36 9.525 33.045 6.345 29.16 6.045L23.115 0ZM28.5 18C26.01 18 24 15.99 24 13.5C24 11.01 26.01 9 28.5 9C30.99 9 33 11.01 33 13.5C33 15.99 30.99 18 28.5 18ZM7.5 18C5.055 18 3 15.945 3 13.5C3 11.055 5.055 9 7.5 9C9.42 9 11.1 10.275 11.73 12H7.5V15H11.73C11.1 16.725 9.42 18 7.5 18Z" fill="white" />
      </svg>
      :
      <svg width="33" height="21" viewBox="0 0 33 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.6171 15.7914C29.5137 15.7895 30.3731 15.4325 31.0071 14.7985C31.6411 14.1645 31.9981 13.3051 32 12.4085V10.9258C31.9962 10.0298 31.6386 9.17156 31.005 8.53797C30.3714 7.90438 29.5132 7.54676 28.6171 7.54297H4.38287C3.48684 7.54676 2.62859 7.90438 1.995 8.53797C1.36141 9.17156 1.00379 10.0298 1 10.9258V12.4085C1.0019 13.3051 1.35892 14.1645 1.99292 14.7985C2.62692 15.4325 3.48626 15.7895 4.38287 15.7914H4.8795" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.804 15.791H20.5054" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.6943 6.9524C24.6943 6.9524 20.7932 1 15.0928 1C9.39227 1 5.7359 2.82819 2.52577 7.83771" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3232 1.46777V7.06749" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.8579 19.7158C22.7273 19.7158 21 17.9886 21 15.8579C21 13.7272 22.7273 12 24.8579 12C26.9886 12 28.7158 13.7272 28.7158 15.8579C28.7158 17.9886 26.9886 19.7158 24.8579 19.7158Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.72998 19.3896C6.59932 19.3896 4.87208 17.6624 4.87208 15.5317C4.87208 13.4011 6.59932 11.6738 8.72998 11.6738C10.8606 11.6738 12.5879 13.4011 12.5879 15.5317C12.5879 17.6624 10.8606 19.3896 8.72998 19.3896Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  )
}

function ActualCarCardHeader({
  selectedCar,
  change,
  quit
}) {
  return (
    <>
      <ActualCarContainer>
        <ActualCarData>
          <ActualCarImg>
            {getIcon()}
          </ActualCarImg>
          <ActualCarInfo>
            <p className="car-model">{selectedCar.year}</p>
            {process.env.BRAND_ID !== '2' &&
              <p className="car-serie">{selectedCar.serie.name}</p>
            }
            <p className="car-name">{selectedCar.model.name}</p>
          </ActualCarInfo>
          <ActualCarActions>
            <button onClick={() => change()}>Cambiar</button>
            <button onClick={() => quit()} >Quitar</button>
          </ActualCarActions>
        </ActualCarData>
      </ActualCarContainer>
      <ActualCarResponsive>
        {getIcon()}
        <div>
          <p>{selectedCar.model.name}</p>
          <button onClick={() => change()}>Cambiar</button>
        </div>
      </ActualCarResponsive>
    </>
  )
}
export default withTheme(ActualCarCardHeader)
