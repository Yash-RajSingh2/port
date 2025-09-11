import styled, { keyframes, css } from 'styled-components';
import { AboutTitle, AboutText } from '@components/About/AboutComponents';
import { ScrollSection } from '@components/Landing/LandingComponents';
import { Container } from '@components/Common/CommonComponents';

export const ProjectsContainer = styled(Container)`
  margin-top: 3rem; /* Add margin-top to the container */
  position: relative;
`;

export const ProjectsTitle = styled(AboutTitle)`
  span{
    color: var(--subtext);
  }
  &::after {
    bottom: calc(
      -10px - 2rem
    ); /* Keeps original -10px positioning and adds 2rem more space */
  }
`;

export const ProjectsText = styled(AboutText)`
  color: var(--text);
  max-width: 800px;
  transform: translateY(20px);
  animation: fadeSlideUp 0.8s ease-out 0.6s forwards;
  font-size: 1.4rem;
  line-height: 1.65;
  margin-top: 60px;

  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectsScrollSection = styled(ScrollSection)`
  margin-top: 4rem;
`;

const projectItemSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const imageLoaderSlideUp = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
`;

export const ProjectsListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16rem;
  margin-top: 30vh;
`;

export const ProjectItemContainer = styled.div<{ $isReversed: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5%;
  flex-direction: ${props => props.$isReversed ? 'row-reverse' : 'row'};
  opacity: 0;
  animation: ${projectItemSlideDown} 0.6s ease-out forwards;
  
  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  
  &:nth-child(n+5) {
    animation-delay: ${props => `${1.0 + (0.2 * ((props as any)['data-index'] || 0))}s`};
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProjectImageSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 12px;
`;

export const ProjectImageLoader = styled.div<{ $isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: var(--subtext);
  z-index: 2;
  ${props => props.$isLoaded && css`
    animation: ${imageLoaderSlideUp} 0.8s ease-out forwards;
  `}
  transform-origin: bottom;
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 3/2;
  object-fit: center;
  border-radius: 12px;
  border: 2px solid var(--subtext);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectContentSection = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ProjectTitle = styled.h3`
  color: var(--text);
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
`;

export const ProjectDescription = styled.p`
  color: var(--text);
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TechnologyTag = styled.span`
  background: var(--duo);
  color: var(--background);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProjectLink = styled.a`
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
`;
