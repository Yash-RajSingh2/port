import React from "react";
import { HeroSection } from "@components/Common/HeroSection";
import { AnimatedScrollText } from "@components/Common/AnimatedScrollText";
import { ProfileSection } from "./ProfileSection";

const Landing: React.FC = () => {
  return (
    <>
      <HeroSection minHeight="90vh" responsiveFlexDirection={true}>
        <ProfileSection />
      </HeroSection>
      <AnimatedScrollText
        text="SCROLL"
        letterDelay={0.1}
        topMargin="-5rem"
        responsiveStyles={[
          {
            minWidth: 600,
            maxWidth: 750,
            topMargin: "0rem",
            alignment: "center",
          },
          {
            maxWidth: 700,
            topMargin: "-5rem",
            alignment: "center",
          },
          {
            maxWidth: 1000,
            topMargin: "0rem",
            alignment: "center",
          },
          {
            maxWidth: 500,
            topMargin: "-5.25rem",
            alignment: "center",
          },
        ]}
      />
    </>
  );
};

export default Landing;
