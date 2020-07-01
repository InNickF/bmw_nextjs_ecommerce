import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getLatestEvents: null,
  setLatestEvents: ['events'],
  getAllEvents: ['page', 'text'],
  setAllEvents: ['events'],
  getEventBySlug: ['slug'],
  setEventsCount: ['count'],
  setCurrentEvent: ['event'],
  setEventsCurrentPage: ['page'],
  setEventsQueryText: ['text'],
  checkSubscription: null,
  setSubscriptionToCurrentEvent: ['newState'],
  subscribeToCurrentEvent: null
})

export const Actions = Types
export default Creators
