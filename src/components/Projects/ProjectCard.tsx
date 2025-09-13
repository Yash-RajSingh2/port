import React from "react";
import styled from "styled-components";
import { ProjectImageSection } from "./ProjectImageSection";
import { ProjectContentSection } from "./ProjectContentSection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CardContainer = styled.div<{
  $isReversed: boolean;
  isVisible?: boolean;
  delay?: number;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5%;
  flex-direction: ${(props) => (props.$isReversed ? "row-reverse" : "row")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  threshold?: number;
  rootMargin?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  threshold = 0.2,
  rootMargin = "0px 0px -100px 0px",
}) => {
  const isReversed = index % 2 !== 0;

  // Each project card gets its own intersection observer
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <CardContainer
      ref={elementRef}
      $isReversed={isReversed}
      isVisible={isIntersecting}
      delay={0.1}
    >
      <ProjectImageSection
        src={project.imageSrc}
        alt={project.title}
        isVisible={isIntersecting}
      />
      <ProjectContentSection
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
      />
    </CardContainer>
  );
};
