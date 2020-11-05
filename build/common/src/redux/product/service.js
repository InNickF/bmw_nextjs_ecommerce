import { request } from '../../../helpers'


export const endpoints = {
  products: '/products',
  skuVariations: '/sku-variations',
  countProducts: '/products/count',
  productCategories: '/product-categories',
  productsByCategory: `/product-categories/productFilter`,
  series: '/vehicle-series',
  models: '/vehicle-models',
  productsByChassis: '/vehicles/autogermana/getReferencesForChassis',
  vehicles: '/vehicles',
  compatibility: '/products/autogermana/compatibility',
  availability: '/products/vehicle-availability',
  productVariations: 'product-variations',
  colorVariations: '/products/color-variations',
  modelsCompatibility: '/products/modelCompatibility',
  compatibilities: '/product-variations'
}

export default class {
  static getProductBySlug(slug) {
    const filter = JSON.stringify({
      where: { slug },
      include: ['imageProducts', 'attributevalues', 'complements', "skuVariations", "productVariations", "productCategory",
        {
          relation: "relatedProducts",
          scope: {
            include: [
              {
                relation: "relatedProduct",
                scope: {
                  include: {
                    relation: "imageProducts"
                  }
                }
              }
            ]
          }
        }
      ]
    })
    return request.get(`${endpoints.products}?filter=${filter}`)
  }

  static getAllCompatibilities(productId) {
    const filter = JSON.stringify({
      where: { productId },
      include: ['vehicleModel', 'vehicleSerie', 'vehicleBodyWork']
    })
    return request.get(`${endpoints.compatibilities}?filter=${filter}`)
  }

  static getProductByFather(id) {
    const filter = JSON.stringify({
      where: { productChildrenId: id },
      include: [
        {
          relation: "product",
          scope: {
            include: [
              "imageProducts",
              "attributevalues",
              "complements",
              "skuVariations",
              "productVariations",
            ]
          }
        }
      ]
    })
    return request.get(`${endpoints.skuVariations}?filter=${filter}`)
  }
  static getProductById(id) {
    return request.get(`${endpoints.products}/${id}`)
  }

  static getModelsCompatibility(sku) {
    const data = {
      data: {
        sku
      }
    }
    return request.post(`${endpoints.modelsCompatibility}/${sku}`, data)
  }

  static getProductsByCategory(
    slugCategory,
    level,
    skus,
    page = 1,
    limit = 30,
    order = 'createdAt ASC',
    parentId = null,
    offer
  ) {
    const data = {
      data: {
        brandId: process.env.BRAND_ID,
        slug: slugCategory,
        parentId,
        level,
        limit,
        isFather: true,
        skip: page,
        order: order,
        skus: skus,
        offer
      }
    }
    return request.post(endpoints.productsByCategory, data)
  }


  // static getProductsByQueryString ({ queryString, order }) {
  //   const filter = {
  //     where: {
  //       active: true,
  //       brandId: process.env.BRAND_ID,
  //       name: {
  //         ilike: `%${queryString}%`
  //       }
  //     },
  //     include: ['imageProducts']
  //   }

  //   const finalFilter = encodeURIComponent(JSON.stringify(filter))
  //   return request.get(`${endpoints.products}?filter=${finalFilter}`)
  // }

  static getProducts(filter) {
    let newFilter = {
      ...filter
    }
    newFilter.where.brandId = process.env.BRAND_ID
    newFilter.where.isFather = true
    const finalFilter = encodeURIComponent(
      JSON.stringify({
        ...newFilter,
        include: ['imageProducts', 'productCategory', "skuVariations", "productVariations",]
      })
    )

    return request.get(`${endpoints.products}?filter=${finalFilter}`)
  }

  static countProducts(filter) {
    const finalFilter = encodeURIComponent(
      JSON.stringify({ ...filter, brandId: process.env.BRAND_ID, isFather: true })
    )
    return request.get(`${endpoints.countProducts}?where=${finalFilter}`)
  }

  static getProductsByChassis(chassis, skip = 1, limit = 100) {
    const filter = JSON.stringify({
      brandId: process.env.BRAND_ID,
      chassis: true,
      id: chassis,
      isFather: true,
      skip,
      limit
    })

    return request.get(`${endpoints.productsByChassis}?body=${filter}`)
  }

  static productVariationsCount(filter) {
    return request.get(`${endpoints.productVariations}/count?where=${JSON.stringify(filter)}`)
  }

  static productVariations(filter) {
    return request.get(`${endpoints.productVariations}?filter=${JSON.stringify(filter)}`)
  }

  static createVehicleToUserByChassis(userId, chassis) {
    const filter = JSON.stringify({
      brandId: process.env.BRAND_ID,
      chassis: true,
      id: chassis,
      userId
    })

    return request.get(`${endpoints.productsByChassis}?body=${filter}`)
  }

  static getProductCategories() {
    return request.get(`${endpoints.productCategories}/${process.env.BRAND_ID}/get-categories`)
  }

  static getFeaturedProducts() {
    const filter = JSON.stringify({
      where: {
        highlight: true,
        brandId: process.env.BRAND_ID,
        stock: { gt: 0 },
        active: true
      },
      include: ['imageProducts', 'productCategory', "skuVariations"]
    })
    return request.get(`${endpoints.products}?filter=${filter}`)
  }

  static getMotivators() {
    const filter = JSON.stringify({
      where: {
        metaTitle: 't',
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.productCategories}?filter=${filter}`)
  }

  static getSeries() {
    const filter = JSON.stringify({
      order: 'name ASC',
      where: {
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.series}?filter=${filter}`)
  }

  static getModels(vehicleSerieId) {
    const filter = JSON.stringify({
      order: 'name ASC',
      where: {
        brandId: process.env.BRAND_ID,
        vehicleSerieId
      }
    })
    return request.get(`${endpoints.models}?filter=${filter}`)
  }

  static getVehicles(userId) {
    const filter = JSON.stringify({
      where: {
        userId,
        brandId: process.env.BRAND_ID
      },
      fields: ['id', 'vehicleBrandId', 'vehicleSerieId', 'vehicleModelId', 'lineId', 'chassis'],
      include: [
        {
          relation: 'vehicleBrand',
          scope: {
            fields: ['id', 'name', 'code']
          }
        },
        {
          relation: 'vehicleSerie',
          scope: {
            fields: ['id', 'name']
          }
        },
        {
          relation: 'vehicleModel',
          scope: {
            fields: ['id', 'name']
          }
        }
      ]
    })
    return request.get(`${endpoints.vehicles}?filter=${filter}`)
  }

  static getCompatibilityVehicleWithProduct(sku, chassis) {
    const data = {
      body: {
        sku,
        chassis,
        brandId: process.env.BRAND_ID
      }
    }

    return request.post(endpoints.compatibility, data)
  }

  static getColorVariations(sku) {
    const data = {
      sku,
      brandId: process.env.BRAND_ID
    }

    return request.post(endpoints.colorVariations, data)
  }

  static availability(sku) {
    const data = {
      sku,
      brandId: process.env.BRAND_ID
    }

    return request.post(endpoints.availability, data)
  }
}
