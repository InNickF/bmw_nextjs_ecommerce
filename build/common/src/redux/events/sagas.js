import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { historyPushState } from '../../helpers'
import appActions from '../app/actions'
import eventActions, { Actions } from './actions'

import EventService from './service'

// Get latest events
function * getLatestEvents () {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const result = yield call(EventService.getLatestEvents)
    yield put(eventActions.setLatestEvents(result.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// get and paginate events
function * getAllEvents ({ page = 1, text }) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    if (text) {
      yield put(eventActions.setEventsQueryText(text))
    }
    const perPage = yield select(store => store.getIn(
      ['events', 'events', 'perPage']
    ))

    const queryText = yield select(store => store.getIn(
      ['events', 'events', 'queryText']
    ))

    const { data: { count } } = yield call(EventService.countEvents, queryText)

    const eventsResult = yield call(
      EventService.getAllEvents, page, queryText, perPage
    )
    yield put(eventActions.setAllEvents(eventsResult.data))
    yield put(eventActions.setEventsCount(count))
    yield put(eventActions.setEventsCurrentPage(page))
    let params = `?q=${queryText}&p=${page}`
    historyPushState(params)
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// get event by slug
function * getEventBySlug ({ slug }) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const result = yield call(EventService.getEventBySlug, slug)

    yield put(eventActions.setCurrentEvent(result.data[0]))

    yield fork(getLatestEvents)
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

const onSubscribed = {
  feedbackTitle: 'Se ha inscrito al evento exitosamente.',
  feedbackDescription: 'Recibirá un correo con todos los detalles del evento'
}

// subscribe user to current event
function * subscribeToCurrentEvent () {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const userId = yield select(state => state.getIn(['user', 'user', 'id']))
    const eventId = yield select(state => state.getIn(
      ['events', 'currentEvent', 'id']
    ))

    const checkResult = yield call(
      EventService.checkEventSubscription, eventId, userId
    )

    // If not subscribed then subscribe
    if (!checkResult.data.length) {
      yield call(
        EventService.subscribeToCurrentEvent, eventId, userId
      )

      yield put(appActions.showFeedback(onSubscribed))
      yield put(eventActions.setSubscriptionToCurrentEvent(true))

      return
    } else { // if subscribed then unsubscribe
      yield call(
        EventService.unSubscribeToCurrentEvent, checkResult.data[0].id
      )

      yield put(eventActions.setSubscriptionToCurrentEvent(false))
    }
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// check subscription
function * checkSubscription ({ slug }) {
  yield put(appActions.setPartLoading('subscriptionLoading', true))
  try {
    const userId = yield select(state => state.getIn(['user', 'user', 'id']))

    // if user logged
    if (userId) {
      const eventId = yield select(state => state.getIn(['events', 'currentEvent', 'id']))
      // check if user is subscribed
      const checkResult = yield call(
        EventService.checkEventSubscription, eventId, userId
      )

      yield put(eventActions.setSubscriptionToCurrentEvent(!!checkResult.data.length))
    }

    yield fork(getLatestEvents)
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  yield put(appActions.setPartLoading('subscriptionLoading', false))
}

export default [
  takeLatest(Actions.CHECK_SUBSCRIPTION, checkSubscription),
  takeLatest(Actions.GET_LATEST_EVENTS, getLatestEvents),
  takeLatest(Actions.GET_ALL_EVENTS, getAllEvents),
  takeLatest(Actions.GET_EVENT_BY_SLUG, getEventBySlug),
  takeLatest(Actions.SUBSCRIBE_TO_CURRENT_EVENT, subscribeToCurrentEvent)
]
