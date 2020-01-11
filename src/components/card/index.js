import React from 'react';
import {Button} from '../index'
import { useSelector} from 'react-redux'
import { 
    CardProjectsContainer, 
    Img,
    Title,
    Subtitle
} from './style';


const CardProjects =(props)=> {
    const store = useSelector(state=> state)
    const { theme } =  store
    
  return (
    <CardProjectsContainer
     CurrentTheme={theme.theme || theme.initial_state.theme}
    >
        <Img src={props.imgUrl}/>
        <Title>{props.name}</Title>
        <Subtitle>{props.description}</Subtitle>
        <a href={props.src} target="_blank" >
            <Button
            value='Ver Projeto'
            color={props.color}
            type='primary'
            />
        </a>
    </CardProjectsContainer>
  );
}

export {CardProjects}
