import { combineReducers } from "redux"
import {CHANGE_THEME, DARK_THEME, DECREMENT, INCREMENT, IS_INCREMENT, IS_NOT_INCREMENT, LIGHT_THEME} from "./types"

const initialState = {
    counter: 42,
    theme: "light",
    isIncremented: false
}

function counterReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1}
        case DECREMENT: 
            return {...state, counter: state.counter - 1}
        default:
            return state
    }
}

function themeReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_THEME:
            return {...state, theme: action.payload}
        default:
            return state
    }
}

function isIncrementedReducer(state = initialState, action) {
    switch(action.type) {
        case IS_INCREMENT:
            return {...state, isIncremented: true}
        case IS_NOT_INCREMENT:
            return {...state, isIncremented: false}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    isDisabled: isIncrementedReducer
})