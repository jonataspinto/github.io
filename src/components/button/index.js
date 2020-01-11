import React from 'react';
import { ButtonContainer , TouchIcon, SetTheme} from './style';
import Icon from '@material-ui/core/Icon'
import { useSelector} from 'react-redux'

const Button =(props)=>{
    const store = useSelector(state=> state)
    const { theme } =  store
  return (
    <ButtonContainer 
        type={props.type}
        onClick={props.action}
        CurrentTheme={theme.theme || theme.initial_state.theme}
    >{props.value}</ButtonContainer>
  )
}

const ButtonIcon =(props)=>{
    return(
        <TouchIcon  className={`fas fa-${props.icon}`}>
            
        </TouchIcon>
    )
}

const SetThemeIcon = (props)=>{
    return <SetTheme
        onClick={props.action}
        themecolor={props.theme}
        className={`fas fa-adjust`}
    />
}

export { Button, ButtonIcon, SetThemeIcon }
