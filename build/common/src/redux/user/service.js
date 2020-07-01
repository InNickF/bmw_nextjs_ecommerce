import { request } from '../../../helpers'

import { dateHelpers } from '../../helpers'

export const endpoints = {
  login: '/my-users/login',
  userData: '/profiles',
  me: '/my-users/me',
  logout: '/my-users/logout',
  wishlist: '/wish-lists',
  myUser: '/my-users',
  addresses: '/addresses',
  vehicles: '/vehicles',
  orders: '/orders',
  suscriptions: '/suscriptions'
}

export default class {
  static register (userdata) {
    return request.post(`${endpoints.myUser}/createUser`, {
      ...userdata,
      brandId: process.env.BRAND_ID
    })
  }

  static login (email, password) {
    return request.post(endpoints.login, {
      email,
      password
    })
  }

  static logout () {
    return request.post(endpoints.logout)
  }

  static validateUser (email, provider) {
    return request.post(`${endpoints.myUser}/validateUser`, {
      email,
      provider,
      brandId: process.env.BRAND_ID
    })
  }

  static getUserData (userId) {
    const filter = JSON.stringify({
      where: {
        userId,
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.userData}?filter=${filter}`)
  }

  static getUserByEmail (email) {
    const filter = JSON.stringify({
      where: {
        email,
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.myUser}?filter=${filter}`)
  }

  static getProfileMe (userId) {
    return request.post(endpoints.me, { body: { id: userId } })
  }

  static getProfileUid (uidAuth) {
    const filter = JSON.stringify({
      where: {
        uidAuth,
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.myUser}?filter=${filter}`)
  }

  static saveUserData (data) {
    return request.post(`${endpoints.myUser}/updateUser`, {
      ...data,
      brandId: process.env.BRAND_ID
    })
  }

  static getWishlist (userId) {
    const filter = JSON.stringify({
      where: {
        userId,
        brandId: process.env.BRAND_ID
      },
      include: [
        {
          product: 'imageProducts'
        }
      ],
      order: ['createdAt DESC']
    })
    return request.get(`${endpoints.wishlist}?filter=${filter}`)
  }

  static addToWishlist (productId, userId) {
    return request.post(endpoints.wishlist, {
      productId,
      userId,
      brandId: process.env.BRAND_ID
    })
  }

  static removeFromWishlist (id) {
    return request.delete(`${endpoints.wishlist}/${id}`)
  }

  static checkIfInWishlist (productId, userId) {
    const filter = JSON.stringify({
      where: {
        productId,
        userId,
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.wishlist}?filter=${filter}`)
  }
  static getUserAddresses (userId) {
    const filter = JSON.stringify({
      where: {
        userId,
        brandId: process.env.BRAND_ID
      },
      include: 'city'
    })
    return request.get(`${endpoints.addresses}?filter=${filter}`)
  }
  static createAddress (data) {
    return request.post(endpoints.addresses, {
      ...data,
      brandId: process.env.BRAND_ID
    })
  }

  static getVehicles (userId) {
    const filter = JSON.stringify({
      where: {
        userId: userId,
        brandId: process.env.BRAND_ID
      },
      fields: ['id', 'vehicleBrandId', 'vehicleSerieId', 'vehicleModelId', 'lineId', 'chassis', 'model'],
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

  static postVehicle (chassis, userId) {
    const filter = {
      body: {
        brandId: process.env.BRAND_ID,
        chassis,
        userId,
        created: true
      }
    }
    return request.post(
      `${endpoints.vehicles}/autogermana/createdVehicle`,
      filter
    )
  }

  static verifyUserVehicle (chassis) {
    const filter = JSON.stringify({
      chassis,
      brandId: process.env.BRAND_ID
    })

    return request.get(`${endpoints.vehicles}/count?where=${filter}`)
  }

  static deleteVehicle (vehicleId) {
    return request.delete(`${endpoints.vehicles}/${vehicleId}`)
  }

  static getInProgressOrders (userId, statuses) {
    const filter = JSON.stringify({
      where: {
        orderStatusId: { inq: statuses },
        userId,
        brandId: process.env.BRAND_ID
      },
      include: ['orderDetails'],
      order: ['id DESC']
    })

    return request.get(
      `${endpoints.orders}?filter=${encodeURIComponent(filter)}`
    )
  }

  static getHistoryOrders (userId, month, year) {
    const filter = {
      where: {
        userId,
        brandId: process.env.BRAND_ID,
        orderStatusId: 9
      },
      include: ['orderDetails'],
      order: ['id DESC']
    }

    if (month && year) {
      filter.where.updatedAt = {
        between: [
          dateHelpers.getDate(`${month}/01/${year}`),
          dateHelpers.getLastDayOfMonth(month, year)
        ]
      }
    }

    return request.get(`${endpoints.orders}?filter=${JSON.stringify(filter)}`)
  }

  static createSuscription(email) {
    return request.post(endpoints.suscriptions, {
      email,
      brandId: process.env.BRAND_ID,
      state: true
    })
  }
}
