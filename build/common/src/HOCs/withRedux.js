import { createLogger } from 'redux-logger';
import { createStore } from 'redux'
import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import tokenInterceptorMiddleware from '../redux/middlewares/tokenInterceptor'
import middleware from '../redux/middlewares'

export default (rootReducer, rootSaga, customMiddlewares) => {
  const sagaMiddleware = createSagaMiddleware()

  function initStore(initialState) {

    let middlewares = [
      sagaMiddleware,
      tokenInterceptorMiddleware,
      ...customMiddlewares
    ]
    if (process.browser && process.env.NODE_ENV == 'development')
      middlewares = [...middlewares, createLogger({
        collapsed: true,
        stateTransformer: state => state.toJS()
      })]

    const store = createStore(
      rootReducer,
      fromJS(initialState),
      middleware(middlewares)
    )

    store.runSagaTask = () => {
      store.sagaTask = sagaMiddleware.run(rootSaga)
    }

    store.runSagaTask()

    return store
  }

  return comp => withRedux(initStore)(withReduxSaga(comp))
}
