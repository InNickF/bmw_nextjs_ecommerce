import {
  connect
} from 'react-redux'
import { withTheme } from 'styled-components'
import { compose } from 'recompose'

import {
  app as coreApp
} from '../../redux'

const dialogName = 'editProfileModal'

function mapStateToProps (store) {
  const {
    isPartLoadingSelector
  } = coreApp.selectors

  const isVisible = store.getIn(['app', 'dialogs', dialogName]) || false
  const isLoading = isPartLoadingSelector(store, 'userProfile')

  return {
    dialogName,
    isVisible,
    isLoading
  }
}

function mapDispatchToProps (dispatch) {
  const {
    setDialogState
  } = coreApp.actions

  return {
    closeModal: () => dispatch(setDialogState(dialogName, false))
  }
}

export default compose(withTheme, connect(mapStateToProps, mapDispatchToProps))
