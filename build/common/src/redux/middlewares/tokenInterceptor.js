import { request } from '../../../helpers'
import { Actions } from '../app/actions'

const tokenInterceptorMiddleware = store => next => action => {
  if (action.type === Actions.SET_TOKEN) {
    request.interceptors.request.use(config => {
      config.headers['Authorization'] = action.token
      return config
    })
  }
  next(action)
}

export default tokenInterceptorMiddleware
