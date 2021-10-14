import {
    SET_FAVORITE_CURRENCY,
    SET_CURRENCIES,
    SET_QUOTE_CURRENCY,
    SET_CONVERSION_RESULT,
} from '../actions/currencies'

const initialState = {
    currencies: [],
    favorites: [],
    baseCurrency: 'EUR',
    quoteCurrency: 'GBP',
    amount: 100,
    result: 0,
}

const reducerCurrencies = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES:
            return {
                ...state,
                currencies: action.currencies,
            }

        case SET_FAVORITE_CURRENCY:
            return {
                ...state,
                favorites: state.favorites.includes(action.favorites)
                    ? state.favorites.filter((c) => c !== action.favorites)
                    : [...state.favorites, action.favorites],
            }

        case SET_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.currency,
            }

        case SET_CONVERSION_RESULT:
            return {
                ...state,
                result: action.result,
            }

        default:
            return state
    }
}

export default reducerCurrencies
