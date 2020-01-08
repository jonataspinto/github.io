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
    height: 100vh;
    ${({themecolor}) => handleColorType(themecolor)}
`

export {Container}