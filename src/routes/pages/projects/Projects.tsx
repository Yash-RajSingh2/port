import React from 'react';
import type { ProjectsProps } from './Projects.interfaces';
import Layout from '@components/Layout/Layout';
import ProjectsLanding from '@components/ProjectsLanding/ProjectsLanding';
import Contact from '@components/Contact/Contact';
import {
  ProjectsListContainer,
} from "./ProjectsComponents.tsx";
import { projects } from '@/data/projects';
import { ProjectItem } from './ProjectItem';
import { Container, ContentWrapper } from '@/components/Common/CommonComponents.tsx';

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <Layout>  
      <ProjectsLanding />
       <Container minHeight="80vh">
      <ContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem">
      <ProjectsListContainer>
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </ProjectsListContainer>
      </ContentWrapper>
      </Container>
      <Contact />
    </Layout>
  );
};

export default Projects; 