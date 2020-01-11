import React from 'react';
import { AboutContainer, Title, Paragraph } from './style';
import {LANG} from '../../shared/pt'

export default function About() {
  return (
    <AboutContainer>
        <Title>{LANG.aboutMe}</Title>
        <Paragraph>
            {LANG.about}
        </Paragraph>
    </AboutContainer>
  );
}
