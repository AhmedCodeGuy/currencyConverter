/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import Config from '../Config/DebugConfig'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  )
  middleware.push(navigationMiddleware)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // Check if REDUX_DEVTOOLS_EXTENSION exists to append it to middlewares
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron
    ? console.tron.createStore
    : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
