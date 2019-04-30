import { call, put } from 'redux-saga/effects'
import RatesActions from '~/Redux/RatesRedux'

export function * getRates (api, action) {
  const { date } = action
  const response = yield call(api.getRates, date)

  if (response.ok) {
    const rates = response.data
    yield put(RatesActions.ratesSuccess(rates))
  } else {
    yield put(RatesActions.ratesFailure())
  }
}
