import { takeLatest, call, put, select } from 'redux-saga/effects'
import { reset } from 'redux-form'
import appActions from '../app/actions'
import blogActions, { Actions } from './actions'

import BlogService from './service'

// Create new post
export function * postArticleSaga (action) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const feedbackData = {
      feedbackTitle: '¡Entrada enviada!',
      feedbackDescription: `Su entrada ha sido enviada, dentro de las próximas
        horas podrá verla publicada en nuestro blog.`
    }
    const userId = yield select(state => state.getIn(['user', 'user', 'id']))
    const article = {
      ...action.article,
      slug: '',
      userId
    }
    yield call(BlogService.createArticle, article)
    yield put(appActions.setDialogState('create-post', false))
    yield put(reset('postCreate'))
    yield put(appActions.showFeedback(feedbackData))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// Get posts by defined categories
export function * fetchBlogDataSaga () {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const [
      articlesCategories,
      lastArticles
    ] = yield Promise.all([
      BlogService.getCategories(),
      BlogService.getArticles(0, null)
    ])

    // categories dispatch
    yield put(blogActions.setArticleCategories(articlesCategories.data))

    // Posts dispatch
    yield put(blogActions.setArticles({
      lastArticles: lastArticles.data
    }))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// Get single post || By slug
function * getArticleSaga (action) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    // Get post
    const [articleResult, categoriesResult] = yield Promise.all([
      BlogService.getArticleBySlug(action.slug),
      BlogService.getCategories()

    ])
    const article = articleResult.data[0]

    // current article dispatch
    yield put(blogActions.setCurrentArticle(article))

    // categories dispatch
    yield put(blogActions.setArticleCategories(categoriesResult.data))

    // Related Post
    const relatedArticles = yield call(BlogService.getArticles, article.articleCategoryId)
    yield put(blogActions.setRelatedArticles(relatedArticles.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
}

// get user articles
function * getUserArticles (action) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const userId = yield select(state => state.getIn(['user', 'user', 'id']))
    const result = yield call(BlogService.getUserArticles, userId)

    yield put(blogActions.setUserArticles(result.data))
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
}

export default [
  takeLatest(Actions.GET_BLOG_DATA, fetchBlogDataSaga),
  takeLatest(Actions.CREATE_ARTICLE, postArticleSaga),
  takeLatest(Actions.GET_ARTICLE, getArticleSaga),
  takeLatest(Actions.GET_USER_ARTICLES, getUserArticles)
]
