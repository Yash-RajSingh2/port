import React, { useState, useEffect } from 'react';
import { 
  AnimatedProjectItemContainer, 
  ProjectImageSection, 
  ProjectImageContainer,
  ProjectImageLoader,
  ProjectImage, 
  ProjectContentSection, 
  ProjectTitle, 
  ProjectDescription, 
  ProjectTechnologies, 
  ProjectLinks, 
  ProjectLink, 
  TechnologyTag 
} from './ProjectsComponents';
import type { ProjectItemProps } from './Projects.interfaces';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldAnimateLoader, setShouldAnimateLoader] = useState(false);
  const isReversed = index % 2 !== 0;

  // Each project item gets its own intersection observer
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Always show loader initially, then animate it away after element is visible and image is loaded
  useEffect(() => {
    if (isIntersecting && imageLoaded) {
      // Add a small delay to ensure the loader is visible initially
      const timer = setTimeout(() => {
        setShouldAnimateLoader(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, imageLoaded]);

  return (
    <AnimatedProjectItemContainer 
      ref={elementRef}
      $isReversed={isReversed} 
      isVisible={isIntersecting} 
      delay={0.1}
    >
      <ProjectImageSection>
        <ProjectImageContainer>
          <ProjectImage 
            src={project.imageSrc} 
            alt={project.title}
            onLoad={handleImageLoad}
          />
          <ProjectImageLoader 
            $isLoaded={imageLoaded} 
            $shouldAnimate={shouldAnimateLoader} 
          />
        </ProjectImageContainer>
      </ProjectImageSection>

      <ProjectContentSection>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        {project.technologies && (
          <ProjectTechnologies>
            {project.technologies.map((tech, techIndex) => (
              <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
            ))}
          </ProjectTechnologies>
        )}
        
        <ProjectLinks>
          {project.liveUrl && (
            <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </ProjectLink>
          )}
          {project.githubUrl && (
            <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContentSection>
    </AnimatedProjectItemContainer>
  );
};
