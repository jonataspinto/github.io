import React,{ useEffect } from 'react';
import { Container } from './style';
import {Header} from '../../components'
import { useSelector, useDispatch} from 'react-redux'
import { GetProfile } from '../../store/user/user.actions'
const Home =() =>{
  const dispatch = useDispatch()
  const store = useSelector(state=> state.data)
  const { user, error } =  store
  
  useEffect(()=>{
    ShowProfile()
  },[])

  const ShowProfile = ()=>{
    dispatch(GetProfile())     
  }
  
  return (
      <Container>
        {/* {user && console.log(user)  } */}
        <Header/>
      </Container>
  );
}
export default Home
