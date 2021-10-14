import { SET_THEME } from '../actions/theme'

const initialState = {
    dark: false,
}

const reducerTheme = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                dark: !state.dark,
            }

        default:
            return state
    }
}

export default reducerTheme
