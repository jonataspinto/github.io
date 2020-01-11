import React from 'react'
import { 
    SkillsContainer,
    SkillTitle,
    ProgressContainer,
    ProgressBar,
    Progress,
    ProgressName
} from  './style'
import {LANG} from '../../shared/pt'

export default function Skills(props) {      
    return (
        <SkillsContainer>
            <SkillTitle>{LANG.skill}</SkillTitle>   
            {LANG.skills.map((skill, index)=>{
                return(
                    <ProgressContainer key={index}>
                        <ProgressName>
                        {skill.name}
                        </ProgressName>
                        <ProgressBar
                            CurrentTheme={props.CurrentTheme}
                        >
                            <Progress 
                                CurrentTheme={props.CurrentTheme}
                                progress={skill.progress}
                            >
                                {`${skill.progress}%`}
                            </Progress>
                        </ProgressBar>
                    </ProgressContainer>
                )})
            }
        </SkillsContainer>
    )
}