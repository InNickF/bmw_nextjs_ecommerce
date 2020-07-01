import { Map as map, fromJS } from 'immutable'
import { createReducer } from 'reduxsauce'
import moment from 'moment'
import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const setUser = (state, { user }) =>
  state.set(
    'user',
    map({
      ...user,
      birth: moment(user.birth)
        .add(1, 'day')
        .format('YYYY-MM-DD')
    })
  )

const updateProfile = (state, { profile }) =>
  state.set(
    'user',
    map({
      ...profile,
      birth: moment(profile.birth)
        .add(1, 'day')
        .format('YYYY-MM-DD')
    })
  )

const removeWishlistItem = (state, { id }) => {
  const wishlist = state
    .get('wishlist')
    .toJS()
    .filter(item => item.id !== id)
  return state.set('wishlist', fromJS(wishlist))
}

const setWishlist = (state, { wishlist }) =>
  state.set('wishlist', fromJS(wishlist))

const setUserAddresses = (state, { addresses }) =>
  state.set('addresses', fromJS(addresses))

const addAddressToUser = (state, { address }) =>
  state.updateIn(['addresses'], arr => arr.push(map(address)))

const setVehicles = (state, { vehicles }) =>
  state.set('vehicles', fromJS(vehicles))

const removeVehicle = (state, { vehicleId }) => {
  const vehicle = state
    .get('vehicles')
    .find(item => item.get('id') === vehicleId)
  const index = state.get('vehicles').indexOf(vehicle)

  return state.deleteIn(['vehicles', index])
}

const setInProgressOrders = (state, { orders }) =>
  state.set(
    'inProgressOrders',
    fromJS(
      orders.map(order => ({
        ...order,
        details: order.orderDetails || []
      }))
    )
  )

const setHistoryOrders = (state, { orders }) =>
  state.set(
    'historyOrders',
    fromJS(
      orders.map(order => ({
        ...order,
        details: order.orderDetails || []
      }))
    )
  )

const setWarrantyDetails = (state, { details }) =>
  state.set('warrantyDetails', fromJS(details))

const removeUser = state => state.setIn(['user'], fromJS({}))
const updateAvatar = (state, { avatar }) =>
  state.setIn(
    ['user', 'avatar'],
    `${avatar}?date=${new Date().getTime() / 1000}`
  )

const createSuscription = (state, {  }) => state.set('sendSuscription', false)
const setSendSuscription = (state, { status }) => state.set('sendSuscription', status)


const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_USER]: setUser,
  [Actions.UPDATE_PROFILE]: updateProfile,
  [Actions.SET_WISHLIST]: setWishlist,
  [Actions.REMOVE_WISHLIST_ITEM]: removeWishlistItem,
  [Actions.SET_VEHICLES]: setVehicles,
  [Actions.REMOVE_VEHICLE]: removeVehicle,
  [Actions.ADD_ADDRESS_TO_USER]: addAddressToUser,
  [Actions.SET_USER_ADDRESSES]: setUserAddresses,
  [Actions.SET_IN_PROGRESS_ORDERS]: setInProgressOrders,
  [Actions.SET_HISTORY_ORDERS]: setHistoryOrders,
  [Actions.SET_LOGOUT_USER]: removeUser,
  [Actions.UPDATE_AVATAR]: updateAvatar,
  [Actions.SET_WARRANTY_DETAILS]: setWarrantyDetails,
  [Actions.CREATE_SUSCRIPTION]: createSuscription,
  [Actions.SET_SEND_SUSCRIPTION]: setSendSuscription
})

export default reducer
