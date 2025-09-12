import styled from "styled-components";
import { Button } from "@components/Common/CommonComponents";

export const WorkImage = styled.img`
  width: 140px;
  padding: 1.5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 12px;
  @media (max-width: 1000px) {
    width: 100px;
    padding: 1rem;
  }
  @media (max-width: 500px) {
    width: 65px;
  }
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
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
  }
`;

export const WorkTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: var(--text);
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const JobTitle = styled.span`
  font-weight: 800;
  margin-bottom: 0.5rem;
  @media (max-width: 500px) {
    font-size: 1.125rem;
  }
`;

export const Company = styled.span`
  color: var(--subtext);
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const Period = styled.span`
  color: var(--subtext);
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const Description = styled.li`
  color: var(--text);
  line-height: 1.7;
  @media (max-width: 1224px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (max-width: 500px) {
    font-size: 0.75rem;
    line-height: 1.5;
  }
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

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SeeMoreButton = styled(Button)`
  align-self: center;
`;

// Animated versions for intersection observer
export const AnimatedExperienceCard = styled(ExperienceCard)<{
  isVisible?: boolean;
  delay?: number;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition:
    opacity 0.8s ease ${(props) => props.delay || 0}s,
    transform 0.8s ease ${(props) => props.delay || 0}s;
`;

export const AnimatedSeeMoreButton = styled(SeeMoreButton)<{
  isVisible?: boolean;
  delay?: number;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "20px")});
  transition: all 0.5s ease ${(props) => props.delay || 0}s;
  @media (max-width: 500px) {
    padding: 8px 24px;
    font-size: 0.75rem;
    margin-top: 1rem;
    border-width: 1.5px;
  }
`;

// Individual animated experience card for individual intersection observers
export const IndividualAnimatedExperienceCard = styled(ExperienceCard)<{
  isVisible?: boolean;
  delay?: number;
  isFirstCard?: boolean;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;

  margin-top: ${(props) => (props.isFirstCard ? "1rem" : "0")};

  @media (max-width: 500px) {
    margin-top: ${(props) => (props.isFirstCard ? "0.5rem" : "0")};
  }
`;
