import React,{ useEffect } from 'react';
import { Container } from './style';
import {Header, Skills} from '../../components'
import { useSelector, useDispatch} from 'react-redux'
import { GetProfile } from '../../store/user/user.actions'
const Home =() =>{
  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  const { data ,theme} =  store
  
  useEffect(()=>{
    ShowProfile()
  },[])

  const ShowProfile = ()=>{
    dispatch(GetProfile())     
  }
  
  return (
      <Container
        themecolor={theme.theme || theme.initial_state.theme}>
        <Header/>
        <Skills/>
      </Container>
  );
}
export default Home
