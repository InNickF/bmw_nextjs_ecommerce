import { fromJS } from 'immutable'


const theme = require(`../../themes/${process.env.APP_NAME}`).default

const INITIAL_STATE = fromJS({
  states: [],
  cities: [],
  advertisements: [],
  isElementShowing: {
    mobileMenu: false
  },
  feedbackShowing: {
    isShowing: false,
    feedbackTitle: '',
    feedbackDescription: '',
    feedbackIcon: ''
  },
  cartPreviewShowing: {
    isShowing: false,
    product: {}
  },
  tabs: {},
  dialogs: {},
  isAppLoading: false,
  isPartLoading: {
    currentCart: false,
    subscriptionLoading: true
  },
  appError: {},
  theme,
  auth: {
    token: null,
    userId: null
  },
  categoriesMenu: {
    offsetTop: 80,
    isVisible: false
  }
})

export default INITIAL_STATE
