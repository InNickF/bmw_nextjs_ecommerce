import { fromJS, Map as map } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Actions } from './actions'
import INITIAL_STATE from './initial-state'

const setLastEvent = (state = INITIAL_STATE, { event }) =>
  state
    .set(
      'lastEvent',
      map(event)
    )

const setHomeSlides = (state = INITIAL_STATE, { slides }) =>
  state
    .set(
      'headerSlides',
      fromJS(slides)
    )

const setHomePost = (state = INITIAL_STATE, { post }) =>
  state.set('homePost', fromJS(post))

const setHomeCards = (state = INITIAL_STATE, { cards }) =>
  state.set(
    'cards',
    fromJS(cards)
  )

const setCategoriesMotivator = (state = INITIAL_STATE, { categories }) =>{
  return state.set('categoriesMotivator', fromJS(categories))
}

const reducer = createReducer(INITIAL_STATE, {
  [Actions.SET_LAST_EVENT]: setLastEvent,
  [Actions.SET_HOME_CARDS]: setHomeCards,
  [Actions.SET_HOME_SLIDES]: setHomeSlides,
  [Actions.SET_HOME_POST]: setHomePost,
  [Actions.SET_CATEGORIES_MOTIVATOR]: setCategoriesMotivator
})

export default reducer
