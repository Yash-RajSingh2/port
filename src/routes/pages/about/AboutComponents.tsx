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

  @media (max-width: 500px) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
`;

export const AboutScrollSection = styled(ScrollSection)`
  margin-top: 4rem;
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
  
  /* Use flexbox for mobile to prevent overlapping */
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    padding: 1rem;
    min-height: 50vh;
    height: auto;
  }
  
  @media (max-width: 500px) {
    gap: 0.8rem;
    padding: 0.5rem;
  }
`;

export const SkillCard = styled.div<{
  top?: string;
  left?: string;
  animationDelay: string;
  isVisible?: boolean;
}>`
  /* Absolute positioning for desktop cloud effect */
  position: absolute;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  background: transparent;
  color: var(--text);
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  user-select: none;
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

  /* Switch to relative positioning for mobile flexbox */
  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
    flex-shrink: 0;
  }
  
  @media (max-width: 500px) {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }
`;
