import { compose, withState } from 'recompose'
import { connect } from 'react-redux'

import { app as coreApp, user as coreUser, product as coreProduct } from '../../redux'

import { flattenCategories } from '../../helpers'
import { Router } from '../../routes/bmw'
import { submit } from 'redux-form'
/* const { Router } = nextRouter */

const appActions = coreApp.actions
const appSelectors = coreApp.selectors


function getBreadcrumbsRecursive(
  categoryId,
  categories = [],
  accumulator = [],
  categoriesPath = []
) {
  if (!categoryId || !categories.length) {
    return { breadcrumbs: [...accumulator], categoriesPath }
  }

  const category = categories.find(item => item.id === categoryId)

  if (!category) {
    return {
      breadcrumbs: [...accumulator]
        .sort((a, b) => a.parentId - b.parentId)
        .reduce(
          (list, { id, name, slug, level, parentId }) => [
            ...list,
            {
              key: id,
              label: name,
              route: `/productos?c=${slug}&level=${level}${
                parentId === 0 ? '' : `&parentId=${parentId}`
                }`,
              params: {
                c: slug
              }
            }
          ],
          []
        ),
      categoriesPath: categoriesPath.concat(categoryId)
    }
  }

  const parent = categories.find(item => item.id === category.parentId)

  if (category.isMotivator || parent.id === categoryId) {
    return {
      breadcrumbs: [...accumulator, category]
        .sort((a, b) => a.parentId - b.parentId)
        .reduce(
          (list, { id, name, slug, level, parentId }) => [
            ...list,
            {
              key: id,
              label: name,
              route: `/productos?c=${slug}&level=${level}${
                parentId === 0 ? '' : `&parentId=${parentId}`
                }`,
              params: {
                c: slug
              }
            }
          ],
          []
        ),
      categoriesPath: categoriesPath.concat(categoryId)
    }
  }

  return getBreadcrumbsRecursive(
    parent.id,
    categories,
    [...accumulator, category],
    categoriesPath.concat(category.id)
  )
}


function toggleMenu(dispatch, value) {
  return dispatch(appActions.setElementShowing('mobileMenu', value))
}

function hideCartPreview() {
  return appActions.showCartPreview(false, {})
}

function mapStateToProps(store) {
  const allCategories = store.getIn(['product', 'productCategories']).toJS()
  
  const user = store
    .get('user')
    .get('user')
    .toJS()

  const products = store.getIn(['product', 'products'])
    ? store.getIn(['product', 'products']).toJS()
    : {}

  const isMobileMenuActived = store.getIn([
    'app',
    'isElementShowing',
    'mobileMenu'
  ])

  const cart = store.get('cart').get('cart')
  const cartLocal = Array.isArray(store.get('cart').get('cartLocal'))? store.get('cart').get('cartLocal'): undefined

  const flattenCats = flattenCategories(allCategories)

  const productCategories = store
    .getIn(['product', 'productCategories'])
    .toJS()

  let categoryId = null

  categoryId = products[0] ? products[0].productCategoryId : null

  const flatten = flattenCategories(productCategories)

  const currentCategoryId = categoryId

  const { breadcrumbs, categoriesPath } = getBreadcrumbsRecursive(
    currentCategoryId,
    flatten,
    [],
    [currentCategoryId]
  )
  return {
    isCartLoading: appSelectors.isPartLoadingSelector(store, 'currentCart'),
    isUserLoading: appSelectors.isPartLoadingSelector(store, 'register'),
    cartPreviewShowing: store.get('app').get('cartPreviewShowing').toJS(),
    isMobileMenuActived,
    allCategories,
    products,
    breadcrumbs,
    flattenCategories: flattenCats,
    user,
    cart,
    cartLocal,
    cartQty: Object.hasOwnProperty.call(cart, 'productsNumber')
      ? cart.productsNumber
      : 0
  }
}

function mapDispatchToProps(dispatch) {
  const RemoteSubmitButton =
    <button
      type="button"
      onClick={() => dispatch(submit('remoteSubmit'))}
    > Ver más </button>

  const { getProducts } = coreProduct.actions
  return {
    onSearch(query) {
      Router.pushRoute('products',
        {
          q: query
        })
    },
    RemoteSubmitButton: RemoteSubmitButton,
    getProducts: query => dispatch(getProducts(query)),
    toggleLogin: () => dispatch(appActions.setDialogState('login', true)),
    hideCartPreview: () => dispatch(appActions.showCartPreview(false, {})),
    onMobileMenuButtonTap: (value) => toggleMenu(dispatch, value),
    closeMobileMenu: () => toggleMenu(dispatch, false),
    toggleMobileMenu: val => toggleMenu(dispatch, val),
    logout: () => dispatch(coreUser.actions.requestLogout())
  }
}




const enhance = compose(
  withState('isSearchMobileVisible', 'toggleSearch', false),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance
