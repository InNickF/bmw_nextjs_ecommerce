import { connect } from 'react-redux'

function mapStateToPros (store) {
  const {
    user: { cart }
  } = store.toJS()
  return {
    cart
  }
}

export default connect(mapStateToPros)
