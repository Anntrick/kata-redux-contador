import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'
import counterReducer from "./reducer.js"

const reducer = combineReducers({
    counterReducer
})
const store = configureStore({
    reducer
})


export default store  