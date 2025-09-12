import React from "react";
import {
  TextSection,
  ImageSection,
  ProfileImage,
  DiagonalLines,
} from "./LandingComponents";
import meImage from "@assets/me.png";
import "./ProfileSection.css";

export const ProfileSection: React.FC = () => {
  return (
    <>
      <TextSection>
        <p>
          Hi, my <br className="responsive-break" />
          name is <b>Yash </b>.
        </p>
        <span>
          I'm a <b>Software Engineer</b>
        </span>
      </TextSection>
      <ImageSection>
        <ProfileImage src={meImage} alt="Profile" />
        <DiagonalLines />
      </ImageSection>
    </>
  );
};
