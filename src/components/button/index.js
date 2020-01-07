import React from 'react';
import { ButtonContainer } from './style';
import Icon from '@material-ui/core/Icon'

export default function Button(props) {
  return (
    <ButtonContainer 
        color={props.color}
        onClick={props.action}
    >{props.value &&
        <Icon>
            {props.icon}
        </Icon>}
    </ButtonContainer>
  );
}
