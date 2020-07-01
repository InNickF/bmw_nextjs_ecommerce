import { request } from '../../../helpers'

export const endpoints = {
  latest: limit => {
    const filter = JSON.stringify({
      where: {
        active: true,
        brandId: process.env.BRAND_ID
      },
      order: 'startAt ASC',
      limit
    })

    return `/events?filter=${filter}`
  },
  events: (page = 1, queryText = '', perPage) => {
    const filter = {
      where: {
        active: true,
        brandId: process.env.BRAND_ID
      },
      order: 'startAt ASC',
      skip: (page - 1) * perPage,
      limit: perPage
    }

    if (queryText.length) {
      filter.where.name = {
        ilike: `%${queryText}%`
      }
    }

    return `/events?filter=${encodeURIComponent(JSON.stringify(filter))}`
  },
  count: queryText => {
    const filter = {
      where: {
        active: true,
        brandId: process.env.BRAND_ID
      }
    }
    if (queryText.length) {
      filter.where.name = {
        ilike: `%${queryText}%`
      }
    }
    return `/events/count?filter=${encodeURIComponent(JSON.stringify(filter))}`
  },
  bySlug: slug => {
    const filter = JSON.stringify({
      where: {
        slug,
        brandId: process.env.BRAND_ID
      },
      limit: 1
    })

    return `/events?filter=${filter}`
  },
  subscribe: '/event-assistants'
}

export default class {
  // Limit based on design
  static getLatestEvents (limit = 4) {
    return request.get(endpoints.latest(limit))
  }

  static countEvents (queryText) {
    return request.get(endpoints.count(queryText))
  }

  static getAllEvents (...args) {
    return request.get(endpoints.events(...args))
  }

  static getEventBySlug (slug) {
    return request.get(endpoints.bySlug(slug))
  }

  static subscribeToCurrentEvent (eventId, userId) {
    return request.post(endpoints.subscribe, { eventId, userId })
  }

  static unSubscribeToCurrentEvent (subscriptionId) {
    return request.delete(`${endpoints.subscribe}/${subscriptionId}`)
  }

  static checkEventSubscription (eventId, userId) {
    const filter = JSON.stringify({
      where: {
        eventId,
        brandId: process.env.BRAND_ID,
        userId
      },
      limit: 1
    })

    return request.get(`${endpoints.subscribe}?filter=${filter}`)
  }
}
