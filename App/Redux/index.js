import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '~/Redux/Sagas'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  rates: require('./RatesRedux').reducer
})

export default () => {
  return configureStore(reducers, rootSaga)
}
