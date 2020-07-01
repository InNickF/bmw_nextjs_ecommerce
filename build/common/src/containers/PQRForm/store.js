import { connect } from 'react-redux'
import { change } from 'redux-form'
import { pqr as corePQR } from '../../redux'

function mapStateToProps (state) {
  const userId = state.getIn(['user', 'user', 'id'])
  const pqr = state.get('pqr')
  const reasonTypes = pqr.get('reasonTypes').toJS()
  const changeTypes = pqr.get('changeTypes').toJS()
  const userData = state.getIn(['user', 'user']).toJS()

  return {
    userData,
    userId,
    reasonTypes,
    changeTypes
  }
}

function mapDispatchToProps (dispatch) {
  const { requestPqr, getPqrServices } = corePQR.actions

  return {
    onSubmit: values => dispatch(requestPqr(values.toJS())),
    getPqrServices: () => dispatch(getPqrServices()),
    change: (field, value) => dispatch(change('pqr', field, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
