import { request } from '../../../helpers'

export const endpoints = {
  orders: '/orders',
  removeDetail: orderDetailId => `/order-details/${orderDetailId}`,
  orderDetails: '/order-details',
  orderStatus: '/order-statuses',
  details: orderId => {
    const filter = JSON.stringify({
      where: {
        orderId,
        brandId: process.env.BRAND_ID
      },
      order: ['createdAt DESC']
    })
    return `/order-details?filter=${filter}`
  },
  'order:current': (userId, createStatus) => {
    const filter = JSON.stringify({
      where: {
        userId,
        orderStatusId: createStatus,
        brandId: process.env.BRAND_ID
      },
      order: ['createdAt DESC'],
      limit: 1
    })
    return `/orders?filter=${filter}`
  },
  beginPayment: '/payments/inicioPago',
  shippingValue: '/deliveries/consultar-liquidacion',
  getOrderConfirmation: orderId => {
    const filter = JSON.stringify({
      where: {
        id: orderId,
        brandId: process.env.BRAND_ID
      },
      include: [
        {
          relation: 'address',
          scope: {
            fields: ['id', 'value', 'cityId'],
            include: {
              relation: 'city',
              scope: {
                fields: ['id', 'name']
              }
            }
          }
        },
        {
          relation: 'orderDetails',
          scope: {
            include: {
              relation: 'instalation'
            }
          }
        }
      ]
    })
    return `/orders?filter=${filter}`
  },
  coupons: '/code-coupons',
  returns: 'returns/start-return',
  pqr: '/pqrs',
  cartEndpoint: '/orders/cart',
  itemsAvailability: '/products/items-availability',
  reasonType: '/reasons',
  signupInvited: 'my-users/createUser'
}

export default class {
  static signupInvited(payload) {
    return request.post(endpoints.signupInvited, payload)
  }

  static createOrder(userId, brandId) {
    return request.post(endpoints.orders, { userId, brandId })
  }

  static updateOrder(orderId, data) {
    return request.patch(`${endpoints.orders}/${orderId}`, {
      ...data
    })
  }

  static updateOrderDetail(detailId, data) {
    return request.put(`${endpoints.orderDetails}/${detailId}`, { ...data })
  }

  static getCoupon(coupon) {
    const filter = JSON.stringify({
      where: { code: coupon, brandId: process.env.BRAND_ID }
    })
    return request.get(`${endpoints.coupons}?filter=${filter}`)
  }

  static postCoupon(coupon, orderId) {
    return request.post(`${endpoints.orders}/discount`, { body: { code: coupon, orderId: orderId } })
  }

  static beginPayment(orderId) {
    const data = {
      body: {
        orderId,
        brandId: process.env.BRAND_ID
      }
    }
    return request.post(endpoints.beginPayment, data)
  }

  static addToCart(details) {
    return request.post(endpoints.orderDetails, {
      ...details,
      brandId: process.env.BRAND_ID
    })
  }

  static updateProductToCart(data, detailId) {
    return request.patch(`${endpoints.orderDetails}/${detailId}`, data)
  }

  static checkIfOrderExists(userId, createStatus) {
    return request.get(endpoints['order:current'](userId, createStatus))
  }

  static getOrderDetails(orderId) {
    return request.get(endpoints.details(orderId))
  }

  static getOrderStatus() {
    return request.get(
      endpoints.orderStatus +
      '?filter=' +
      JSON.stringify({
        where: {
          brandId: process.env.BRAND_ID
        }
      })
    )
  }

  static shippingValue(orderId) {
    return request.post(endpoints.shippingValue, {
      body: {
        orderId
      }
    })
  }

  static removeFromCart(orderDetailId) {
    return request.delete(endpoints.removeDetail(orderDetailId))
  }

  static getConfirmationOrder(orderId) {
    return request.get(endpoints.getOrderConfirmation(orderId))
  }

  static returnStart(data) {
    return request.post(endpoints.returns, {
      ...data
    })
  }

  static newPQR(data) {
    return request.post(endpoints.pqr, {
      ...data
    })
  }

  static cartEndpoint(data) {
    return request.post(endpoints.cartEndpoint, { ...data, brandId: process.env.BRAND_ID })
  }

  static getOrderDetailsWithFilter(filter) {
    return request.get(endpoints.detailsFilter(filter))
  }

  static getOrders(filter) {
    return request.get(
      `${endpoints.orders}?filter=${encodeURIComponent(
        JSON.stringify({
          ...filter,
          brandId: process.env.BRAND_ID
        })
      )}`
    )
  }

  static getReasonType() {
    const filter = JSON.stringify({
      where: { brandId: process.env.BRAND_ID }
    })
    return request.get(`${endpoints.reasonType}?filter=${filter}`)
  }

  static itemsAvailability(orderId) {
    return request.get(`${endpoints.itemsAvailability}?orderId=${orderId}`)
  }
}
