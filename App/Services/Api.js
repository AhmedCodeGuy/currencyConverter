// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const DATE = '2013-12-24'
const API_KEY = '660b512bbe640b248735c2a265bf2f28'
const BASE = 'EUR'
const SYMBOLS = 'DKK,INR,USD,THB'

const create = (baseURL = 'http://data.fixer.io/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getRates = ({ date }) =>
    api.get(`${DATE}?access_key=${API_KEY}&base=${BASE}&symbols=${SYMBOLS}`)

  return {
    getRates
  }
}

export default {
  create
}
