import { fromJS, Map as map } from 'immutable'
import { createReducer } from 'reduxsauce'
import { Actions } from './actions'

import INITIAL_STATE from './initial-state'

const setCurrentProduct = (state, { product }) =>
  state.set('currentProduct', fromJS(product))

const setProductsStatus = (state, { status }) =>
  state.set('productsStatus', fromJS(status))

const setProductsCount = (state, { count }) =>
  state.setIn(['productsStatus', 'count'], count)

const setProductsPage = (state, { page }) =>
  state.setIn(['productsStatus', 'currentPage'], page)

const setAddWishlistSuccess = (_state, { state }) =>
  _state.setIn(['addWishlistSuccess'], state)

const setCurrentProductInWishlist = (state, { inWishlist }) =>
  state.setIn(['currentProduct', 'inWishlist'], inWishlist)


const setProductCategories = (state, { categories }) =>
  state.set('productCategories', fromJS(categories.filter(item => !(!item.isMotivator && !item.parentId))))

const setCurrentCategory = (state, { category }) => {
  const newCategory = category
  delete newCategory.categories
  return state.set('currentCategory', map(newCategory))
}

const setProductsInPart = (state, { products, inAppPart }) =>
  state.setIn(['productsInAppPart', inAppPart], fromJS(products))

const setProducts = (state, { products }) => state.set('products', fromJS(products))

const setProductsWantread = (state, { products }) =>
  state.set('productsWantread', fromJS(products))

const setSeries = (state, { series }) =>
  state.setIn(['modelFilter', 'series'], fromJS(series))

const setModels = (state, { models }) =>
  state.setIn(['modelFilter', 'models'], fromJS(models))


const setCompatibility = (state, { compatibility }) =>
  state.setIn(['compatibility'], fromJS(compatibility))

const setVehicles = (state, { vehicles }) =>
  state.set('currentProductVehicles', fromJS(vehicles))

const setCompatibilityVehicle = (state, { vehicle }) =>
  state.setIn(
    ['currentProductVehicles', vehicle.pos, 'compatibility'],
    vehicle.compatibility
  )

const setModelsCompability = (state, { models }) =>
  state.set('models', fromJS(models))

const setRelationCarouselByProduct = (state, { products }) =>
  state.set('carouselRelationByProduct', fromJS(products))

const setTalla = (state, { stock, image, sku, productChildrenId }) => {
  const newObj = state.get('currentProduct').toJS()

  newObj.stock = stock
  newObj.sku = sku
  newObj.id = productChildrenId;
  if (image) {
    newObj.imageProducts = image || []
  }
  return state.set('currentProduct', fromJS(newObj))
}

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_CURRENT_PRODUCT]: setCurrentProduct,
  [Actions.SET_CURRENT_PRODUCT_IN_WISHLIST]: setCurrentProductInWishlist,
  [Actions.SET_PRODUCT_CATEGORIES]: setProductCategories,
  [Actions.SET_CURRENT_CATEGORY]: setCurrentCategory,
  [Actions.SET_PRODUCTS_IN_PART]: setProductsInPart,
  [Actions.SET_PRODUCTS]: setProducts,
  [Actions.SET_SERIES]: setSeries,
  [Actions.SET_COMPATIBILITY]: setCompatibility,
  [Actions.SET_MODELS_COMPABILITY]: setModelsCompability,
  [Actions.SET_MODELS]: setModels,
  [Actions.SET_PRODUCTS_STATUS]: setProductsStatus,
  [Actions.SET_PRODUCTS_COUNT]: setProductsCount,
  [Actions.SET_PRODUCTS_PAGE]: setProductsPage,
  [Actions.SET_VEHICLES_BY_PRODUCT]: setVehicles,
  [Actions.SET_COMPATIBILITY_VEHICLE]: setCompatibilityVehicle,
  [Actions.SET_RELATION_CAROUSEL_BY_PRODUCT]: setRelationCarouselByProduct,
  [Actions.SET_TALLA]: setTalla,
  [Actions.SET_ADD_WISHLIST_SUCCESS]: setAddWishlistSuccess
})

export default reducer
