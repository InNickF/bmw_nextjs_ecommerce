import { connect } from 'react-redux'
import queryString from 'query-string'

import {
  app as coreApp,
  product as coreProduct,
  user as coreUser,
  cart as coreCart,
} from '../../common/redux'


import { nextRouter, flattenCategories } from '../../common/helpers'

const { Router } = nextRouter
const cartActions = coreCart.actions

function buildUrl(pathname, query, addicional) {
  const paramsOrder = [
    'anio',
    'serie',
    'modelo',
    'c',
    'chassis',
    'order',
    'page'
  ]

  const params = queryString.stringify(
    {
      ...query,
      ...addicional
    },
    {
      sort: (m, n) => paramsOrder.indexOf(m) >= paramsOrder.indexOf(n)
    }
  )
  return `${pathname}?${params}`
}

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

function getMotivatorRecursive(categoryId = null, categories = []) {
  if (!categoryId || !categories.length) {
    return null
  }

  const category = categories.find(item => item.id === categoryId)

  if (!category) {
    return null
  }

  if (
    category &&
    Object.hasOwnProperty.call(category, 'isMotivator') &&
    category.isMotivator
  ) {
    return category
  }

  const parent = categories.find(item => item.id === category.parentId)

  if (!parent) {
    return null
  }

  return getMotivatorRecursive(parent.id, categories)
}

function getNestedCategories(categories) {
  return categoryId =>
    categories
      .filter(item => item.parentId === categoryId)
      .map(({ id, name, slug }) => ({
        id,
        name,
        slug
      }))
}

function mapStateToProps(store, props) {
  const productCategories = store
    .getIn(['product', 'productCategories'])
    .toJS()

  const products = store.getIn(['product', 'products'])
    ? store.getIn(['product', 'products']).toJS()
    : {}

  let categoryId = null
  if (props.query.parentId && parseInt(props.query.parentId)) {
    categoryId = parseInt(props.query.parentId)
  } else {
    categoryId = products[0] ? products[0].productCategoryId : null
  }

  const flatten = flattenCategories(productCategories)
  const motivator = getMotivatorRecursive(categoryId, flatten)

  const currentCategoryId = props.query.c
    ? (catId => {
      const found = flatten.find(
        item => item.slug === props.query.c && item.parentId === catId
      )
      return found ? found.id : catId
    })(categoryId)
    : categoryId

  const motivatorsItems = productCategories
    .map(({ id, name, slug, childrenCategories }) => ({
      id,
      name,
      slug,
      childrenCategories
    }))

  const { breadcrumbs, categoriesPath } = getBreadcrumbsRecursive(
    currentCategoryId,
    flatten,
    [],
    [currentCategoryId]
  )

  const productsStatus = store.getIn(['product', 'productsStatus']).toJS()

  const { currentPage, perPage, count } = productsStatus

  const paginationOptions = {
    prevPageText: 'Anterior',
    nextPageText: 'Siguiente',
    activePage: currentPage,
    itemsCountPerPage: 300,
    totalItemsCount: count,
    pageRangeDisplayed: 5,
    activeClass: 'active-page'
  }

  const { isPartLoadingSelector } = coreApp.selectors

  const isPartLoading = isPartLoadingSelector(store, 'productsList')
  const calcShow = productsStatus.perPage * (productsStatus.currentPage || 1)
  const showing = calcShow > productsStatus.count ? count : calcShow

  const currentCategoryData = flatten.find(c => c.id === currentCategoryId)
  const user = store.get('user').get('user')
  const compatibility = store.get('product').get('compatibility').toJS()
  return {
    currentCategoryData,
    categoriesPath,
    breadcrumbs,
    isPartLoading,
    paginationOptions,
    productCategories,
    compatibility,
    productsStatus: {
      ...productsStatus,
      showing
    },
    products,
    motivator,
    motivatorsItems,
    isLogged: !!(user && user.get('id')) || false,
    getNestedCategories: getNestedCategories(productCategories),
    showPagination: count > perPage
  }
}

function mapDispatchToProps(dispatch) {
  const { getProducts, setProducts, setCompatibility } = coreProduct.actions
  return {
    getProducts: query => dispatch(getProducts(query)),
    setProducts: (products) => dispatch(setProducts(products)),
    setCompatibility: (compatibility) => dispatch(setCompatibility(compatibility)),
    addProductToCart: (productId, quantity) =>
      dispatch(cartActions.cartEndpoint('ADD', null, productId, quantity)),
    addProductToCartLocal: (product, quantity) =>
      dispatch(cartActions.addProductToCartLocal(product, quantity)),
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    addProductToCart: (quantity, productObject) => {
      if (stateProps.isLogged) {
        return dispatchProps.addProductToCart(
          productObject.id,
          quantity
        )
      } else {
        productObject.productChildrenId = productObject.id;
        return dispatchProps.addProductToCartLocal(productObject, quantity)
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
