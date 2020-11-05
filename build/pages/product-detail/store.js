import { connect } from 'react-redux'

import {
  app as coreApp,
  product as coreProduct,
  cart as coreCart,
  user as coreUser
} from '../../common/redux'

import { flattenCategories, getBreadcrumbsRecursive } from '../../common/helpers'

const productActions = coreProduct.actions
const cartActions = coreCart.actions
const appActions = coreApp.actions
const userActions = coreUser.actions
const { isPartLoadingSelector } = coreApp.selectors

function mapStateToProps(store) {
  const user = store.get('user').get('user')
  const cart = store.get('cart').get('cart')
  const cartLocal = store.get('cart').get('cartLocal')
  const product = store.get('product')

  const productCategories = product.get('productCategories').toJS()
  const vehicles = product.get('currentProductVehicles').toJS()
  const currentProduct = product.get('currentProduct').toJS()
  const compatibilities = product.get('compatibilities')
  const currentRelationProducts = product.get('carouselRelationByProduct').toJS()
  const models = product.get('models').toJS()
  const selectedCar = store.get('product').get('compatibility').toJS()
  const products = store.get('product').get('products').toJS()
  const { breadcrumbs } = getBreadcrumbsRecursive(
    currentProduct.productCategoryId,
    flattenCategories(productCategories)
  )
  const compatibility = store.get('product').get('compatibility').toJS()

  return {
    cart,
    cartLocal,
    product: currentProduct,
    breadcrumbs,
    compatibility,
    selectedCar,
    related: [],
    isLogged: !!(user && user.get('id')) || false,
    user: user.toJS(),
    addWishlistLoading: isPartLoadingSelector(store, 'addToWishlistButton'),
    isCartLoading: isPartLoadingSelector(store, 'cart'),
    vehicles,
    currentRelationProducts,
    models,
    products,
    compatibilities
  }
}

function mapDispatchToProps(dispatch) {
  const { getProducts, setProducts, setCompatibility } = coreProduct.actions
  return {
    getProducts: query => dispatch(getProducts(query)),
    setProducts: (products) => dispatch(setProducts(products)),
    setCompatibility: (compatibility) => dispatch(setCompatibility(compatibility)),
    setCart: (items) => dispatch(cartActions.setCart({ items })),
    addReduxCart: () => dispatch(cartActions.cartEndpoint("ADD", null, 0, 0)),
    checkProductInWishlist: productId => () =>
      dispatch(productActions.checkProductInWishlist(productId)),
    toggleLogin: () => dispatch(appActions.setDialogState('login', true)),
    toggleChasis: () => dispatch(appActions.setDialogState('chasis', true)),
    toggleProductInWishlist: productId => () =>
      dispatch(productActions.toggleProductInWishlist(productId)),
    setTalla: (stock, image, sku, productChildrenId) =>
      dispatch(productActions.setTalla(stock, image, sku, productChildrenId)),
    addProductToCart: (productId, quantity) =>
      dispatch(cartActions.cartEndpoint('ADD', null, productId, quantity)),
    addProductToCartLocal: (product, quantity) =>
      dispatch(cartActions.addProductToCartLocal(product, quantity)),
    loadVehicles: (skuProduct, userId) =>
      dispatch(productActions.getVehiclesByProduct(skuProduct, userId)),
    ShowModelsCompatibility: (skuProduct) =>
      dispatch(productActions.getModelsCompability(skuProduct)),
    postVehicle: (chassis, userId, skuProduct) =>
      dispatch(userActions.postVehicle(chassis, userId, skuProduct)),
    loadCarouselRelation: (yearStart, yearEnd, serie, model) =>
      dispatch(
        productActions.getRelationCarouselByProduct(
          yearStart,
          yearEnd,
          serie,
          model
        )
      ),

    alertStock: () =>
      dispatch(
        appActions.showFeedback({
          feedbackTitle: '¡Ha superado el límite de stock del producto!'
        })
      ),
    alertColorSize: () =>
      dispatch(
        appActions.showFeedback({
          feedbackTitle: 'Por favor seleccione color y talla'
        })
      ),
    getColorVariations: sku => dispatch(productActions.getColorVariations(sku))
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...ownProps,
    ...dispatchProps,
    getColorVariations: () => dispatchProps.getColorVariations(stateProps.product.sku),
    toggleProductInWishlist: () => {
      // Alow add to wishlist if logged
      if (stateProps.isLogged) {
        return dispatchProps.toggleProductInWishlist(stateProps.product.id)()
      }
      // Show login dialog
      dispatchProps.toggleLogin()
    },
    toggleProductInWishlistProductId: (id) => {
      // Alow add to wishlist if logged
      if (stateProps.isLogged) {
        return dispatchProps.toggleProductInWishlist(id)()
      }
      // Show login dialog
      dispatchProps.toggleLogin()
    },
    checkProductInWishlist: dispatchProps.checkProductInWishlist(
      stateProps.product.id
    ),
    addProductToCart: (quantity, needSize, sizeSelected, productObject) => {
      if (stateProps.isLogged) {
        /* if (needSize && !sizeSelected.productChildrenId) {
          dispatchProps.alertColorSize()
          return
        } */
        return dispatchProps.addProductToCart(
          needSize && sizeSelected.productChildrenId ? sizeSelected.productChildrenId : stateProps.product.id,
          quantity
        )
      }

      // Show login dialog if not logged
      //dispatchProps.toggleLogin()

      //Saved products in localStorage
      if (needSize) {
        productObject.size = sizeSelected.size
        productObject.color = sizeSelected.color
        productObject.productChildrenId = sizeSelected.productChildrenId ? sizeSelected.productChildrenId : stateProps.product.id;
      } else {
        productObject.productChildrenId = stateProps.product.id;
      }

      return dispatchProps.addProductToCartLocal(productObject, quantity)
    },
    postVehicle: (chassis, userId, skuProduct) => {
      if (stateProps.isLogged) {
        return dispatchProps.postVehicle(chassis, userId, skuProduct)
      }
      // Show login dialog if not logged
      dispatchProps.toggleLogin()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
