import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '..'

import { priceFormatter } from '../../helpers'

import { Card, Content, ImageContainer, Detail, RemoveButton, DataMobile, RemoveButtonMobile, TotalMobile } from './styles'
import { ContentCount } from '../ProductDetail/styles'
import Select from 'react-select'

const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    display: "flex", // To keep icon and label aligned
    alignItems: "center"
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    background: 'transparent',
    textAlign: 'center',
    width: '90%',
    fontSize: 10
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? 'rgb(28, 105, 212)' : '#ffff',
    '&:hover': {
      background: 'rgb(28, 105, 212)',
      color: '#ffff'
    }
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
}
const options = [
  { value: '1', label: 'x1' },
  { value: '2', label: 'x2' },
  { value: '3', label: 'x3' },
  { value: '4', label: 'x4' },
  { value: '5', label: 'x5' },
]

function YourOrderResume({
  orderDetailId,
  removeQtyToDetail,
  addQtyToDetail,
  name,
  image,
  price,
  reference,
  item,
  productAttrs,
  endDateDiscount,
  initDateDiscount,
  discountPercentage,
  qty,
  onRemoveClick,
  compatible,
  withInstallation,
  installationValue,
  cartItems,
  theme
}) {

  const today = new Date();
  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  const isDiscountAvalidable = today >= initDis && today <= endDis;
  const priceAvalidable = Math.round(isDiscountAvalidable ? (price / (1 - (discountPercentage / 100))) : price);

  return (
    <>
      <Card>
        <Content>
          <Detail>
            <div className="product-detail">
              <ImageContainer>
                <img src={image} alt={name} />
              </ImageContainer>
              <div className='info'>
                <h2>{name}</h2>
                <div className="info-label">
                  <label>Referencia</label>
                  <p>#{reference}</p>
                </div>
                {productAttrs && (
                  <p>
                    {productAttrs.map(attr => (
                      <span key={attr.id}>
                        {attr.name} {attr.value}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
            <div className="product-price-content">
              <div className="data-info">
                <p>Cantidad: x{qty}</p>
              </div>
              <div className="data-info">
                <p className='bold'>{priceFormatter(price)}</p>
              </div>
            </div>
          </Detail>
        </Content>
      </Card>
    </>
  )
}

export default withTheme(YourOrderResume)
