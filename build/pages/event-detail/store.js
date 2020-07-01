import { connect } from 'react-redux'

import {
  app as coreApp,
  events as coreEvents
} from '../../common/redux'

const eventsActions = coreEvents.actions
const { isPartLoadingSelector } = coreApp.selectors

function mapStateToProps (store) {
  const eventsDates = store.getIn(
    ['events', 'latest']
  )
    .reduce((list, event) => {
      const eventDate = new Date(event.get('startAt'))
      return list.concat(`${eventDate.getDate()}-${(eventDate.getMonth() + 1)}-${eventDate.getFullYear()}`)
    }, [])

  const currentEvent = store.getIn(['events', 'currentEvent']).toJS()

  const latestEvents = store
    .getIn(['events', 'latest'])
    .sortBy(item => item.get('order'))
    .valueSeq()
    .toJS()
    .splice(0, 3)

  let lastEvents = []

  latestEvents.map(item => {
    if (new Date() <= new Date(item.startAt)) {
      lastEvents.push(item)
    }
  })

  const theme = store.get('app').get('theme').toJS()

  const isSubscriptionLoading = isPartLoadingSelector(store, 'subscriptionLoading')

  return {
    latestEvents: lastEvents,
    currentEvent,
    eventsDates,
    theme,
    isSubscriptionLoading,
    isLogged: !!store.getIn(['user', 'user', 'id']) || false
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleSubscription: () => dispatch(eventsActions.subscribeToCurrentEvent()),
    checkSubscription: () => dispatch(eventsActions.checkSubscription())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
