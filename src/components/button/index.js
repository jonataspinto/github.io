import React from 'react';
import { ButtonContainer , TouchIcon, SetTheme} from './style';
import Icon from '@material-ui/core/Icon'

const Button =(props)=>{
  return (
    <ButtonContainer 
        color={props.color}
        onClick={props.action}
    >{props.value &&
        // <Icon fontSize='large'>
        //     {props.icon}
        // </Icon>
        <Icon color={props.color} className={`fas fa-${props.icon}`}/>
        }

    </ButtonContainer>
  );
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
