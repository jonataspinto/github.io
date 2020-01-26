import styled from 'styled-components'
import {lighten, darken} from 'polished'

const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 300px;
    padding: 30px 0;
`

const SkillTitle = styled.p`
    font-size: 25px;
    font-weight: bold;    
`

const ProgressContainer =styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`
const ProgressName = styled.h3`
    align-self: flex-start;
    padding: 8px 0;
    transition: .5s;
`

const ProgressBar = styled.div`
    width: 100%;
    height: 19px;
    border-radius: 10px;
    transition: .2s;
    background-color: ${props=> props.CurrentTheme === 'dark' ? '#03738C' : '#024059'};
    box-shadow: ${props=> props.CurrentTheme !== 'dark' && '0px 1px 6px'+  lighten(0.1, "black")};
`
const Progress = styled.div`
    width: ${props=> `${props.progress}%`};
    height: 19px;
    text-align: end;
    vertical-align: middle;
    border-radius: 10px;
    transition: .2s;
    background-color: ${props=> props.CurrentTheme === 'dark' ? '#024059':'#03738C'};
    color: ${props=> props.CurrentTheme === 'dark' ? darken(0.1, '#fff'):'#0D0D0D'};
    &&:hover{
        /* background-color: ${lighten(0.3, "red")}; */
    }
`
export {
    SkillsContainer,
    ProgressContainer,
    ProgressBar,
    Progress,
    ProgressName,
    SkillTitle
}