import * as api from '../../services'

export const TYPES = {
    GET_DETAILS: 'GET_DETAILS',
    ERROR_GET_DETAILS: 'ERROR_GET_DETAILS'
}

export const GetProfile = ()=> async (dispatch, getState)=>{
    dispatch({
        type: TYPES.GET_DETAILS
    })
    try{
        const response = await api.GetGithubProfile()
        dispatch({
            type: TYPES.GET_DETAILS,
            user: response
        })
    }catch(error){
        dispatch({
            type: TYPES.ERROR_GET_DETAILS,
            error: error
            
        })
    }

}