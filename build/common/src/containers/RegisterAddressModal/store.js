import {
  connect
} from 'react-redux'
import { withTheme } from 'styled-components'
import { compose } from 'recompose'

import {
  app as coreApp,
  user as coreUser
} from '../../redux'

const dialogName = 'registerAddress'

function mapStateToProps (store) {
  const {
    isPartLoadingSelector
  } = coreApp.selectors

  const states = store.get('app').get('states').toJS()
  const cities = store.get('app').get('cities').toJS()
  const citiesLoading = isPartLoadingSelector(store, 'cityField')
  const isVisible = store.getIn(['app', 'dialogs', dialogName]) || false
  const isLoading = isPartLoadingSelector(store, dialogName)

  return {
    dialogName,
    isVisible,
    isLoading,
    citiesLoading,
    states,
    cities
  }
}

function mapDispatchToProps (dispatch) {
  const {
    getCitiesByState,
    setDialogState
  } = coreApp.actions

  const {
    requestCreateAddress
  } = coreUser.actions

  return {
    onSubmit: data => dispatch(requestCreateAddress(data)),
    closeModal: () => dispatch(setDialogState(dialogName, false)),
    getCities: stateId => dispatch(getCitiesByState(stateId))
  }
}

export default compose(withTheme, connect(mapStateToProps, mapDispatchToProps))
