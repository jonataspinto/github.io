import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { lighten, darken } from 'polished'


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

const Type = (theme)=>{
    switch(theme){
        case 'primary':
            return (`
                background-color: #798C8C;
                &&:active{
                    background-color: ${darken(0.09, '#798C8C')}
                }
            `    
        )
        default:
            break
    }
}

const ButtonContainer = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    outline: none;
    ${({type}) => Type(type)}
    background-color: ${props=> props.CurrentTheme === 'dark' && lighten(.1,'#798C8C')
    };
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