import { connect } from 'react-redux'
import { app as coreApp } from '../../common/redux'

function mapStateToProps (store) {
  const latestEvents = store
    .getIn(['events', 'latest'])
    .sortBy(item => item.get('order'))
    .valueSeq()
    .toJS()

  let nextEvents = []
  let lastEvents = []

  latestEvents.forEach(item => {
    if (new Date() <= new Date(item.startAt)) {
      nextEvents.push(item)
    }
    lastEvents.push(item)
  })

  const eventsDates = store
    .getIn(['events', 'latest'])
    .reduce((list, event) => {
      const eventDate = new Date(event.get('startAt'))
      return list.concat(
        `${eventDate.getDate()}-${eventDate.getMonth() +
          1}-${eventDate.getFullYear()}`
      )
    }, [])

  return {
    eventsDates,
    nextEvents,
    lastEvents
  }
}

function mapDispatchToProps (dispatch) {
  const appActions = coreApp.actions
  return {
    showFeedback: feedbackTitle =>
      dispatch(
        appActions.showFeedback({
          feedbackTitle
        })
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
