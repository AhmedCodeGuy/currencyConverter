import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  ratesRequest: ['date'],
  ratesSuccess: ['rates'],
  ratesFailure: null
})

export const RatesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  rates: null,
  fetching: null,
  error: null,
  date: null
})

/* ------------- Selectors ------------- */

export const RatesSelectors = {
  selectRates: state => state.rates
}

/* ------------- Reducers ------------- */

// request the rates for a user
export const request = (state, { date }) => {
  return state.merge({ fetching: true, date, rates: null })
}

// successful rates lookup
export const success = (state, action) => {
  const { rates } = action
  return state.merge({ fetching: false, error: null, rates })
}

// failed to get the rates
export const failure = state => {
  return state.merge({ fetching: false, error: true, rates: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RATES_REQUEST]: request,
  [Types.RATES_SUCCESS]: success,
  [Types.RATES_FAILURE]: failure
})
