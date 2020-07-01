import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  latest: {},
  currentEvent: {},
  events: {
    currentPage: 1,
    perPage: 9,
    count: 0,
    queryText: '',
    data: {}
  }
})

export default INITIAL_STATE
