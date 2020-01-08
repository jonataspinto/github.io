import { TYPES } from './theme.action'

const initial_state = {
    theme: 'light'
}

export const themeReducer = (state = {initial_state}, action )=>{
    switch(action.type){
        case TYPES.SET_THEME:
            return{
                ...state,
                theme: action.theme
            } 
        default: 
            return state
    }
}