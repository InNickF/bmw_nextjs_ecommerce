import { connect } from 'react-redux'
import Router from 'next/router'

import { app as coreApp, user as coreUser, cart as coreCart, product as coreProduct, } from '../../common/redux'

function mapStateToProps(store) {
  const { isPartLoadingSelector } = coreApp.selectors
  const user = store
    .get('user')
    .get('user')
    .toJS()
  const isAuthenticated = user && user.id
  const orders = store.getIn(['user', 'historyOrders']).toJS()

  const validData =
    (Object.hasOwnProperty.call(user, 'docType') && user.docType !== null) ||
    (Object.hasOwnProperty.call(user, 'identification') &&
      user.identification !== null) ||
    (Object.hasOwnProperty.call(user, 'birth') &&
      user.birth !== 'Invalid date') ||
    (Object.hasOwnProperty.call(user, 'email') && user.email !== null)

  return {
    isAuthenticated,
    validData,
    orders,
    isLoading: isPartLoadingSelector(store, 'register'),
    emailUser: store.getIn(['user', 'user', 'email']) || null,
    nameUser: `${store.getIn(['user', 'user', 'firstName']) ||
      ''} ${store.getIn(['user', 'user', 'lastName']) || ''} `,
  }
}

function mapDispatchToProps(dispatch) {
  const { showFeedback, setDialogState } = coreApp.actions
  const { returnStart, getReasonTypes } = coreCart.actions
  const { getHistoryOrders } = coreUser.actions
  const { redirectToDetailById } = coreProduct.actions
  return {
    showFeedbackProfile: () => {
      dispatch(
        showFeedback({
          feedbackTitle: '¡Atención!',
          feedbackDescription:
            'Para poder continuar, por favor ve al perfil y termina de actualizar los datos'
        })
      )
      Router.push('/mi-perfil')
    },
    loginModal: () => dispatch(setDialogState('login', true)),
    returnFunc: (values, name, email) =>
      dispatch(returnStart({ ...values, name, email })),
    getOrders: (month, year) => dispatch(getHistoryOrders(month, year)),
    redirectToProduct: productId => dispatch(redirectToDetailById(productId))
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    onSubmit: values => {
      dispatchProps.returnFunc(
        values,
        stateProps.nameUser,
        stateProps.emailUser
      )
    },
    getOrder: () => dispatchProps.getOrder(ownProps.orderId),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
