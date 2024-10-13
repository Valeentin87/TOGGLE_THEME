import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, CHANGE_THEME } from "./types"

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    }
    else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}

const themeInitialState = {
    value: 'light'
}

function themeReducer(state = themeInitialState, action) {
    if (action.type === CHANGE_THEME) {
        return {...state,value: 'dark'}
    }

    return state
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})