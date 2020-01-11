import React, {useEffect } from 'react';
import { Container, Avatar, SocialMedia, LinkRef, ImgMedia } from './style';
import {SetThemeIcon} from '../index'
import {useDispatch, useSelector } from 'react-redux'
import {handleTheme} from '../../store/theme/theme.action'

export default function Header() {

  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  const { data, theme } = store
  // const [theme, setTheme] = useState('light')
  const social = [
    {
      icon:'github',
      src:'https://github.com/jonataspinto',
      title:"View my Github"
    },
    {
      icon:'linkedin',
      src:'https://www.linkedin.com/in/jonatas-pinto-35111a164/',
      title:"View my linkedin"

    }
  ]

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
    <Container
    themecolor={theme.theme || theme.initial_state.theme}
    >
      {data.user && <Avatar src={data.user.avatar_url}/>}
      <SocialMedia>
        {
          social.map((data, index)=>{
            return(
              <LinkRef
                key={index} 
                href={data.src}
                title={data.title}
                themecolor={theme.theme || theme.initial_state.theme}
                target='_blank'
              >
                <ImgMedia className={`fab fa-${data.icon}`} />
              </LinkRef >
            )
          })
        }
      <SetThemeIcon
        action={()=> Theme(theme.theme || theme.initial_state.theme)}
        theme={theme.theme || theme.initial_state.theme}
      />
      </SocialMedia>
    </Container>
  );
}
