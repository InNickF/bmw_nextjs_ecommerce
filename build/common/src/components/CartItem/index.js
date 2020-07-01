import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'

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
  { value: 1, label: 'x1' },
  { value: 2, label: 'x2' },
  { value: 3, label: 'x3' },
  { value: 4, label: 'x4' },
  { value: 5, label: 'x5' },
]

function CartItem({
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
  theme,
  isCompatible,
  isLifeStyle,
  selecteCar
}) {

  const today = new Date();
  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  const isDiscountAvalidable = today >= initDis && today <= endDis;
  const priceAvalidable = Math.round(isDiscountAvalidable ? (price / (1 - (discountPercentage / 100))) : price);
  return (
    <>
      <Card>
        <RemoveButton onClick={onRemoveClick}>
          <Icon name='garbage' fill='red' width={20} height={20} />
        </RemoveButton>
        <Content>
          <Detail>
            <div>
              <div className="product-detail">
                <ImageContainer>
                  <img src={image} alt={name} />
                  {/* <a className="hide-mobile" href="">Vista rápida</a> */}
                </ImageContainer>
                <div className='info'>
                  <h2>{name}</h2>
                  <div className="info-label">
                    <label>Referencia</label>
                    <p>#{reference}</p>
                  </div>
                  {item.size != undefined && item.size != 0 &&
                    <div className="info-label" style={{ display: "flex" }}>
                      <div style={{ margin: '0 10px 0 0' }}>
                        <label>Talla</label>
                        <p>{item.size}</p>
                      </div>
                      <div style={{ margin: '0 10px' }}>
                        <label>Color</label>
                        <p>{item.color}</p>
                      </div>
                    </div>
                  }

                  {(selecteCar != undefined && !isLifeStyle) && (
                    (isCompatible) ? <div className="info-label">
                      <label>Compatibilidad</label>
                      <p>{compatible || 'Compatible'}</p>
                    </div> :
                      <div className="info-label">
                        <label>Compatibilidad</label>
                        <p>No compatible</p>
                      </div>)
                  }
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
              <div className='qty-container hide-mobile'>
                <ContentCount>
                  <button onClick={removeQtyToDetail}>
                    <Icon
                      name='minus-square-button'
                      stroke={'black'}
                      fill={'white'}
                      width={15}
                      height={15}
                    />
                  </button>
                  <span>{qty}</span>
                  <button disabled={item.productStock == qty} onClick={addQtyToDetail}>
                    <Icon
                      name='add-square-button'
                      stroke={'black'}
                      fill={'white'}
                      width={15}
                      height={15}
                    />
                  </button>
                </ContentCount>
                <p className="italic mt-7">{item.productStock <= 5 ? ' 5 o menos en existencia' : ''} </p>
              </div>
              <div className='hide-mobile price-content'>
                {isDiscountAvalidable && <p className="discount">{priceFormatter(priceAvalidable)}</p>}
                <p className='bold price-total'>{priceFormatter(price * qty)}</p>
                <p className='bold italic price-unitary'>{priceFormatter(price)} c/u</p>
              </div>
            </div>
          </Detail>
        </Content>
        <DataMobile>
          <RemoveButtonMobile onClick={removeQtyToDetail}>
            <Icon name='garbage' fill='red' width={20} height={20} />
          </RemoveButtonMobile>
          <div className="data-info">
            <p>Cantidad</p>
            <Select options={options} styles={customStyles} placeholder="x1" placeholder={qty} onChange={(e) => addQtyToDetail(item, e.value)} />
          </div>
          <div className="data-info">
            <p>Precio</p>
            <p className='bold italic'>{priceFormatter(price)}</p>
          </div>
        </DataMobile>
        {item.productCategory && item.productCategory.name == "LLANTAS" && <label className="tireNotify">Asegúrate de elegir tu llanta con el índice correcto. Tu seguridad es nuestro compromiso.</label>}
      </Card>
    </>
  )
}

CartItem.defaultProps = {
  productAttrs: [],
  addresses: [],
  citiesLoading: false
}

CartItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  orderDetailId: PropTypes.number,
  reference: PropTypes.string,
  productAttrs: PropTypes.array,
  qty: PropTypes.number,
  withInstallation: PropTypes.bool,
  installationValue: PropTypes.number,
  theme: PropTypes.object,
  addQtyToDetail: PropTypes.func,
  removeQtyToDetail: PropTypes.func,
  onRemoveClick: PropTypes.func
}

export default withTheme(CartItem)
