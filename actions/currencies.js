const GET_CURRENCIES = 'GET_CURRENCIES'
const SET_CURRENCIES = 'SET_CURRENCIES'
const SET_FAVORITE_CURRENCY = 'SET_FAVORITE_CURRENCY'
const SELECT_FAVORITE = 'SELECT_FAVORITE'
const UNSELECT_FAVORITE = 'UNSELECT_FAVORITE'
const SET_QUOTE_CURRENCY = 'SET_QUOTE_CURRENCY'
const SELECT_QUOTE_CURRENCY = 'SELECT_QUOTE_CURRENCY'
const GET_CURRENCY_CONVERSION = 'GET_CURRENCY_CONVERSION'
const SET_CONVERSION_RESULT = 'SET_CONVERSION_RESULT'

const getCurrencies = () => ({
    type: GET_CURRENCIES,
})

const setCurrencies = () => ({
    type: SET_CURRENCIES,
})

const setFavoriteCurrency = () => ({
    type: SET_FAVORITE_CURRENCY,
})

const selectFavorite = (currency) => ({
    type: SELECT_FAVORITE,
    currency,
})

const unSelectFavorite = (currency) => ({
    type: UNSELECT_FAVORITE,
    currency,
})


const selectQuoteCurrency = (currency) => ({
    type: SELECT_QUOTE_CURRENCY,
    currency,
})

const getCurrencyConversion = (params) => ({
    type: GET_CURRENCY_CONVERSION,
    params,
})

const setConversionResult = (result) => ({
    type: SET_CONVERSION_RESULT,
    result,
})

export {
    GET_CURRENCIES,
    SET_FAVORITE_CURRENCY,
    SET_CURRENCIES,
    SELECT_FAVORITE,
    UNSELECT_FAVORITE,
    SET_QUOTE_CURRENCY,
    SELECT_QUOTE_CURRENCY,
    GET_CURRENCY_CONVERSION,
    SET_CONVERSION_RESULT,
    getCurrencies,
    setFavoriteCurrency,
    setCurrencies,
    selectFavorite,
    unSelectFavorite,
    selectQuoteCurrency,
    getCurrencyConversion,
    setConversionResult,
}
