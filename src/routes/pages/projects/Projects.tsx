import React from 'react';
import type { ProjectsProps } from './Projects.interfaces';
import Layout from '@components/Layout/Layout';
import ProjectsLanding from '@components/ProjectsLanding/ProjectsLanding';
import Contact from '@components/Contact/Contact';
import { ProjectsList } from '@components/Projects/ProjectsList';
import { projects } from '@/data/projects';
import { Container, AnimatedContentWrapper } from '@/components/Common/CommonComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Projects: React.FC<ProjectsProps> = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '0px 0px -200px 0px',
  });

  return (
    <Layout>  
      <ProjectsLanding />
      <Container minHeight="80vh" ref={elementRef} topMargin="10rem"> 
        <AnimatedContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem" isVisible={isIntersecting}>
          <ProjectsList projects={projects} isVisible={isIntersecting} />
        </AnimatedContentWrapper>
      </Container>
      <Contact />
    </Layout>
  );
};

export default Projects; 