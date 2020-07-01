import { takeLatest, put, call } from 'redux-saga/effects'
import { reset } from 'redux-form'
import appActions, { Actions } from './actions'
import AppService from './service'
import { getProfileMeSaga } from '../user/sagas'

const feedbackData = {
  feedbackTitle: '¡Suscripción exitosa!',
  feedbackDescription:
    'Se ha inscrito a nuestro Newsletter, ahora recibirá todo nuestro contenido de noticias, promociones y eventos en su correo electrónico'
}

function* sendEmailSubscriptionSaga(action) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const { email } = action
    yield call(AppService.sendEmail, email)
    yield put(appActions.showFeedback(feedbackData))
    yield put(reset('emailSubscription'))
  } catch (e) {
    yield put(appActions.setError(e.message))
    const { error } = e.response.data
    if (
      error &&
      error.details &&
      error.details.codes &&
      error.details.codes.email &&
      error.details.codes.email[0] === 'uniqueness'
    ) {
      yield put(
        appActions.showFeedback({
          feedbackTitle: 'El email ya se encuentra registrado'
        })
      )
    }
  }
  /* yield put(appActions.setAppLoading(false)) */
}

function* showFeedbackSaga(action) {
  yield put(appActions.setDialogState('feedback', true))
}

function* hideFeedbackSaga(action) {
  yield put(appActions.setDialogState('feedback', false))
}

function* getAdvertisements() {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const advertisementsResult = yield call(AppService.getAdvertisements)
    yield put(appActions.setAdvertisements(advertisementsResult.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

function* getStates() {
  /* yield put(appActions.setPartLoading('statesField', true)) */
  try {
    const statesResult = yield call(AppService.getStates)
    yield put(appActions.setStates(statesResult.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setPartLoading('statesField', false)) */
}

function* getCitiesByState({ stateId }) {
  yield put(appActions.setPartLoading('cityField', true))
  try {
    const citiesResult = yield call(AppService.getCities, stateId)
    yield put(appActions.setCities(citiesResult.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  yield put(appActions.setPartLoading('cityField', false))
}

export default [
  takeLatest(Actions.SEND_EMAIL_SUBSCRIPTION, sendEmailSubscriptionSaga),
  takeLatest(Actions.SET_TOKEN, getProfileMeSaga),
  takeLatest(Actions.SHOW_FEEDBACK, showFeedbackSaga),
  takeLatest(Actions.HIDE_FEEDBACK, hideFeedbackSaga),
  takeLatest(Actions.GET_ADVERTISEMENTS, getAdvertisements),
  takeLatest(Actions.GET_CITIES_BY_STATE, getCitiesByState),
  takeLatest(Actions.GET_STATES, getStates)
]
