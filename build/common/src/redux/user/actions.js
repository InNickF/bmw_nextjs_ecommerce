import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  registerUser: ['user', 'brandId'],
  registerUserSocial: ['social', 'brandId'],
  requestLogin: ['user'],
  requestLogout: null,
  getWishlist: null,
  requestRemoveWishlistItem: ['id'],
  removeWishlistItem: ['id'],
  setUser: ['user'],
  setWishlist: ['wishlist'],
  saveUserData: ['user'],
  updateProfile: ['profile'],
  deleteVehicle: ['vehicleId'],
  removeVehicle: ['vehicleId'],
  getVehicles: null,
  setVehicles: ['vehicles'],
  postVehicle: ['chassis', 'userId', 'skuProduct', 'onlyCreate'],
  addAddressToUser: ['address'],
  requestCreateAddress: ['data'],
  setUserAddresses: ['addresses'],
  getInProgressOrders: null,
  getHistoryOrders: ['month', 'year'],
  setInProgressOrders: ['orders'],
  setHistoryOrders: ['orders'],
  getUserUid: ['uidAuth'],
  validateSession: null,
  setLogoutUser: null,
  updateAvatar: ['avatar'],
  resetPassword: ['email'],
  setWarrantyDetails: ['details'],
  getWarrantyDetails: ['orderId'],

  createSuscription: ['email'],
  setSendSuscription: ['status']
})

export const Actions = Types
export default Creators
