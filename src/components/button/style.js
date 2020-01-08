import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { lighten } from 'polished'


const handleColorType = theme => {
    switch (theme) {
        case 'dark':
        return "color: #c4c4c4; ";
      case "light":
        return "color: #fff; ";
      default:
        return "color: #000; ";
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
    transition:.3s;
    &&:hover{
       border-bottom: solid 3px ${lighten(0.1, "black")};
    }
    &&:active{
        transform: rotate(45deg); 
    }
    ${({themecolor}) => handleColorType(themecolor)}
`

export {ButtonContainer, TouchIcon, SetTheme}