import React from "react";
import type { WorkProps } from "./Work.interfaces";
import {
  Container,
  AnimatedContentWrapper,
} from "@components/Common/CommonComponents";
import { SectionTitle } from "@components/Common/SectionComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExperienceList } from "./ExperienceList";

const Work: React.FC<WorkProps> = ({ experiences }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <Container minHeight="100vh" ref={elementRef}>
      <AnimatedContentWrapper
        alignItems="flex-start"
        gap="6rem"
        flexDirection="column"
        isVisible={isIntersecting}
      >
        <SectionTitle isVisible={isIntersecting} alignment="left">
          Experience
        </SectionTitle>
        <ExperienceList experiences={experiences} initialDisplayCount={3} />
      </AnimatedContentWrapper>
    </Container>
  );
};

export default Work;
