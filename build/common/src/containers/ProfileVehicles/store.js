import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { app as coreApp, user as coreUser } from '../../redux'

const modalName = 'registerByChassis'

function mapStateToProps (store) {
  const vehicles =
    store
      .get('user')
      .get('vehicles')
      .toJS() || []

  const isRegisterVisible = store.getIn(['app', 'dialogs', modalName]) || false

  const { isPartLoadingSelector } = coreApp.selectors
  const isRegisterLoading = isPartLoadingSelector(store, modalName)

  const userId = store
    .get('user')
    .get('user')
    .get('id')

  return {
    modalName,
    isRegisterVisible,
    isRegisterLoading,
    vehicles,
    userId
  }
}

function mapDispatchToProps (dispatch) {
  const { getVehicles, postVehicle, deleteVehicle } = coreUser.actions
  const { setDialogState } = coreApp.actions

  return {
    deleteVehicle: vehicleId => dispatch(deleteVehicle(vehicleId)),
    postVehicle: (chassis, userId) => {
      const skuProduct = null
      const needUpdateVehicles = true
      dispatch(
        postVehicle(chassis, userId, skuProduct, needUpdateVehicles)
      )
    },
    getVehicles: () => dispatch(getVehicles()),
    openModal: () => dispatch(setDialogState(modalName, true)),
    closeModal: () => dispatch(setDialogState(modalName, false))
  }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    registerVehicle: chassis =>
      dispatchProps.postVehicle(chassis, stateProps.userId)
  }
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  lifecycle({
    componentDidMount () {
      this.props.getVehicles()
    }
  })
)

export default enhance
