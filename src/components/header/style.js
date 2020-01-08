import styled from 'styled-components'
import { lighten } from 'polished'
import Icon from '@material-ui/core/Icon'


const handleColorType = theme => {
    switch (theme) {
        case 'dark':
            return "color: #c4c4c4;";
        case "light":
            return "color: #fff;";        
      default:
        return "color: #000;";
    }
}

const Container = styled.div`
    ${({themecolor}) => handleColorType(themecolor)};
    transition:.3s;
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props=> props.themecolor === 'dark' ? 
    lighten(0.05, "black") : 
    '#000'
    };
`
const Avatar = styled.img`
    width: 70px;
    border-radius: 100%;
`
const FullName= styled.h1`

`
const LinkRef = styled.a`
    ${({themecolor}) => handleColorType(themecolor)}
`

const SocialMedia = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ImgMedia = styled(Icon)`
    &&:hover{
       border-bottom: solid 3px ${lighten(0.1, "black")};
    }
`
export {Container, Avatar, FullName, SocialMedia, LinkRef, ImgMedia }