import React from 'react';
import styled from 'styled-components';
import { ScrollSection, ScrollText, BouncingLetter } from '@components/Landing/LandingComponents';

const ConfigurableScrollSection = styled(ScrollSection)<{ $topMargin?: string }>`
  margin-top: ${props => props.$topMargin || '0'};
`;

interface AnimatedScrollTextProps {
  text: string;
  letterDelay?: number;
  topMargin?: string;
}

export const AnimatedScrollText: React.FC<AnimatedScrollTextProps> = ({
  text,
  letterDelay = 0.1,
  topMargin
}) => {
  return (
    <ConfigurableScrollSection $topMargin={topMargin}>
      <ScrollText>
        {text.split('').map((letter, index) => (
          <BouncingLetter key={index} delay={index * letterDelay}>
            {letter}
          </BouncingLetter>
        ))}
      </ScrollText>
    </ConfigurableScrollSection>
  );
}; 