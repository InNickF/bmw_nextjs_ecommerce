import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  details: {},
  currentConfirmationOrder: {},
  couponValue: 0,
  orderStatus: [],
  cart: {},
  itemsDeleted: {
    modal: false,
    items: []
  },
  reasonTypes: [],
  cartLocal: [],
  signupInvitedSuccess: false
})

export default INITIAL_STATE
