import React from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

const ListContainer = styled.div<{ isVisible?: boolean }>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16rem;
  margin-top: 30vh;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
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

interface ProjectsListProps {
  projects: Project[];
  isVisible?: boolean;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  isVisible,
}) => {
  return (
    <ListContainer isVisible={isVisible}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </ListContainer>
  );
};
