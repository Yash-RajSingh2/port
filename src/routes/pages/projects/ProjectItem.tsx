import React, { useState } from 'react';
import { 
  ProjectItemContainer, 
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

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isReversed = index % 2 !== 0;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <ProjectItemContainer $isReversed={isReversed}>
      <ProjectImageSection>
        <ProjectImageContainer>
          <ProjectImage 
            src={project.imageSrc} 
            alt={project.title}
            onLoad={handleImageLoad}
          />
          <ProjectImageLoader $isLoaded={imageLoaded} />
        </ProjectImageContainer>
      </ProjectImageSection>

      <ProjectContentSection>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>

        {project.technologies && project.technologies.length > 0 && (
          <ProjectTechnologies>
            {project.technologies.map((tech, idx) => (
              <TechnologyTag key={idx}>{tech}</TechnologyTag>
            ))}
          </ProjectTechnologies>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <ProjectLinks>
            {project.liveUrl && (
              <ProjectLink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </ProjectLink>
            )}
            {project.githubUrl && (
              <ProjectLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </ProjectLink>
            )}
          </ProjectLinks>
        )}
      </ProjectContentSection>
    </ProjectItemContainer>
  );
};
