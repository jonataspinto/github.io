import React from 'react';
import { AboutContainer, Paragraph } from './style';
import {LANG} from '../../shared/pt'

export default function About() {
  return (
    <AboutContainer>
        <h2>{LANG.aboutMe}</h2>
        <Paragraph>
            {LANG.about}
        </Paragraph>
    </AboutContainer>
  );
}
