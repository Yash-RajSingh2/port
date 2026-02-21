import React from "react";
import { HeroSection } from "@components/Common/HeroSection";
import { ProfileSection } from "./ProfileSection";

const Landing: React.FC = () => {
  return (
    <>
      <HeroSection minHeight="90vh" responsiveFlexDirection={true}>
        <ProfileSection />
      </HeroSection>
    </>
  );
};

export default Landing;
