import { connect } from 'react-redux'
import { app as coreApp, user as coreUser } from '../../redux'

function mapStateToPros (store) {
  const { isPartLoadingSelector } = coreApp.selectors
  return {
    isVisible: store.getIn(['app', 'dialogs', 'passwordReset']) || false,
    isLoading: isPartLoadingSelector(store, 'passwordReset')
  }
}

function mapDispatchToProps (dispatch) {
  const { resetPassword } = coreUser.actions
  const { setDialogState } = coreApp.actions

  return {
    onSubmit: ({ email }) =>
      dispatch(resetPassword(email)),
    closeModal: () => dispatch(setDialogState('passwordReset', false))
  }
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)
