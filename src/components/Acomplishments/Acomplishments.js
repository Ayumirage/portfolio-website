import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Responsible'},
  { text: 'Energized', },
  { text: 'Stress Tolerance', },
  { text: 'Fast Learning', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal characteristics</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
