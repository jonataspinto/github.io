import styled from 'styled-components'

const handleColorType = theme => {
    switch (theme) {
        case 'dark':
        return "color: #fff; background: #000;";
      case "light":
        return "color: #000; background: #f6f6f6;";
      default:
        return "color: #000; background: #fff;";
    }
};

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    ${({CurrentTheme}) => handleColorType(CurrentTheme)}
`

const TitleProjects = styled.h2`
  padding: 30px;
  display: flex;
  justify-content: center;
`

const ProjectsSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100vw;
`

export {Container, ProjectsSection, TitleProjects }