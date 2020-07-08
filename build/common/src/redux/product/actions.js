import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getProduct: ['slug'],
  setCurrentProduct: ['product'],
  checkProductInWishlist: ['productId'],
  toggleProductInWishlist: ['productId'],
  toggleProductInWishlists: ['productIds'],
  getProductsByCategory: ['categoryId', 'inAppPart', 'level', 'parentId', 'skus'],
  setProductsInPart: ['products', 'inAppPart'],
  setCurrentProductInWishlist: ['inWishlist'],
  setProductCategories: ['categories'],
  setCurrentCategory: ['category'],
  getProductCategories: null,
  getProducts: ['query'],
  getProductsByChassis: ['chassis'],
  setProducts: ['products'],
  productsWantread: ['products'],
  setModels: ['models'],
  setSeries: ['series'],
  setYears: ['years'],
  setCompatibility: ['compatibility'],
  setProductsStatus: ['status'],
  setProductsCount: ['count'],
  setProductsPage: ['page'],
  getSeriesAndModels: null,
  getVehiclesByProduct: ['skuProduct', 'userId'],
  setVehiclesByProduct: ['vehicles'],
  getModelsCompability: ['sku'],
  setModelsCompability: ['models'],
  setCompatibilityVehicle: ['vehicle'],
  getRelationCarouselByProduct: ['yearStart', 'yearEnd', 'serie', 'model'],
  setRelationCarouselByProduct: ['products'],
  redirectToDetailById: ['productId'],
  getSeries: null,
  getModels: ['vehicleSerieId'],
  getColorVariations: ['sku'],
  setTalla: ['stock', 'image', 'sku', 'productChildrenId'],

  setAddWishlistSuccess: ['state']
})

export const Actions = Types
export default Creators
