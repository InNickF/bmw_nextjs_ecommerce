import { connect } from 'react-redux'
import {
  app as coreApp,
  blog as coreBlog
} from '../../common/redux'

function mapStateToProps(state) {
  const blog = state.get('blog')
  const latestEvents = state
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
  const eventsDates = state
    .getIn(['events', 'latest'])
    .reduce((list, event) => {
      const eventDate = new Date(event.get('startAt'))
      return list.concat(
        `${eventDate.getDate()}-${eventDate.getMonth() +
        1}-${eventDate.getFullYear()}`
      )
    }, [])
  const {
    firstInLastPosts,
    lastArticles,
    diyArticle,
    howToArticles,
    responsibilityArticle
  } = coreBlog.selectors

  return {
    isCreatePostVisible: state.getIn(['app', 'dialogs', 'create-post']) || false,
    categories: blog.get('articleCategories').toJS(),
    firstInLastPosts: firstInLastPosts(blog).toJS(),
    lastArticles: lastArticles(blog).toJS(),
    diyArticle: diyArticle(blog).toJS(),
    howToArticles: howToArticles(blog).toJS(),
    responsibilityArticle: responsibilityArticle(blog).toJS(),
    isLogged: !!state.getIn(['user', 'user', 'id']) || false,
    eventsDates,
    nextEvents,
    lastEvents
  }
}

function mapDispatchToProps(dispatch) {
  const { setDialogState } = coreApp.actions
  const { createArticle } = coreBlog.actions
  const appActions = coreApp.actions
  return {
    closeCreatePostModal: () => dispatch(setDialogState('create-post', false)),
    toggleCreatePostModal: () =>
      dispatch(setDialogState('create-post', true)),
    createPost: values => {
      dispatch(createArticle(values.toJS()))
    },
    showFeedback: feedbackTitle =>
      dispatch(
        appActions.showFeedback({
          feedbackTitle
        })
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
