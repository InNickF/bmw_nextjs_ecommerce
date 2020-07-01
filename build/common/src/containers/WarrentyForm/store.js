import { connect } from 'react-redux'
import { cart as coreCart, user as coreUser } from '../../redux'

function mapStateToPros (store, props) {
  const warrantyDetails = store.getIn(['user', 'warrantyDetails']).toJS()

  const detail = warrantyDetails.find(item => item.sku === props.sku)

  const opts = Array.apply(null, { length: detail ? detail.quantity : 0 })
    .map(Number.call, Number)
    .map(item => item + 1)

  return {
    quantities: opts,
    emailUser: store.getIn(['user', 'user', 'email']) || null,
    nameUser: `${store.getIn(['user', 'user', 'firstName']) ||
      ''} ${store.getIn(['user', 'user', 'lastName']) || ''} `,
    reasonTypes: store.getIn(['cart', 'reasonTypes']) || []
  }
}

function mapDispatchToProps (dispatch) {
  const { returnStart, getReasonTypes } = coreCart.actions
  const { getWarrantyDetails } = coreUser.actions

  return {
    getWarrantyDetails: orderId => dispatch(getWarrantyDetails(orderId)),
    returnFunc: (values, orderId, sku, name, email) =>
      dispatch(returnStart({ ...values.toJS(), orderId, sku, name, email })),
    getReasonTypes: () => dispatch(getReasonTypes())
  }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    onSubmit: values =>
      dispatchProps.returnFunc(
        values,
        ownProps.orderId,
        ownProps.sku,
        stateProps.nameUser,
        stateProps.emailUser
      ),
    getWarrantyDetails: () => dispatchProps.getWarrantyDetails(ownProps.orderId)
  }
}

export default connect(
  mapStateToPros,
  mapDispatchToProps,
  mergeProps
)
