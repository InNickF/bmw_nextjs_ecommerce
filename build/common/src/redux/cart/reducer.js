import { fromJS, Map as map } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const addToCart = (state, { item }) =>
  state.setIn(['details', item.id.toString()], fromJS(item))

const setOrderStatus = (state, { orderStatus }) =>
  state.set('orderStatus', fromJS(orderStatus))

const setOrderAddress = (state, { addressId }) =>
  state.set('addressId', addressId)

const removeFromCart = (state, { id }) =>
  state.deleteIn(['details', id.toString()])

const setOrder = (state, { order }) => state.mergeDeep(fromJS(order))

const setCart = (state, { cart }) => state.set('cart', cart)

const subtractProductToCartLocal = (state, { product }) => {
  let prevCartlocal = Array.isArray(state.get('cartLocal')) ? state.get('cartLocal') : []
  const productIndex = prevCartlocal.findIndex(item => item.id == product.id)

  if (prevCartlocal[productIndex].quantity == 1) {
    if (prevCartlocal.length == 1)
      prevCartlocal = []
    else
      prevCartlocal.splice(productIndex, 1)
  } else
    prevCartlocal[productIndex].quantity--

  localStorage.setItem('cartLocal', JSON.stringify([...prevCartlocal]))
  return state.set('cartLocal', [...prevCartlocal])
}

const addProductToCartLocal = (state, { product, quantity }) => {
  const prevCartlocal = Array.isArray(state.get('cartLocal')) ? state.get('cartLocal') : []

  if (!Array.isArray(product))
    product = [product]

  const newCartLocal = [...prevCartlocal]
  
  product.map(_product => {
    if(_product.productChildrenId)
      _product.id = _product.productChildrenId;

    const isProduct = prevCartlocal.find(item => item.id == _product.id)
    if (isProduct) {
      isProduct.quantity += quantity ? quantity : (_product.quantity? _product.quantity: 1)
    } else {
      _product.quantity = quantity ? quantity : (_product.quantity? _product.quantity: 1)
    }

    _product.productStock = _product.stock;

    if(!isProduct)
      newCartLocal.push(_product)
  })

  localStorage.setItem('cartLocal', JSON.stringify(newCartLocal))
  return state.set('cartLocal', newCartLocal)

}

const deleteProductToCartLocal = (state, { product }) => {
  let prevCartLocal = Array.isArray(state.get('cartLocal')) ? state.get('cartLocal') : []
  const productIndex = prevCartLocal.findIndex(item => item.id == product.id)
  prevCartLocal.splice(productIndex, 1)
  if (prevCartLocal.length == 0) {
    prevCartLocal = []
  }
  if (prevCartLocal) {
    localStorage.setItem('cartLocal', JSON.stringify(prevCartLocal))
  }
  return state.set('cartLocal', [...prevCartLocal])
}

const setCartLocal = (state, { cartLocal }) => {
  return state.set('cartLocal', cartLocal)
}

const setShippingValue = (state, { addressId, shippingValue }) => {
  return state.merge({
    addressId,
    priceDelivery: parseInt(shippingValue)
  })
}
const setCouponValue = (state, { couponValue }) => {
  return state.set('couponValue', couponValue)
}

const setOrderDetails = (state, { details }) =>
  state.setIn(
    ['details'],
    details.reduce(
      (list, item) => list.set(item.id.toString(), map(item)),
      map({})
    )
  )

const updateOrderDetail = (state, { orderDetailId, data }) =>
  state.setIn(['details', orderDetailId.toString()], map(data))

const updateCurrentConfirmation = (state, { data }) => {
  return state.set('currentConfirmationOrder', data)
}

const setModalDeleted = (state, { show }) =>
  state.setIn(
    ['itemsDeleted', 'modal'],
    show
  )

const setItemsDeleted = (state, { items }) =>
  state.setIn(
    ['itemsDeleted', 'items'],
    items
  )
const closeModalCart = state =>
  state.setIn(['cart', 'popUp'], false)

const setReasonTypes = (state, { reasonTypes }) => state.set('reasonTypes', reasonTypes)

const signupInvitedResponse = (state, { status }) => state.set('signupInvitedSuccess', true)

const reducer = createReducer(INITIAL_STATE, {
  [Actions.UPDATE_ORDER_DETAIL]: updateOrderDetail,
  [Actions.ADD_TO_CART]: addToCart,
  [Actions.ADD_PRODUCT_TO_CART_LOCAL]: addProductToCartLocal,
  [Actions.SUBTRACT_PRODUCT_TO_CART_LOCAL]: subtractProductToCartLocal,
  [Actions.DELETE_PRODUCT_TO_CART_LOCAL]: deleteProductToCartLocal,
  [Actions.REMOVE_FROM_CART]: removeFromCart,
  [Actions.SET_CART_LOCAL]: setCartLocal,
  [Actions.SET_ORDER]: setOrder,
  [Actions.SET_ORDER_DETAILS]: setOrderDetails,
  [Actions.SET_SHIPPING_VALUE]: setShippingValue,
  [Actions.SET_COUPON_VALUE]: setCouponValue,
  [Actions.SET_CURRENT_CONFIRMATION]: updateCurrentConfirmation,
  [Actions.SET_ORDER_ADDRESS]: setOrderAddress,
  [Actions.SET_ORDER_STATUS]: setOrderStatus,
  [Actions.SET_CART]: setCart,
  [Actions.SET_ITEMS_DELETED]: setItemsDeleted,
  [Actions.SET_MODAL_DELETED]: setModalDeleted,
  [Actions.CLOSE_MODAL_CART]: closeModalCart,
  [Actions.SET_REASON_TYPES]: setReasonTypes,
  [Actions.SIGNUP_INVITED_RESPONSE]: signupInvitedResponse,
})

export default reducer
