import React from "react";
import styled from "styled-components";

const ContentSection = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.h3`
  color: var(--text);
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: var(--text);
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  @media (max-width: 500px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const TechnologyTag = styled.span`
  background: var(--duo);
  color: var(--background);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Link = styled.a`
  color: var(--subtext);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2px solid var(--subtext);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--subtext);
    color: var(--bg);
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;

interface ProjectContentSectionProps {
  title: string;
  description: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectContentSection: React.FC<ProjectContentSectionProps> = ({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  return (
    <ContentSection>
      <Title>{title}</Title>
      <Description>{description}</Description>

      {technologies && technologies.length > 0 && (
        <Technologies>
          {technologies.map((tech, index) => (
            <TechnologyTag key={index}>{tech}</TechnologyTag>
          ))}
        </Technologies>
      )}

      <Links>
        {liveUrl && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        )}
      </Links>
    </ContentSection>
  );
};
