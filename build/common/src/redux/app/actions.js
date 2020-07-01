import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setStates: ['states'],
  setCities: ['cities'],
  getCitiesByState: ['stateId'],
  getStates: null,
  setElementShowing: ['element', 'value'],
  sendEmailSubscription: ['email'],
  showFeedback: ['feedbackData'],
  showCartPreview: ['isShowing', 'product'],
  hideFeedback: null,
  setToken: ['token', 'userId'],
  setAppLoading: ['isLoading'],
  setPartLoading: ['appPart', 'isLoading'],
  setError: ['error'],
  setDialogState: ['dialogName', 'isActived'],
  setTabState: ['tabName', 'isActived'],
  cleanError: null,
  setMenuCategoriesState: ['isVisible', 'offsetTop'],
  getAdvertisements: null,
  setAdvertisements: ['advertisements']
})

export const Actions = Types
export default Creators
