import React from 'react';
import type { LandingProps } from './Landing.interfaces';
import {
  LandingContainer,
  ContentWrapper,
  TextSection,
  ImageSection,
  ProfileImage,
  DiagonalLines,
} from "./LandingComponents";
import meImage from '@assets/me.png';

const Landing: React.FC<LandingProps> = () => {
  return (
    <LandingContainer>
      <ContentWrapper>
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
    </LandingContainer>
  );
};

export default Landing; 