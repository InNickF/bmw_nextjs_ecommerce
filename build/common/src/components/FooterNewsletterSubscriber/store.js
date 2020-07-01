import { connect } from 'react-redux'
import {
  app as coreApp
} from '../../redux'

function mapDispatchToProps (dispatch) {
  const { sendEmailSubscription } = coreApp.actions
  return {
    subscribe: values =>
      dispatch(
        sendEmailSubscription(values.get('email'))
      )
  }
}

export default connect(null, mapDispatchToProps)
