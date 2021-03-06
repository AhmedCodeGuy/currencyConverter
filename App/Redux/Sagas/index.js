import { takeLatest, all } from 'redux-saga/effects'
import API from '~/Services/Api'
import FixtureAPI from '~/Services/FixtureApi'
import DebugConfig from '~/Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '~/Redux/StartupRedux'
import { RatesTypes } from '~/Redux/RatesRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getRates } from './RatesSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(RatesTypes.RATES_REQUEST, getRates, api)
  ])
}
