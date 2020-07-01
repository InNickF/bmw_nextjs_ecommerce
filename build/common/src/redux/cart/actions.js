import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  beginPayment: ['orderId'],
  setOrder: ['order'],
  setOrderDetails: ['details'],
  requestRemoveFromCart: ['id'],
  addToCart: ['item'],
  addProductToCartLocal: ['product', 'quantity'],
  subtractProductToCartLocal: ['product'],
  deleteProductToCartLocal: ['product'],
  setCartLocal: ['cartLocal'],
  removeFromCart: ['id'],
  addQtyToDetail: ['orderDetailId'],
  updateOrderDetail: ['orderDetailId', 'data'],
  setShippingValue: ['shippingValue', 'addressId'],
  getCurrentConfirmation: ['orderId'],
  setCurrentConfirmation: ['data'],
  setOrderAddress: ['addressId'],
  requestCoupon: ['coupon', 'orderId', 'valueOrder'],
  setCouponValue: ['couponValue'],
  getOrderStatus: null,
  setOrderStatus: ['orderStatus'],
  getReasonTypes: null,
  setReasonTypes: ['reasonTypes'],
  returnStart: ['data'],
  setCart: ['cart'],
  cartEndpoint: ['operation', 'addressId', 'detailId', 'quantity', 'userIdOptional', 'local', 'prueba'],
  setItemsDeleted: ['items'],
  setModalDeleted: ['show'],
  closeModalCart: null,

  signupInvited: ['data'],
  signupInvitedResponse: ['status']
})

export const Actions = Types
export default Creators
