export const TYPES = {
    SET_THEME: 'SET_THEME'
}

export const handleTheme = body=> (dispatch, getState)=>{
    dispatch({
        type: TYPES.SET_THEME,
        theme: body
    })
}