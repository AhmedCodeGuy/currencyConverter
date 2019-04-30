import { put, select } from 'redux-saga/effects'
import RatesActions, { RatesSelectors } from '../RatesRedux'

// exported to make available for tests
export const selectRates = RatesSelectors.selectRates

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log("Hello, I'm an example of how to log via Reactotron.")

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectRates
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectRates
      }
    })
  }
  const rates = yield select(selectRates)
  // only get if we don't have it yet
  if (rates) {
    yield put(RatesActions.ratesRequest(action.date))
  }
}
