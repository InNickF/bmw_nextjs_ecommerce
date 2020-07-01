import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getBlogData: null,
  createArticle: ['article'],
  setArticleCategories: ['categories'],
  setArticles: ['articles'],
  setCurrentArticle: ['article'],
  setRelatedArticles: ['articles'],
  getArticle: ['slug'],
  getUserArticles: null,
  setUserArticles: ['articles']
})

export const Actions = Types
export default Creators
