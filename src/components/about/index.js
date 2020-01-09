import React from 'react';
import { AboutContainer, Paragraph } from './style';
import {LANG} from '../../shared/pt'

export default function About() {
  return (
    <AboutContainer>
        <Paragraph>
            {LANG.about}
        </Paragraph>
    </AboutContainer>
  );
}
