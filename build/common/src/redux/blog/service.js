import { request } from '../../../helpers'

export const endpoints = {
  articlesCategories: '/article-categories',
  articles: '/articles',
  userArticles: userId => {
    const filter = JSON.stringify({
      where: {
        userId,
        brandId: process.env.BRAND_ID
      },
      order: 'createdAt DESC'
    })
    return `/articles?filter=${filter}`
  }
}

export default class {
  static createArticle (article) {
    return request.post(endpoints.articles, {
      ...article,
      brandId: process.env.BRAND_ID
    })
  }

  static getArticles (articleCategoryId, limit = null) {
    const filter = {
      where: {
        active: 1,
        brandId: process.env.BRAND_ID
      },
      order: 'createdAt DESC'
    }
    if (articleCategoryId !== 0) {
      filter.where.articleCategoryId = articleCategoryId
    }

    if (limit !== null) {
      filter.limit = limit
    }
    return request.get(
      `${endpoints.articles}?filter=${JSON.stringify(filter)}`
    )
  }

  static getArticleBySlug (slug) {
    const filter = JSON.stringify({
      where: {
        slug,
        brandId: process.env.BRAND_ID,
        active: 1
      }
    })
    return request.get(`${endpoints.articles}?filter=${filter}`)
  }

  static getCategories () {
    return request.get(
      `${endpoints.articlesCategories}?filter=${JSON.stringify({
        where: {
          brandId: process.env.BRAND_ID
        }
      })}`
    )
  }

  static getUserArticles (userId) {
    return request.get(endpoints.userArticles(userId))
  }
}
