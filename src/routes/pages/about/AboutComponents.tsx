import styled from "styled-components";
import { AboutTitle, AboutText } from "@components/About/AboutComponents";
import { ScrollSection } from "@components/Landing/LandingComponents";
import { Container } from "@components/Common/CommonComponents";

export const AboutContainer = styled(Container)`
  margin-top: 3rem;
  position: relative;
`;

export const AboutLandingTitle = styled(AboutTitle)`
  span {
    color: var(--subtext);
  }
  &::after {
    bottom: calc(-10px - 2rem);
  }
`;

export const AboutLandingText = styled(AboutText)`
  color: var(--text);
  max-width: 800px;
  font-size: 1.4rem;
  line-height: 1.65;
  margin-top: 60px;
`;

export const AboutScrollSection = styled(ScrollSection)`
  margin-top: 4rem;
`;

// Skills Section Components
export const SkillsContainer = styled(Container)`
  min-height: 80vh;
  max-height: 85vh;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  margin-top: 10rem;
`;

export const SkillsTitle = styled(AboutLandingTitle)`
  text-align: left !important;
  margin-bottom: 4rem;
  align-self: flex-start;

  &::after {
    left: 0 !important;
    transform: translateX(0) !important;
  }
`;

export const AdventuresTitle = styled(AboutLandingTitle)<{
  isVisible?: boolean;
  delay?: number;
}>`
  text-align: left !important;
  align-self: flex-start;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;

  &::after {
    left: 0 !important;
    transform: translateX(0) !important;
  }
`;

// Adventures Cards Components
export const AdventuresGrid = styled.div<{ isVisible?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 4rem;
  width: 100%;
  margin: 5rem 0 1rem;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition:
    opacity 0.8s ease 0.2s,
    transform 0.8s ease 0.2s;

  @media (max-width: 768px) {
    gap: 1.5rem;
    justify-content: center;
  }
`;

export const PolaroidCard = styled.div<{ isVisible?: boolean; delay?: number }>`
  background: white;
  padding: 15px 15px 50px 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transform: rotate(${Math.random() * 6 - 3}deg);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 40%;
  flex-shrink: 0;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible
      ? `rotate(${Math.random() * 6 - 3}deg) translateY(0)`
      : `rotate(${Math.random() * 6 - 3}deg) translateY(30px)`};
  transition: all 0.6s ease ${(props) => props.delay || 0}s;

  &:hover {
    transform: rotate(0deg) translateY(-10px) scale(1.05);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }

  &:nth-child(even) {
    transform: rotate(${Math.random() * 6 - 3}deg);
  }

  &:nth-child(odd) {
    transform: rotate(${Math.random() * 6 - 3}deg);
  }

  @media (max-width: 768px) {
    padding: 12px 12px 40px 12px;
    width: 200px;

    &:hover {
      transform: rotate(0deg) translateY(-5px) scale(1.02);
    }
  }
`;

export const PolaroidImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border: none;
  display: block;
`;

export const SkillsCloudContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillCard = styled.div<{
  top: string;
  left: string;
  animationDelay: string;
  isVisible?: boolean;
}>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: transparent;
  color: var(--text);
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  animation-delay: ${(props) => props.animationDelay};

  /* Simple rounded border styling */
  border: 2px solid var(--subtext);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(${(props) => (props.isVisible ? "-5px" : "25px")});
    background: var(--duo);
    color: var(--background);
    border-color: var(--duo);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
`;
