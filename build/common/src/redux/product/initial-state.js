import { fromJS } from 'immutable'

const today = new Date()
const fromYear = 1970
const toYear = today.getFullYear()
const years = Array(toYear - fromYear + 1)
  .fill()
  .map(
    (_, index) => fromYear + index
  )
  .reverse()

const LIFESTYLE = 'lifestyle'
const ACCESORIES = 'accesorios-para-carros'

const INITIAL_STATE = fromJS({
  productsStatus: {
    currentPage: 1,
    count: 0,
    perPage: 30
  },
  products: [],
  productsWantread: [],
  backUrlProducts: '',
  currentProduct: {},
  currentProductVehicles: {},
  models: [],
  compatibility: {},
  carouselRelationByProduct: [],
  currentCategory: {},
  productCategories: [],
  productsInAppPart: {},
  modelFilter: {
    yearStart: fromYear,
    years,
    series: [],
    models: []
  },
  defaultCategories: {
    lifestyle: LIFESTYLE,
    accesories: ACCESORIES
  },
  addWishlistSuccess: false
})

export default INITIAL_STATE
