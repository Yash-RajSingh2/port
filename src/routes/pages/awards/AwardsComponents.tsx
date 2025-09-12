import styled, { keyframes, css } from 'styled-components';
import { AboutTitle, AboutText } from '@components/About/AboutComponents';
import { ScrollSection } from '@components/Landing/LandingComponents';
import { Container } from '@components/Common/CommonComponents';
import React from 'react';

// Custom Circles component that doesn't cause height issues
interface AwardsCirclesProps {
  top?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
}

export const AwardsCircles: React.FC<AwardsCirclesProps> = ({ 
  top = "0", 
  left,
  right,
  width = "30%", 
  height = "20%" 
}) => {
  // Generate a unique ID using timestamp and random number
  const patternId = `circle-dots-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  
  return (
    <div
      style={{
        position: "absolute",
        width: width,
        height: height,
        zIndex: -1,
        pointerEvents: "none",
        top,
        left,
        right,
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="20"
            height="18"
          >
            <circle
              cx="6"
              cy="6"
              r="2"
              fill="var(--subtext)"
              opacity="0.3"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

// Custom DiagonalLines component with positioning props
interface PositionedDiagonalLinesProps {
  top?: string;
  right?: string;
  left?: string;
  transform?: string;
  opacity?: number;
}

export const PositionedDiagonalLines: React.FC<PositionedDiagonalLinesProps> = ({
  top = "0",
  right,
  left,
  transform = "rotate(0deg)",
  opacity = 1
}) => {
  // Generate a unique ID using timestamp and random number
  const patternId = `diagonal-stripes-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  
  return (
    <div
      style={{
        position: "absolute",
        width: "50vw",
        height: "20rem",
        zIndex: -1,
        pointerEvents: "none",
        marginLeft: "-10rem",
        top,
        right,
        left,
        transform,
        opacity,
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="20"
              stroke="var(--subtext)"
              strokeWidth="4"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export const AwardsContainer = styled(Container)`
  margin-top: 3rem;
  position: relative;
`;

export const AwardsTitle = styled(AboutTitle)`
  span{
    color: var(--subtext);
  }
  &::after {
    bottom: calc(
      -10px - 2rem
    );
  }
`;

export const AwardsText = styled(AboutText)`
  color: var(--text);
  max-width: 800px;
  font-size: 1.4rem;
  line-height: 1.65;
  margin-top: 60px;
`;

export const AwardsScrollSection = styled(ScrollSection)`
  margin-top: 4rem;
`;


const imageLoaderSlideUp = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
`;

export const AwardsListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  margin-top: 5vh;
  position: relative;
  
  @media (max-width: 768px) {
    gap: 6rem;
    margin-top: 3vh;
  }
`;

export const MoreComingMessage = styled(AwardsTitle)`
  margin: 6rem auto 2%;

  font-size: 2.2rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 3rem;

    p {
      font-size: 1.1rem;
    }
  }
`;

export const AwardItemContainer = styled.div<{ $isReversed: boolean }>`
  width: 60%;
  aspect-ratio: 3/2;
  display: flex;
  flex-direction: column;

  align-self: ${(props) => (props.$isReversed ? "flex-end" : "flex-start")};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
  border: 1px solid var(--subtext);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }


  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
  }
`;

export const AwardImageSection = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: -2rem;
  z-index: 2;
  flex: 1;
`;

export const AwardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const AwardImageLoader = styled.div<{ $isLoaded: boolean; $shouldAnimate: boolean }>`

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: var(--subtext);
  z-index: 3;

  ${props => props.$isLoaded && props.$shouldAnimate && css`
    animation: ${imageLoaderSlideUp} 0.3s ease-out 0.15s forwards;

  `}
  transform-origin: bottom;
`;

export const AwardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 16px 16px 0 0;
  transition: transform 0.3s ease;
`;

export const AwardNameOverlay = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 0;
  background: var(--duo);
  color: var(--background);
  padding: 0.8rem 2rem 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 4;
  border-radius: 0 12px 0 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 0;
    width: 16px;
    height: 16px;
    background: var(--duo);
    border-radius: 0 0 16px 0;
    transform: rotate(180deg);
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 8px;
    width: 16px;
    height: 16px;
    background: var(--background);
    border-radius: 0 0 16px 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem 0.6rem 1.2rem;
  }
`;

export const AwardDescription = styled.p`
  background: var(--duo);
  color: var(--background);
  padding: 3rem 1.5rem 1.5rem;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  border-radius: 0 0 16px 16px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.2rem 1.2rem;
    font-size: 1rem;
  }
`
// Animated versions for intersection observer
export const AnimatedAwardsListContainer = styled(AwardsListContainer)<{ isVisible?: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  transition: opacity 0.4s ease, transform 0.4s ease;
`;

export const AnimatedAwardItemContainer = styled(AwardItemContainer)<{ isVisible?: boolean; delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '60px'});
  transition: opacity 0.6s ease ${props => props.delay || 0}s, transform 0.6s ease ${props => props.delay || 0}s;
`;

export const AnimatedMoreComingMessage = styled(MoreComingMessage)<{ isVisible?: boolean; delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '40px'});
  transition: opacity 0.4s ease ${props => props.delay || 0}s, transform 0.4s ease ${props => props.delay || 0}s;
`; 