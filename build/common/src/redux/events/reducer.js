import { Map as map } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const setLatestEvents = (state, { events }) =>
  state.set(
    'latest',
    events.reduce(
      (list, item, index) => list.set(item.id, map({
        ...item,
        order: index
      })),
      map({})
    )
  )

const setAllEvents = (state, { events }) =>
  state.setIn([
    'events',
    'data'
  ],
  events.reduce(
    (list, item, index) => list.set(item.id, map({
      ...item,
      order: index
    })),
    map({})
  )
  )

const setEventsCount = (state, { count }) => state.setIn(
  ['events', 'count'],
  count
)

const setEventsCurrentPage = (state, { page }) => state.setIn(
  ['events', 'currentPage'],
  page
)

const setEventsQueryText = (state, { text }) => state.setIn(
  ['events', 'queryText'],
  text
)

const setCurrentEvent = (state, { event }) => state.set(
  'currentEvent',
  map(event)
)

const setSubscriptionToCurrentEvent = (state, { newState }) => state.setIn(
  ['currentEvent', 'isSubscribed'],
  newState
)

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_LATEST_EVENTS]: setLatestEvents,
  [Actions.SET_ALL_EVENTS]: setAllEvents,
  [Actions.SET_EVENTS_COUNT]: setEventsCount,
  [Actions.SET_EVENTS_CURRENT_PAGE]: setEventsCurrentPage,
  [Actions.SET_EVENTS_QUERY_TEXT]: setEventsQueryText,
  [Actions.SET_CURRENT_EVENT]: setCurrentEvent,
  [Actions.SET_SUBSCRIPTION_TO_CURRENT_EVENT]: setSubscriptionToCurrentEvent
})

export default reducer
