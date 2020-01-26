import styled from 'styled-components'

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    border: none;
    width: 95%;
`
const Title = styled.p`
    font-size: 25px;
    font-weight: bold;    
    display: flex;
    /* align-self: flex-start; */
`

const Paragraph = styled.p`
    font-size: 18px;
    text-align: justify;
    line-height: 25px;
    transition: 1s;
    padding: 15px 0 0 0;
    text-indent: 40px;
`

export { AboutContainer, Title, Paragraph}