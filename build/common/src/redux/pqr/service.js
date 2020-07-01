import { request } from '../../../helpers'

export const endpoints = {
  changeTypes: () => {
    const filter = JSON.stringify({
      where: {
        brandId: process.env.BRAND_ID
      }
    })
    return `/reason-types?filter=${filter}`
  },
  reasonTypes: () => {
    const filter = JSON.stringify({
      where: {
        brandId: process.env.BRAND_ID
      }
    })
    return `/reasons?filter=${filter}`
  },
  pqr: '/pqrs/createPqrs'
}

export default class {
  static newPQR(data) {
    return request.post(endpoints.pqr, {
      body: {
        brandId: process.env.BRAND_ID,
        ...data
      }
    })
  }
  static getChangeTypes() {
    return request.get(endpoints.changeTypes())
  }
  static getReasonTypes() {
    return request.get(endpoints.reasonTypes())
  }
}
