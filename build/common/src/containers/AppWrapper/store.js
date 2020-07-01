import { connect } from 'react-redux'
import {
  app as coreApp,
  cart as coreCart
} from '../../redux'

function mapStateToProps(state) {
  const user = state.get('user').get('user').toJS() || false
  const theme = state.get('app').get('theme').toJS()
  const cart = state.get('cart').toJS()
  return {
    cart: cart.cart || {},
    feedbackShowing: state.get('app').get('feedbackShowing').toJS(),
    cartPreviewShowing: state.get('app').get('cartPreviewShowing').toJS(),
    authenticated: !!(user && user.id) || false,
    theme
  }
}

function mapDispatchToProps(dispatch) {
  const {
    setElementShowing,
    hideFeedback
  } = coreApp.actions

  const {
    cartEndpoint
  } = coreCart.actions

  return {
    hideMobileMenu: () => dispatch(setElementShowing('mobileMenu', false)),
    hideFeedback: () => dispatch(hideFeedback()),
    getCurrentCart: () => dispatch(cartEndpoint('READ', null, null))
  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance
