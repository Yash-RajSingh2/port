import React from 'react';
import { TextSection, ImageSection, ProfileImage, DiagonalLines } from './LandingComponents';
import meImage from '@assets/me.png';

interface ProfileSectionProps {
  name?: string;
  title?: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  name = "Yash",
  title = "Software Engineer"
}) => {
  return (
    <>
      <TextSection>
        <p>
          Hi, my <br />name is <b>{name} </b>.
        </p>
        <span>
          I'm a <b>{title}</b>
        </span>
      </TextSection>
      <ImageSection>
        <ProfileImage src={meImage} alt="Profile" />
        <DiagonalLines />
      </ImageSection>
    </>
  );
}; 