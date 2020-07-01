import { fromJS } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const setChangeTypes = (state, { data }) =>
  state.set('changeTypes', fromJS(data))

const setReasonTypes = (state, { data }) =>
  state.set('reasonTypes', fromJS(data))

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_CHANGE_TYPES]: setChangeTypes,
  [Actions.SET_REASON_TYPES]: setReasonTypes
})

export default reducer
