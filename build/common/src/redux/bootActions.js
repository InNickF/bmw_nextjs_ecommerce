import productActions from './product/actions'
import appActions from './app/actions'

export const actionsOnSSR = store => {
  let state = store.getState()
  if (!state.toJS().product.productCategories.length > 0) {
    store.dispatch(productActions.getProductCategories())
  }
  /* store.dispatch(appActions.getAdvertisements()) */
}
