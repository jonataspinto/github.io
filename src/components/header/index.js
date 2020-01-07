import React, {useEffect, useState} from 'react';
import { Container, Avatar } from './style';
import { GetGithubProfile } from '../../services'
import {SetThemeIcon} from '../index'
import {useDispatch, useSelector } from 'react-redux'

export default function Header() {

  const dispatch = useDispatch()
  const store = useSelector(state=> state.data)
  const { user, error } =  store
  useEffect(() => {
    
  }, [])

  const [theme, setTheme] = useState('light')

  const handleTheme = (theme)=>{
    switch(theme){
      case 'dark':
        return setTheme('light')
      case 'light':
        return setTheme('dark')
      default:
        break
    }
  }
  return (
      <Container>
        {user && <Avatar src={user.data.avatar_url}/>}

        <SetThemeIcon
          action={()=> handleTheme(theme)}
          theme={theme}
        />
      </Container>
  );
}
