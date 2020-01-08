import { TYPES } from './user.actions'

const initial_state = {
    user: {},
}

export const userReducer = (state = {initial_state}, action)=>{
    switch(action.type){
        case TYPES.GET_DETAILS:
        return {
            ...state,
            user: action.user
        }
        default:
            return state
    }
}
