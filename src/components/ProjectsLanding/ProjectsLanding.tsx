import React from "react";
import {
  Container,
  AnimatedContentWrapper,
} from "@components/Common/CommonComponents";
import { SectionTitle } from "@components/Common/SectionComponents";
import { AnimatedScrollText } from "@components/Common/AnimatedScrollText";
import { ProjectsText } from "@/routes/pages/projects/ProjectsComponents";
import { Circles } from "@components/Common/CommonComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProjectsLanding: React.FC = () => {
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
            My Projects<span style={{ color: "var(--subtext)" }}>.</span>
          </SectionTitle>
          <Circles top="15%" left="60%" width="45%" height="70%" />
          <ProjectsText>
            Explore a collection of projects that highlight my{" "}
            <b>frontend expertise</b> and passion for crafting engaging digital
            experiences. From sleek web interfaces to
            <b>responsive, user-friendly designs</b>, each project reflects a
            challenge I've transformed into an opportunity to create something
            <b> innovative, precise, and impactful.</b>
          </ProjectsText>
        </AnimatedContentWrapper>
      </Container>
      <AnimatedScrollText text="EXPLORE" letterDelay={0.1} topMargin="-8rem" />
    </>
  );
};

export default ProjectsLanding;
