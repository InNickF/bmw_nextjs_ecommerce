import { connect } from 'react-redux'
import {
  app as coreApp,
  user as coreUser
} from '../../redux'

function mapStateToPros (store, props) {
  const { isPartLoadingSelector } = coreApp.selectors
  return {
    isVisible: store.getIn(['app', 'dialogs', 'register']) || false,
    isLoading: isPartLoadingSelector(store, 'register')
  }
}

function mapDispatchToProps (dispatch) {
  const { registerUser, registerUserSocial } = coreUser.actions
  const { setDialogState } = coreApp.actions

  return {
    onSubmit: (values, brandId) => dispatch(registerUser(values.toJS(), brandId)),
    registerSocial: (value, brandId) => dispatch(registerUserSocial(value, brandId)),
    closeModal: () => dispatch(setDialogState('register', false))
  }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    onSubmitFunc: value => dispatchProps.onSubmit(value, ownProps.brandId),
    registerSocialFunc: value => dispatchProps.registerSocial(value, ownProps.brandId)
  }
}

export default connect(mapStateToPros, mapDispatchToProps, mergeProps)
