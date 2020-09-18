import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'

import { priceFormatter } from '../../helpers'

import {
  PurchaseCoupon
} from '../../../components'

import {
  Card, ProductInfo, ProductPromo, ProductBtnBuy
} from './styles'

import LoginModal from '../../containers/LoginModal'


function CartResume({
  securePurchase,
  price,
  subtotalAvalidable,
  addressOK,
  IvaAvalidable,
  totalAvalidable,
  shipping,
  reference,
  productAttrs,
  endDateDiscount,
  initDateDiscount,
  discountPercentage,
  theme,
  getCoupon,
  step,
  withCoupon,
  isLogged,
  isPercentage,
  discount,
  buyAction,
  TCCRateError
}) {
  const today = new Date();
  const [showLogin, toggleLogin] = useState(false);

  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  const isDiscountAvalidable = today >= initDis && today <= endDis;
  const priceAvalidable = Math.round(isDiscountAvalidable ? (price / (1 - (discountPercentage / 100))) : price);
  console.log(step)
  return (
    <Card className={`${step != 0 && step != 2 ? 'hide-responsive' : ''}`}>
      <ProductInfo>
        <h2 style={{ fontWeight: "bold" }}>Resumen <br />de tu compra.</h2>
        <div><p>Subtotal</p> <p>{priceFormatter(Math.round(subtotalAvalidable))}</p></div>
        {isLogged && addressOK && shipping == 0 && !TCCRateError && <div><p>Envío</p> <p>Gratis</p></div>}
        {isLogged && shipping > 0 && !TCCRateError && <div><p>Envío</p> <p>{priceFormatter(shipping)}</p></div>}
        {isLogged && TCCRateError && <div><p>Envío</p> <p>No disponible</p></div>}
        {isLogged && withCoupon && withCoupon !== 0 &&
          <div><p>Descuento {isPercentage ? `${discount}%` : ''}</p> <p>- {priceFormatter(withCoupon)}</p></div>
        }
        <div><p>IVA</p> <p>{priceFormatter(IvaAvalidable)}</p></div>
        <div className='separator ' />
        <div><p style={{ fontWeight: "500" }}>Total</p> <p>{priceFormatter(Math.round(isPercentage ? totalAvalidable - withCoupon : totalAvalidable))}</p></div>
      </ProductInfo>
      {isLogged && step == 0 &&
        <ProductPromo>
          <h2>Código Promo</h2>
          <PurchaseCoupon onSubmit={getCoupon} />
        </ProductPromo>
      }
      {step == 0 && <ProductBtnBuy onClick={() => securePurchase(2)}>
        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z" fill="white" />
        </svg>
        Proceder a compra segura
        </ProductBtnBuy>}
      {step == 2 && isLogged && !TCCRateError &&
        <>
          <ProductBtnBuy className="show-responsive" onClick={() => buyAction()}>
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z" fill="white" />
            </svg>
        Pagar
        </ProductBtnBuy>
          <p>Al hacer clic en pagar está usted confirmando la compra y que leyó los términos y condiciones, términos de privacidad, y términos de retornos</p>
        </>
      }
      {showLogin && <LoginModal brandId={process.env.BRAND_ID} />}
    </Card >
  )
}

CartResume.defaultProps = {
  productAttrs: [],
  addresses: [],
  citiesLoading: false
}

CartResume.propTypes = {
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

export default withTheme(CartResume)
