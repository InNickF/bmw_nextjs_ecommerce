import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  articleCategories: {},
  currentPost: {},
  relatedPosts: [],
  userPosts: {},
  posts: {
    lastArticles: [],
    diyArticle: {},
    howToArticles: [],
    responsibilityArticle: {}
  }
})

export default INITIAL_STATE
