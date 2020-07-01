import { request } from '../../../helpers'

export const endpoints = {
  events: '/events',
  sliders: '/sliders',
  homecards: () => {
    const filter = JSON.stringify({
      where: {
        section: 'home',
        brandId: process.env.BRAND_ID
      }
    })

    return `/cards?filter=${filter}`
  }
}

export default class {
  static sendEmail (email) {
    return request.post(endpoints.emailSubscription, {
      email,
      brandId: process.env.BRAND_ID
    })
  }

  static fetchEvents () {
    const filter = JSON.stringify({
      where: { active: true, brandId: process.env.BRAND_ID }
    })
    return request.get(`${endpoints.events}?filter=${filter}`)
  }

  static fetchSlides () {
    const filter = JSON.stringify({
      where: { active: true, brandId: process.env.BRAND_ID }
    })
    return request.get(`${endpoints.sliders}?filter=${filter}`)
  }

  static getHomeCards () {
    return request.get(endpoints.homecards())
  }
}
