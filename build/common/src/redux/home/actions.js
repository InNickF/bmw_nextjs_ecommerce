import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getHomeData: null,
  setLastEvent: ['event'],
  setHomeCards: ['cards'],
  setHomeSlides: ['slides'],
  setHomeProducts: ['products'],
  setHomePost: ['post'],
  setCategoriesMotivator: ['categories']
})

export const Actions = Types
export default Creators
