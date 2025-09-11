import React from 'react';
import type { ProjectsLandingProps } from './ProjectsLanding.interfaces';
import { AnimatedContentWrapper } from '@components/Common/CommonComponents';
import {
  ScrollText,
  BouncingLetter,
} from "@components/Landing/LandingComponents";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsText,
  ProjectsScrollSection,
} from "@/routes/pages/projects/ProjectsComponents";
import { Circles } from '@components/Contact/ContactComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ProjectsLanding: React.FC<ProjectsLandingProps> = () => {
  const scrollText = "EXPLORE";
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <ProjectsContainer minHeight="90vh" ref={elementRef}>
      <AnimatedContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem" isVisible={isIntersecting}>
        <ProjectsTitle>
          My Projects<span>.</span>
        </ProjectsTitle>
        <Circles top="15%" left="50%" width="40%" height="50%"/>
        <ProjectsText>
          Explore a collection of projects that highlight my{" "}
          <b>frontend expertise</b> and passion for crafting engaging digital
          experiences. From sleek web interfaces to
          <b>responsive, user-friendly designs</b>, each project reflects a
          challenge I've transformed into an opportunity to create something
          <b> innovative, precise, and impactful.</b>
        </ProjectsText>
      </AnimatedContentWrapper>
      <ProjectsScrollSection>
        <ScrollText>
          {scrollText.split("").map((letter, index) => (
            <BouncingLetter key={index} delay={index * 0.1}>
              {letter}
            </BouncingLetter>
          ))}
        </ScrollText>
      </ProjectsScrollSection>
    </ProjectsContainer>
  );
};

export default ProjectsLanding; 