import { DECREMENT, INCREMENT, CHANGE_THEME } from "./types";

export function increment () {
    return {
        type: INCREMENT
    }
}

export function decrement () {
    return {
        type: DECREMENT
    }
}

export function changeTheme () {
    return {
        type: CHANGE_THEME
    }
}