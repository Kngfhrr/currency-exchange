const CHANGE_THEME = 'CHANGE_THEME'
const SET_THEME = 'SET_THEME'


const changeTheme = (dark) => ({
    type: CHANGE_THEME, dark
})

const setTheme = (dark) => ({
    type: SET_THEME, dark
})

export {
    changeTheme,
    setTheme,
    CHANGE_THEME,
    SET_THEME
}
