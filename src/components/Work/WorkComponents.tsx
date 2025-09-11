import styled from 'styled-components';
import { Button } from '@components/Common/CommonComponents';

export const WorkImage = styled.img`
  width: 140px;
  padding: 1.5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 12px;
`;

export const WorkInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const WorkHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
`;

export const WorkTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: var(--text);
`;

export const JobTitle = styled.span`
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

export const Company = styled.span`
  color: var(--subtext);
`;

export const Period = styled.span`
  color: var(--subtext);
`;

export const Description = styled.li`
  color: var(--text);
  line-height: 1.7;
`; 
export const ExperienceCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  &:first-of-type {
    margin-top: -2rem;
  }
  position: relative;


  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3rem;
    height: 1px;
    border: none;
    background: var(--text);
    opacity: 0.275;
    margin-top: 1rem;
  }
`;

export const SeeMoreButton = styled(Button)`
  align-self: center;
`;

// Animated versions for intersection observer
export const AnimatedExperienceCard = styled(ExperienceCard)<{ isVisible?: boolean; delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '40px'});
  transition: opacity 0.8s ease ${props => props.delay || 0}s, transform 0.8s ease ${props => props.delay || 0}s;
`;

export const AnimatedSeeMoreButton = styled(SeeMoreButton)<{ isVisible?: boolean; delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: all 0.5s ease ${props => props.delay || 0}s;
`;

// Individual animated experience card for individual intersection observers
export const IndividualAnimatedExperienceCard = styled(ExperienceCard)<{ isVisible?: boolean; delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '40px'});
  transition: opacity 0.6s ease ${props => props.delay || 0}s, transform 0.6s ease ${props => props.delay || 0}s;
`;
