import { takeLatest, put, call, all, fork } from 'redux-saga/effects'
import homeActions, { Actions } from './actions'
import appActions from '../app/actions'
import productActions from '../product/actions'

import HomeService from '../home/service'
import BlogService from '../blog/service'
import ProductService from '../product/service'
import EventsService from '../events/service'

import { getProductsByCategory } from '../product/sagas'

export function* fetchHomeData() {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const resultMotivators = yield call(ProductService.getMotivators)
    const eventsLimit = 1
    const postLimit = 3
    const postCategoryId = 0

    const [slides, lastEvent, cards, lastPost, featuredProducts] = yield all([
      call(HomeService.fetchSlides),
      call(EventsService.getLatestEvents, eventsLimit),
      call(HomeService.getHomeCards),
      call(BlogService.getArticles, postCategoryId, postLimit),
      call(ProductService.getFeaturedProducts)
    ])

    yield put(homeActions.setLastEvent(lastEvent.data[0]))
    yield put(homeActions.setHomeCards(cards.data))
    yield put(homeActions.setHomeSlides(slides.data))
    yield put(homeActions.setHomePost(lastPost.data))
    yield put(homeActions.setCategoriesMotivator(resultMotivators.data))
    yield put(
      productActions.setProductsInPart(
        featuredProducts.data,
        'featuredProducts'
      )
    )
    yield call(getProductsByCategory, {
      inAppPart: 'categoriesHome',
      categoryId: resultMotivators.data && resultMotivators.data[0] ? resultMotivators.data[0].slug : '',
      level: 1
    })
  } catch (e) {
    yield put(appActions.setError(e.message))
  }
  /* yield put(appActions.setAppLoading(false)) */
}

export default [takeLatest(Actions.GET_HOME_DATA, fetchHomeData)]
