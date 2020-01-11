import styled from 'styled-components'
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
}



const CardProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 8px;
    margin: 12px;
    border: none;
    border-radius: 10px;
    transition: .02s;
    box-shadow: 0px 1px 6px ${props=> props.CurrentTheme === 'dark' ? 
    lighten(0.1, "black") : ''};
    
    background-color: ${props=> props.CurrentTheme === 'dark' ? 
    lighten(0.05, "black") : 
    lighten(0.0, '#0D0D0D')
    };
    ${({CurrentTheme}) => handleColorType(CurrentTheme)}
    &&:hover{
        transition: .2s;
        box-shadow: 0px 1px 6px ${props=> props.CurrentTheme === 'dark' ? 
        lighten(0.2, "black") : 'rgba(0, 0, 0, 3)'};
    }
`
const Img = styled.img`
    width: 120px;
    display: flex;
    align-self: center;
    margin: 12px;
`
const Title = styled.p`
    font-size: 20px;
`
const Subtitle = styled.p`
    height: 60px;
    overflow-y: scroll;
    &&::-webkit-scrollbar{
        width: 0;
    }
    margin: 12px 0;
`
export {
    CardProjectsContainer,
    Img,
    Title,
    Subtitle
}