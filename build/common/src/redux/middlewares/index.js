import { applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'

export default function createMiddleware (middlewares) {
  const middleware = applyMiddleware(...middlewares)
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(fromJS({}))
      : compose

  return composeEnhancers(middleware)
}
