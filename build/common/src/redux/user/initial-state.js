import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  user: {},
  addresses: [],
  vehicles: [],
  orders: [],
  meetings: [],
  cart: [],
  wishlist: [],
  inProgressOrders: [],
  historyOrders: [],
  warrantyDetails: [],
  sendSuscription: false
})

export default INITIAL_STATE
