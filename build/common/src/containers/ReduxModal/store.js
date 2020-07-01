import { connect } from 'react-redux'
import { app as coreApp } from '../../redux'

function mapStateToProps (store, props) {
  const { isPartLoadingSelector } = coreApp.selectors

  return {
    isVisible: store.getIn(['app', 'dialogs', props.name]) || false,
    isLoading: isPartLoadingSelector(store, props.name)
  }
}

function mapDispatchToProps (dispatch) {
  const { setDialogState } = coreApp.actions

  return {
    closeModal: modalName => dispatch(setDialogState(modalName, false))
  }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    closeModal: () =>
      dispatchProps.closeModal(ownProps.modalName)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
