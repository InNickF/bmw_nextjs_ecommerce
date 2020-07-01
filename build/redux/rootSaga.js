import { all } from 'redux-saga/effects'
import { sagas as coreSagas } from '../common/redux'

function * rootSaga () {
  yield all([
    ...coreSagas
    // Here custom sagas
  ])
}

export default rootSaga
