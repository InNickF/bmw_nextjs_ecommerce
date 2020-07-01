import { request } from '../../../helpers'

export const endpoints = {
  states: '/states',
  cities: '/cities',
  emailSubscription: '/suscriptions',
  advertisements: '/advertisements'
}

export default class {
  static sendEmail (email) {
    return request.post(endpoints.emailSubscription, {
      email,
      brandId: process.env.BRAND_ID
    })
  }

  static getAdvertisements () {
    return request.get(
      endpoints.advertisements +
        '?filter=' +
        JSON.stringify({
          where: { brandId: process.env.BRAND_ID, active: true }
        })
    )
  }
  static getStates () {
    const filter = JSON.stringify({
      order: ['name ASC'],
      where: {
        brandId: process.env.BRAND_ID
      }
    })
    return request.get(`${endpoints.states}?filter=${filter}`)
  }
  static getCities (stateId) {
    const filter = JSON.stringify({
      where: {
        stateId,
        brandId: process.env.BRAND_ID
      },
      order: ['name ASC']
    })

    return request.get(`${endpoints.cities}?filter=${filter}`)
  }
  static getCityByWord (str) {
    const filter = JSON.stringify({
      where: {
        name: {
          ilike: `%${str}%`
        },
        brandId: process.env.BRAND_ID
      },
      order: ['name ASC'],
      limit: 20
    })

    return request.get(`${endpoints.cities}?filter=${encodeURIComponent(filter)}`)
  }
}
