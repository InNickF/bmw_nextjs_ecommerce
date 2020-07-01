import { withState, compose } from 'recompose'
import { connect } from 'react-redux'

import {
  app as coreApp,
  cart as coreCart
} from '../../common/redux'

function mapStateToProps(store, ownProps) {
  const cart = store.get('cart').get('cart')
  const modalDeleted = store.get('cart').getIn(['itemsDeleted', 'modal'])
  const itemsDeleted = store.get('cart').getIn(['itemsDeleted', 'items'])
  const { isPartLoadingSelector } = coreApp.selectors
  const isPayButtonLoading = isPartLoadingSelector(store, 'payment')
  const isShippingLoading = isPartLoadingSelector(store, 'shippingValue')
  const isCartViewLoading = isPartLoadingSelector(store, 'cart')
  const cartLoading = isPartLoadingSelector(store, 'currentCart')

  const withCoupon = cart && cart.charges ? cart.charges.resultCoupon : 0

  return {
    shippingValue:
      Object.hasOwnProperty.call(cart, 'charges') &&
        Object.hasOwnProperty.call(cart.charges, 'shipping') &&
        Object.hasOwnProperty.call(cart.charges.shipping, 'TCC')
        ? cart.charges.shipping.TCC
        : 0,
    isCartViewLoading,
    cartLoading,
    withCoupon,
    cart,
    total:
      Object.hasOwnProperty.call(cart, 'charges') &&
        Object.hasOwnProperty.call(cart.charges, 'total')
        ? cart.charges.total
        : 'NaN',
    isPayButtonLoading,
    isShippingLoading,
    cartItems: Object.hasOwnProperty.call(cart, 'items') ? cart.items : [],
    currentAddress:
      Object.hasOwnProperty.call(cart, 'address') &&
        Object.hasOwnProperty.call(cart.address, 'id')
        ? cart.address
        : 0,

    subTotal:
      Object.hasOwnProperty.call(cart, 'charges') &&
        Object.hasOwnProperty.call(cart.charges, 'subTotal')
        ? cart.charges.subTotal
        : 'NaN',

    iva:
      Object.hasOwnProperty.call(cart, 'charges') &&
        Object.hasOwnProperty.call(cart.charges, 'taxes') &&
        Object.hasOwnProperty.call(cart.charges.taxes, 'IVA')
        ? cart.charges.taxes.IVA
        : 'NaN',
    modalDeleted,
    itemsDeleted
  }
}

function mapDispatchToProps(dispatch) {
  const {
    beginPayment,
    requestCoupon,
    cartEndpoint,
    setModalDeleted,
    setItemsDeleted
  } = coreCart.actions

  return {
    pay(orderId) {
      dispatch(beginPayment(orderId))
    },
    getCoupon(coupon, orderId, valueOrder) {
      dispatch(requestCoupon(coupon, orderId, valueOrder))
    },
    reloadOrder() {
      dispatch(setModalDeleted(false))
      dispatch(setItemsDeleted([]))
      dispatch(cartEndpoint('READ', null, null))
    }
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    pay: () => {
      dispatchProps.pay(stateProps.cart.id)
    },
    getCoupon(coupon) {
      dispatchProps.getCoupon(coupon, stateProps.cart.id, stateProps.cart.charges.total)
    }
  }
}

const enhance = compose(
  withState('coupon', 'setCoupon', { actived: false, value: 0 }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )
)

export default enhance
