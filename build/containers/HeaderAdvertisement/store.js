import { connect } from 'react-redux'
import {
  app as coreApp,
  user as coreUser
} from '../../common/redux'

function mapStateToProps (store) {
  const advertisements = store.getIn(['app', 'advertisements']).toJS()
  const user = store.get('user').get('user').toJS()

  return {
    advertisements,
    authenticated: !!(user && user.id),
    user
  }
}

function mapDispatchToProps (dispatch) {
  const { setDialogState } = coreApp.actions
  const { requestLogout, validateSession } = coreUser.actions

  return {
    validateSession: () => dispatch(validateSession()),
    toggleLogin: () => dispatch(setDialogState('login', true)),
    logout: () => dispatch(requestLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
