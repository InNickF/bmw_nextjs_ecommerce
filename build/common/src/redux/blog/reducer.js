import { fromJS } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const setArticleCategories = (state, { categories }) =>
  state.set('articleCategories', fromJS(categories))

const setArticles = (state, { articles }) =>
  state.set('posts', fromJS(articles))

const setCurrentArticle = (state, { article }) =>
  state.set('currentPost', fromJS(article))

const setRelatedArticles = (state, { articles }) =>
  state.set('relatedPosts', fromJS(articles))

const setUserArticles = (state, { articles }) =>
  state.set('userPosts', fromJS(articles))

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_ARTICLE_CATEGORIES]: setArticleCategories,
  [Actions.SET_ARTICLES]: setArticles,
  [Actions.SET_CURRENT_ARTICLE]: setCurrentArticle,
  [Actions.SET_RELATED_ARTICLES]: setRelatedArticles,
  [Actions.SET_USER_ARTICLES]: setUserArticles
})

export default reducer
