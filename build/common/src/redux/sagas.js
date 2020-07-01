import appSagas from './app/sagas'
import homeSagas from './home/sagas'
import userSagas from './user/sagas'
import blogSagas from './blog/sagas'
import productSagas from './product/sagas'
import cartSagas from './cart/sagas'
import pqrSagas from './pqr/sagas'
import eventsSagas from './events/sagas'

export default [
  ...appSagas,
  ...homeSagas,
  ...userSagas,
  ...blogSagas,
  ...productSagas,
  ...cartSagas,
  ...pqrSagas,
  ...eventsSagas
]
