import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducerCurrencies from '../reducers/currencies'
import rootSaga from './sagas'
import reducerTheme from '../reducers/theme'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ reducerCurrencies, reducerTheme })

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
