import React from "react";
import {
  Container,
  AnimatedContentWrapper,
} from "@components/Common/CommonComponents";
import { SectionTitle } from "@components/Common/SectionComponents";
import { AnimatedScrollText } from "@components/Common/AnimatedScrollText";
import { AwardsText } from "@routes/pages/awards/AwardsComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AwardsLanding: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <>
      <Container minHeight="90vh" topMargin="3rem" ref={elementRef}>
        <AnimatedContentWrapper
          flexDirection="column"
          alignItems="flex-start"
          gap="2rem"
          isVisible={isIntersecting}
        >
          <SectionTitle isVisible={isIntersecting} alignment="left">
            My Awards<span style={{ color: "var(--subtext)" }}>.</span>
          </SectionTitle>
          <AwardsText>
            Discover a collection of achievements that showcase my{" "}
            <b>dedication</b> and commitment to excellence in technology and
            innovation. From hackathon victories to recognition programs, each
            award represents
            <b>
              {" "}
              hard work, creativity, and the pursuit of impactful solutions
            </b>{" "}
            that make a difference in the tech community.
          </AwardsText>
        </AnimatedContentWrapper>
      </Container>
      <AnimatedScrollText
        text="DISCOVER"
        letterDelay={0.1}
        topMargin="-8rem"
      />
    </>
  );
};

export default AwardsLanding;
