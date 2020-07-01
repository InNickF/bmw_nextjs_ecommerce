import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NoSSR from 'react-no-ssr'
import Router from 'next/router'
import Helmet from 'react-helmet'

import { cart as coreCart } from '../../common/redux'

import {
  PageTitle,
  PurchaseBottomSteps,
  PurchaseCoupon,
  Wrapper,
  ContentLoader,
  AlignWrapper,
  InPartLoading,
  Modal,
  Button
} from '../../common/components'
import { Header } from '../../common/containers'

import { priceFormatter } from '../../common/helpers'
import Footer from '../../components/Footer'

import {
  Container,
  Detail,
  CouponContainer,
  Totals,
  LoaderContainer,
  ContainerItemsDeleted,
  ItemDeleted
} from '../../styles/purchase-summary'

import withStore from './store'


class PurchaseSummary extends React.Component {
  render() {
    const {
      cartItems,
      currentAddress,
      withCoupon,
      total,
      getCoupon,
      cartLoading,
      pay,
      isCartViewLoading,
      isShippingLoading,
      isPayButtonLoading,
      shippingValue,
      modalDeleted,
      itemsDeleted,
      reloadOrder,
      subTotal,
      iva
    } = this.props
    let subtotalAvalidable = 0;
    let IvaAvalidable = 0;
    let totalAvalidable = shippingValue
    return (
      <>
        <Helmet>
          <title>Resumen de compra</title>
        </Helmet>
        <Wrapper>
          <PageTitle leftArrow text='Resumen de compra' onClick={Router.back} />
          <Container>
            <InPartLoading
              isLoading={isCartViewLoading || isShippingLoading || isPayButtonLoading}
              canAbsolute
            />

            {cartLoading && (
              <LoaderContainer>
                <ContentLoader fb />
              </LoaderContainer>
            )}
            {cartItems.length && !cartLoading
              ? cartItems.map(item => {
                let iva = item.taxes;
                let priceNotIva = ((item.price * item.quantity) - (iva * item.quantity));
                subtotalAvalidable += priceNotIva;
                totalAvalidable = subtotalAvalidable + IvaAvalidable + shippingValue;
                if (withCoupon && withCoupon !== 0) {
                  totalAvalidable -= withCoupon;
                }
                return <Detail key={item.id}>
                  <div className='leftContent'>
                    <div className='image'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='content'>
                      <p>{item.name}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Ref: {item.sku}</p>
                      <div className='inMobile'>
                        <p className='price'>
                          {priceFormatter(priceNotIva)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rightContent'>
                    <p className='price'>
                      {priceFormatter(priceNotIva)}
                    </p>
                  </div>
                </Detail>
              })
              : !cartLoading && (
                <AlignWrapper margin='1rem'>
                  <p>Carrito vacío</p>
                </AlignWrapper>
              )}
            {!!cartItems.length && !cartLoading && (
              <Fragment>
                <Totals>
                  <div className='totalRow'>
                    <p>Dirección</p>
                    <p className='price'>{currentAddress.value}</p>
                  </div>
                  <br />
                  {(withCoupon && (withCoupon !== 0)) && (
                    <div className='totalRow iva'>
                      <p>Código de descuento <span>*Antes de IVA</span></p>
                      <p className='price coupon'>
                        -{priceFormatter(withCoupon)}
                      </p>
                    </div>
                  )}
                  <div className='totalRow'>
                    <p>Subtotal</p>
                    <p className='price'>{priceFormatter(subtotalAvalidable)}</p>
                  </div>
                  <div className='totalRow'>
                    <p>IVA</p>
                    <p className='price'>{priceFormatter(iva)}</p>
                  </div>
                  <div className='totalRow'>
                    <p>Envío</p>
                    <p className='price'>{priceFormatter(shippingValue)}</p>
                  </div>
                  {/* <div className='totalRow'>
                    <p>IVA</p>
                    <p className='price'>{priceFormatter(iva)} COP</p>
                  </div> */}
                  <div className='totalRow total'>
                    <p>Total <span>*IVA incluido</span></p>
                    <p className='price'>{priceFormatter(total)}</p>
                  </div>
                </Totals>
                <CouponContainer>
                  <PurchaseCoupon onSubmit={getCoupon} />
                </CouponContainer>
              </Fragment>
            )}
          </Container>
          {!!cartItems.length && !cartLoading && !isPayButtonLoading && (
            <PurchaseBottomSteps
              leftButtonText='SEGUIR COMPRANDO'
              rightButtonText='PAGAR'
              onClickLeftButton={() => Router.push('index')}
              onClickRightButton={pay}
            />
          )}
        </Wrapper>
        <NoSSR>
          <Modal
            isVisible={modalDeleted}
            name='itemsDeleted'
            closeModal={() =>
              reloadOrder()
            }
          >
            <ContainerItemsDeleted>
              <h5>¡Lo sentimos!</h5>
              <p>Se agotaron los siguientes productos de tu carro de compras</p>
              {itemsDeleted.length > 0 &&
                itemsDeleted.map(item => (
                  <ItemDeleted key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <span>{item.name}</span>
                      <p>{`Ref: ${item.sku}`}</p>
                    </div>
                  </ItemDeleted>
                ))
              }
              <Button action={reloadOrder}>Aceptar</Button>
            </ContainerItemsDeleted>
          </Modal>
        </NoSSR>
      </>
    )
  }
}

PurchaseSummary.getInitialProps = ({ store }) => {
  const { cartEndpoint } = coreCart.actions

  store.dispatch(cartEndpoint('READ', null, null))
  return {}
}

PurchaseSummary.propTypes = {
  cartItems: PropTypes.array.isRequired,
  currentAddress: PropTypes.object.isRequired,
  coupon: PropTypes.object.isRequired,
  iva: PropTypes.number.isRequired,
  modalDeleted: PropTypes.bool.isRequired,
  itemsDeleted: PropTypes.array.isRequired,
  reloadOrder: PropTypes.func.isRequired,
  isPayButtonLoading: PropTypes.bool.isRequired,
  total: PropTypes.number
}

export default withStore(PurchaseSummary)
