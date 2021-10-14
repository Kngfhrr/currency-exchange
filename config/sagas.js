import { getLastCurrencies, convertCurrency } from '../api'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'

function* checkAsyncStorage() {
    try {
        const storage = yield AsyncStorage.getItem('@storage_Key')
        const parsed = JSON.parse(storage)

        yield put({ type: 'SET_FAVORITE_CURRENCY', favorites: parsed })
    } catch (e) {
        throw new Error(e)
    }
}

function* fetchCurrencies(action) {
    try {
        const currencies = yield call(getLastCurrencies, action.payload)
        yield put({ type: 'SET_CURRENCIES', currencies: currencies.rates })
    } catch (e) {
        throw new Error(e)
    } finally {
        yield checkAsyncStorage()
    }
}

function* setFavoriteCurrency({ currency }) {
    try {
        const storage = yield AsyncStorage.getItem('@storage_Key')
        const parsed = JSON.parse(storage)

        const isAdded = parsed?.includes(currency)

        yield AsyncStorage.setItem(
            '@storage_Key',
            isAdded
                ? JSON.stringify(parsed.filter((c) => c !== currency))
                : JSON.stringify([...parsed, currency])
        )

        const updated = yield AsyncStorage.getItem('@storage_Key')

        yield put({
            type: 'SET_FAVORITE_CURRENCY',
            favorites: JSON.parse(updated),
        })
    } catch (e) {
        throw new Error(e)
    }
}

function* setQuoteCurrency(action) {
    try {
        yield put({ type: 'SET_QUOTE_CURRENCY', currency: action.currency })
    } catch (e) {
        throw new Error(e)
    }
}

function* getCurrencyConversion(action) {
    try {
        const { result } = yield call(convertCurrency, action.params)
        yield put({ type: 'SET_CONVERSION_RESULT', result: result })
    } catch (e) {
        throw new Error(e)
    }
}

function* changeTheme(action) {
    yield put({ type: 'SET_THEME', dark: action.dark })
}

function* rootSaga() {
    yield takeEvery('CHANGE_THEME', changeTheme)
    yield takeLatest('GET_CURRENCIES', fetchCurrencies)
    yield takeEvery('SELECT_FAVORITE', setFavoriteCurrency)
    yield takeEvery('SELECT_QUOTE_CURRENCY', setQuoteCurrency)
    yield takeLatest('GET_CURRENCY_CONVERSION', getCurrencyConversion)
}

export default rootSaga
