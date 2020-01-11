import React,{ useEffect } from 'react';
import { Container, ProjectsSection, TitleProjects} from './style';
import {Header, Skills, CardProjects, About} from '../../components'
import { useSelector, useDispatch} from 'react-redux'
import { GetProfile } from '../../store/user/user.actions'
import {Projects} from '../../shared/projects'
import {LANG} from '../../shared/pt'

const Home =() =>{
  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  const { theme} =  store
  
  useEffect(()=>{
    ShowProfile()
  },[])

  const ShowProfile = ()=>{
    dispatch(GetProfile())     
  }
  
  return (
      <Container
        CurrentTheme={theme.theme || theme.initial_state.theme}
      >
        <Header/>
        <About/>
        <Skills CurrentTheme={theme.theme || theme.initial_state.theme}/>
        <TitleProjects>{LANG.portfolio}</TitleProjects>
        <ProjectsSection>
          {
            Projects.map((proj, index)=>{
              return <CardProjects key={index}
              imgUrl={proj.imgUrl}
              name={proj.projectName}
              src={proj.repositoryUrl}
              description={proj.description}
              />
            })
          }
        </ProjectsSection>
      </Container>
  );
}
export default Home