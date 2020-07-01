import { connect } from 'react-redux'

import { events as coreEvents } from '../../common/redux'

function mapStateToProps (store) {
  const eventsSelector = store.getIn(['events', 'events'])
  const events = eventsSelector
    .get('data')
    .sortBy(item => item.get('order'))
    .valueSeq()
    .toJS()

  const perPage = eventsSelector.get('perPage')
  const currentPage = eventsSelector.get('currentPage')
  const count = events.length <
    eventsSelector.get('count')
    ? events.length
    : eventsSelector.get('count')

  const calcShow = perPage * (currentPage || 1)

  const paginationData = {
    perPage,
    currentPage,
    count,
    showing: calcShow > count ? count : calcShow
  }

  const theme = store
    .get('app')
    .get('theme')
    .toJS()

  return {
    events,
    theme,
    paginationData
  }
}

function mapDispatchToProps (dispatch) {
  const { getAllEvents, setEventsQueryText } = coreEvents.actions

  return {
    getAllEvents: page => dispatch(getAllEvents(page)),
    onInputChange: text => {
      dispatch(setEventsQueryText(text))
      dispatch(getAllEvents())
    }
  }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    onChangePage: nextPage => {
      if (nextPage !== stateProps.paginationData.currentPage) {
        dispatchProps.getAllEvents(nextPage)
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
