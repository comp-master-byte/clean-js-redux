import { 
    CHANGE_THEME, DECREMENT, INCREMENT, IS_INCREMENT, IS_NOT_INCREMENT 
} from "./types";

export const increment = () => {
    return {
        type: INCREMENT
    }
} 

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const changeTheme = (payload) => {
    return {
        type: CHANGE_THEME,
        payload
    }
}

export const isIncrementedAction = () => {
    return {
        type: IS_INCREMENT
    }
}

export const isNotIncrementedAction = () => {
    return {
        type: IS_NOT_INCREMENT
    }
}

export const asyncIncrement = () => {
    return dispatch => {
        dispatch(isIncrementedAction())
        setTimeout(() => {
            dispatch(increment())
            dispatch(isNotIncrementedAction())
        }, 1500)
    }
}