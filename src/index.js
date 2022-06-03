import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import { 
    asyncIncrement, changeTheme, decrement, increment 
} from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counterEl = document.getElementById("counter")
const addBtn = document.getElementById("add")
const subBtn = document.getElementById("sub")
const asyncBtn = document.getElementById("async")
const themeBtn = document.getElementById("theme")


const store = createStore(rootReducer,
    compose (
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

addBtn.addEventListener("click", () => {
    store.dispatch(increment())
})

subBtn.addEventListener("click", () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener("click", () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const {counter, theme, isDisabled} = store.getState()
    const btnArgments = [subBtn, addBtn, themeBtn]

    counterEl.textContent = counter.counter
    document.body.className = theme.theme

    btnArgments.forEach(btn => btn.disabled = isDisabled.isIncremented)
})

themeBtn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light") ? "dark" : "light"
    store.dispatch(changeTheme(newTheme))
})

store.dispatch({type: "INIT_APPLICATION"})