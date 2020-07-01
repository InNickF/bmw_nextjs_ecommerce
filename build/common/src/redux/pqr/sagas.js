import { takeLatest, call, put, all, select } from 'redux-saga/effects'
import { reset } from 'redux-form'

import appActions from '../app/actions'
import pqrActions, { Actions } from './actions'
import PQRService from './service'

function * getPQRServices ({ orderId }) {
  yield put(appActions.setPartLoading('pqr', true))
  try {
    const [changeTypes, reasonTypes] = yield all([
      call(PQRService.getChangeTypes),
      call(PQRService.getReasonTypes)
    ])

    yield put(pqrActions.setChangeTypes(changeTypes.data))

    yield put(pqrActions.setReasonTypes(reasonTypes.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  yield put(appActions.setPartLoading('pqr', false))
}

function * requestPQR (action) {
  try {
    const userId = yield select(state => state.getIn(['user', 'user', 'id']))
    const data = {
      ...action.data,
      userId,
      cityId: action.data.cityId.value
    }
    if (action.data.orderId) { data.orderId = action.data.orderId.value }

    yield call(PQRService.newPQR, data)

    yield put(
      appActions.showFeedback({
        feedbackTitle: 'Tu solicitud ha sido enviada. Pronto te contactaremos.'
      })
    )
    yield put(reset('pqr'))
  } catch (e) {
    yield put(
      appActions.showFeedback({
        feedbackTitle:
          'Error: los datos no coinciden, verifica el correo y la información del formulario.'
      })
    )
    yield put(appActions.setError(e.message))
  }
}

export default [
  takeLatest(Actions.REQUEST_PQR, requestPQR),
  takeLatest(Actions.GET_PQR_SERVICES, getPQRServices)
]
