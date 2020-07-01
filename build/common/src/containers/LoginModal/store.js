import { connect } from 'react-redux'
import { app as coreApp, user as coreUser } from '../../redux'
import appActions from '../../redux/app/actions'

function mapStateToProps(store, props) {
  const { isPartLoadingSelector } = coreApp.selectors

  return {
    isVisible: store.getIn(['app', 'dialogs', 'login']) || false,
    visit: store.getIn(['app', 'dialogs', 'visit']) || false,
    isLoading: isPartLoadingSelector(store, 'login')
  }
}

function mapDispatchToProps(dispatch) {
  const { setDialogState } = coreApp.actions
  const { requestLogin, registerUserSocial } = coreUser.actions
  return {
    openPasswordReset: () => dispatch(setDialogState('passwordReset', true)),
    closeModal: (visit) => {
      document.body.classList.remove('notScroll');
      dispatch(setDialogState('login', false));
      dispatch(setDialogState('visit', true));
      if (!window.location.pathname.includes('carrito') && !visit) {
        dispatch(appActions.showFeedback({
          feedbackTitle: `Ahora puedes comprar sin registrarte`,
        }))
      }
    },
    openRegister: () => dispatch(setDialogState('register', true)),
    submitLogin: values => dispatch(requestLogin(values.toJS())),
    registerSocial: (value, brandId) =>
      dispatch(registerUserSocial(value, brandId))
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    registerSocialFunc: value =>
      dispatchProps.registerSocial(value, ownProps.brandId)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
