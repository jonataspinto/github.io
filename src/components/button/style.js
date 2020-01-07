import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'


const handleColorType = theme => {
    switch (theme) {
        case 'dark':
        return "color: #fff; background: #000;";
      case "light":
        return "color: #000; background: #fff;";
      default:
        return "color: #000; background: #fff;";
    }
};

const ButtonContainer = styled.button`
    color: ${props=> props.color};
    width: 150px;
    height: 80px;
`
const TouchIcon = styled(Icon)`
    /* width: auto; */
    border: none;
    border-radius: 100%;
    background-color: white;
    color: white;
    &&:active{
        background-color: yellow;
    }
`

const SetTheme = styled(Icon)`
    border-radius: 100%;
    ${({themecolor}) => handleColorType(themecolor)}
`

export {ButtonContainer, TouchIcon, SetTheme}