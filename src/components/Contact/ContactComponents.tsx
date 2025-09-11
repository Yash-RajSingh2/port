import styled from 'styled-components';
import React from 'react';

export const ContactContainer = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 4rem 2rem;
  margin: 16rem auto 2rem;
  position: relative;
`;

export const ContactTitle = styled.h2`
  font-family: Bitter;
  font-size: 48px;
  color: var(--text);
  margin: 0;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s ease-out forwards;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(100%);
    width: 60%;
    height: 3px;
    background: var(--subtext);
    opacity: 0;
    animation: borderGrow 0.6s ease-out 0.4s forwards;
    transform-origin: center;
    animation-delay: 1s;
  }

  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes borderGrow {
    0% {
      opacity: 0;
      transform: translateX(100%) scaleX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(0%) scaleX(1);
    }
  }
`;

export const ContactDescription = styled.p`
  font-family: Bitter;
  font-size: 18px;
  color: var(--text);
  line-height: 1.8;
  margin: 0;
  max-width: 600px;
  text-align: left;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s ease-out 0.6s forwards;
`;

export const ContactButton = styled.button`
  color: var(--line);
  padding: 15px 45px;
  letter-spacing: 0.1rem;
  border: 3px solid var(--line);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 700;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s ease-out 0.8s forwards;
  
  &:hover {
    background: var(--fill);
    color: var(--bg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--fill);
  }
`;

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
  height = "70%" 
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        top,
        left,
      }}
    >
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circle-dots"
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

        <rect width="100%" height="100%" fill="url(#circle-dots)" />
      </svg>
    </div>
  );
}; 