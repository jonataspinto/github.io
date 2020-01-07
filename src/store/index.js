import {createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { userReducer } from './user/user.reducer'
import {themeReducer } from './theme/theme.reducer'

const rootReducers =  combineReducers({
    data: userReducer,
    theme: themeReducer
})

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(ReduxThunk)
)

export {store}