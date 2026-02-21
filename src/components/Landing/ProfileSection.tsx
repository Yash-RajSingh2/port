import React from "react";
import styled from "styled-components";
import {
  TextSection,
  ImageSection,
  ProfileImage,
  DiagonalLines,
} from "./LandingComponents";
import meImage from "@assets/me.png";

const ResponsiveBreak = styled.br`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ProfileSection: React.FC = () => {
  return (
    <>
      <TextSection>
        <p>
          Hi, my <ResponsiveBreak />
          name is <b>Yash </b>.
        </p>
        <span>
          I'm a <b>Software Engineer</b>
        </span>
      </TextSection>
      <ImageSection>
        <ProfileImage src={meImage} alt="Profile" loading="eager" />
        <DiagonalLines />
      </ImageSection>
    </>
  );
};
