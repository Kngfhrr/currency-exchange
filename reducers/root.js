import { combineReducers } from 'redux'

import reducerCurrencies from './currencies'
import themes from './theme'

const rootReducer = combineReducers({
    reducerCurrencies,
    themes,
})

export default rootReducer
