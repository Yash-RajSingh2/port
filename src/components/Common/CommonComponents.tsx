import React from 'react';
import styled from 'styled-components';

export const Container = styled.section<{ 
  minHeight?: string; 
  maxHeight?: string;
  topMargin?: string;
  padding?: string;
  hasOverflow?: boolean;
  isRelative?: boolean;
}>`
  width: 100%;
  min-height: ${props => props.minHeight || '50vh'};
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  margin-top: ${props => props.topMargin || '0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '0 2rem 2rem'};
  ${props => props.isRelative && 'position: relative;'}
  ${props => props.hasOverflow && 'overflow: hidden;'}
  background: var(--background);
`;

export const ContentWrapper = styled.div<{ flexDirection?: 'row' | 'column', alignItems?: 'center' | 'flex-start' , gap?: string }>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  gap: ${props => props.gap || '4rem'};
  max-width: 1200px;
  width: 100%;
  overflow-x: hidden;
`;

export const Button = styled.p`
  color: var(--text);
  z-index: 2;
  padding: 15px 45px;
  letter-spacing: 0.1rem;
  border: 3px solid var(--subtext);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 700;
  &:hover {
    background: var(--fill);
    color: var(--text);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--fill);
  }
`;

// Animated versions for intersection observer
export const AnimatedContainer = styled(Container)<{ isVisible?: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '50px'});
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

export const AnimatedContentWrapper = styled(ContentWrapper)<{ isVisible?: boolean, delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  transition: opacity 0.6s ease ${props => props.delay || 0}s, transform 0.6s ease ${props => props.delay || 0}s;
`;

export const AnimatedButton = styled(Button)<{ isVisible?: boolean, delay?: number }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: all 0.5s ease ${props => props.delay || 0}s;
`;

// Reusable Circles component for decorative backgrounds
interface CirclesProps {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
}

export const Circles: React.FC<CirclesProps> = ({ 
  top = "-8%", 
  left = "-40%", 
  width = "40%", 
  height = "10%" 
}) => {
  // Generate a unique ID using timestamp and random number to avoid conflicts
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
      }}
    >
      <svg width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="20"
            height="18"
          >
            <circle cx="6" cy="6" r="2" fill="var(--subtext)" opacity="0.3" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}; 