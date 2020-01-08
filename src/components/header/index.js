import React, {useEffect } from 'react';
import { Container, Avatar } from './style';
import {SetThemeIcon} from '../index'
import {useDispatch, useSelector } from 'react-redux'
import {handleTheme} from '../../store/theme/theme.action'

export default function Header() {

  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  const { data, theme } = store
  // const [theme, setTheme] = useState('light')

  useEffect(() => {
    
  }, [])

  const setTheme = body=>{
    dispatch(
      handleTheme(body)
    )
  }

  const Theme = (body)=>{
    switch(body){
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
        {data.user && <Avatar src={data.user.data.avatar_url}/>}
        <SetThemeIcon
          action={()=> Theme(theme.theme || theme.initial_state.theme)}
          theme={theme.theme || theme.initial_state.theme}
        />
      </Container>
  );
}
