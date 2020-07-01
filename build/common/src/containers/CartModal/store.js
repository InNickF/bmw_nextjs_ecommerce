import { connect } from 'react-redux'
import { cart } from '../../redux'

function mapStateToProps (store) {
  return {
    isVisible: store.getIn(['cart']).size ? store.getIn(['cart', 'cart', 'popUp']) : false,
    invoiceNumber: store.getIn(['cart']).size ? store.getIn(['cart', 'cart', 'popUpArrayOrders', 'payments']) : '',
    idTransaction: store.getIn(['cart']).size ? store.getIn(['cart', 'cart', 'popUpArrayOrders']) : ''
  }
}

function mapDispatchToProps (dispatch) {
  const { closeModalCart } = cart.actions
  return {
    closeModal: () => dispatch(closeModalCart())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
