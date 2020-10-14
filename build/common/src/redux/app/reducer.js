import { Map as map, fromJS } from 'immutable'
import { createReducer } from 'reduxsauce'
import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const setAppLoading = (state, { isLoading }) =>
  state.set('isAppLoading', isLoading)

const setStates = (state, { states }) =>
  state.set('states', fromJS(states))

const setCities = (state, { cities }) =>
  state.set('cities', fromJS(cities))

const setPartLoading = (state, { appPart, isLoading }) =>
  state.setIn(['isPartLoading', appPart], isLoading)

const setError = (state, { error }) => state.set('appError', "")
const setErrorToPay = (state, { hasError }) => state.set('errorToPay', hasError)

const setToken = (state, { token = null, userId = null }) =>
  state.set('auth', map({ token, userId }))

const showFeedback = (state, { feedbackData }) => {
  return state.set('feedbackShowing', map({
    isShowing: true,
    ...feedbackData
  }))
}

const showCartPreview = (state, { isShowing, product }) => {
  return state.set('cartPreviewShowing', map({
    isShowing: isShowing,
    ...product
  }))
}

const hideFeedback = state => {
  return state.set('feedbackShowing', map({
    isShowing: false,
    feedbackTitle: '',
    feedbackDescription: ''
  }))
}

const setDialogState = (state, { dialogName, isActived }) =>
  state.setIn(['dialogs', dialogName], isActived)

const setTabState = (state, { tabName, isActived }) =>
  state.setIn(['tabs', tabName], isActived)

const setMenuCategoriesState = (state, { isVisible, offsetTop }) =>
  state.set('categoriesMenu', map({
    isVisible,
    offsetTop: parseInt(offsetTop)
  }))

const setElementShowing = (state, { element, value }) =>
  state.setIn(['isElementShowing', element], value)

const setAdvertisements = (state, { advertisements }) => state.set(
  'advertisements',
  fromJS(
    [
      ...advertisements
    ]
  )
)

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_STATES]: setStates,
  [Actions.SET_CITIES]: setCities,
  [Actions.SHOW_FEEDBACK]: showFeedback,
  [Actions.SHOW_CART_PREVIEW]: showCartPreview,
  [Actions.HIDE_FEEDBACK]: hideFeedback,
  [Actions.SET_ELEMENT_SHOWING]: setElementShowing,
  [Actions.SET_APP_LOADING]: setAppLoading,
  [Actions.SET_ERROR_TO_PAY]: setErrorToPay,
  [Actions.SET_PART_LOADING]: setPartLoading,
  [Actions.SET_ERROR]: setError,
  [Actions.SET_TOKEN]: setToken,
  [Actions.CLEAN_ERROR]: setError,
  [Actions.SET_DIALOG_STATE]: setDialogState,
  [Actions.SET_TAB_STATE]: setTabState,
  [Actions.SET_MENU_CATEGORIES_STATE]: setMenuCategoriesState,
  [Actions.SET_ADVERTISEMENTS]: setAdvertisements
})

export default reducer
