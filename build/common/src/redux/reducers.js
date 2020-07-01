import { reducer as formReducer } from 'redux-form/immutable'
import app from './app/reducer'
import user from './user/reducer'
import pqr from './pqr/reducer'
import home from './home/reducer'
import product from './product/reducer'
import blog from './blog/reducer'
import cart from './cart/reducer'
import events from './events/reducer'

export default {
  app,
  user,
  home,
  product,
  blog,
  pqr,
  cart,
  events,
  form: formReducer
}
