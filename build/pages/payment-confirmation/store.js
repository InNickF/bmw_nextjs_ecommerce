import { connect } from 'react-redux'

import {
  cart as coreCart,
  blog as coreBlog
} from '../../common/redux'

function mapStateToProps(store) {
  const confirmationOrder = store.get('cart').get('currentConfirmationOrder').size ? store.get('cart').get('currentConfirmationOrder').toJS() : {}

  const user = store
    .get('user')
    .get('user')
    .toJS()

  const blog = store.get('blog')

  const {
    firstInLastPosts,
    lastArticles,
    diyArticle,
    howToArticles,
    responsibilityArticle
  } = coreBlog.selectors

  return {
    confirmationOrder,
    user,
    categories: blog.get('articleCategories').toJS(),
    firstInLastPosts: firstInLastPosts(blog).toJS(),
    lastArticles: lastArticles(blog).toJS(),
    diyArticle: diyArticle(blog).toJS(),
    howToArticles: howToArticles(blog).toJS(),
    responsibilityArticle: responsibilityArticle(blog).toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  const { getCurrentConfirmation } = coreCart.actions

  return {
    getCurrentConfirmation: orderId => {
      dispatch(getCurrentConfirmation(orderId))
    }
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)
