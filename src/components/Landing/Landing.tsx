import React from 'react';
import type { LandingProps } from './Landing.interfaces';
import {
  TextSection,
  ImageSection,
  ProfileImage,
  DiagonalLines,
  ScrollSection,
  ScrollText,
  BouncingLetter,
} from "./LandingComponents";
import { Container, ContentWrapper } from '@components/Common/CommonComponents';
import meImage from '@assets/me.png';

const Landing: React.FC<LandingProps> = () => {
  const scrollText = "SCROLL";

  return (
    <Container>
      <ContentWrapper flexDirection="row">
        <TextSection>
          <p>
            Hi, my <br />name is <b>Yash </b>.
          </p>
          <span>
            I'm a <b>Software Engineer</b>
          </span>
        </TextSection>
        <ImageSection>
          <ProfileImage src={meImage} alt="Profile" />
          <DiagonalLines />
        </ImageSection>
      </ContentWrapper>
      
      <ScrollSection>
        <ScrollText>
          {scrollText.split('').map((letter, index) => (
            <BouncingLetter key={index} delay={index * 0.1}>
              {letter}
            </BouncingLetter>
          ))}
        </ScrollText>
      </ScrollSection>
    </Container>
  );
};

export default Landing; 