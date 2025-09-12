import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const imageLoaderSlideUp = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
`;

const ImageSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid var(--subtext);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ImageLoader = styled.div<{ $isLoaded: boolean; $shouldAnimate: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: var(--subtext);
  z-index: 2;
  ${props => props.$isLoaded && props.$shouldAnimate && css`
    animation: ${imageLoaderSlideUp} 0.3s ease-out 0.1s forwards;
  `}
  transform-origin: bottom;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16/9;
  object-fit: center;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

interface ProjectImageSectionProps {
  src: string;
  alt: string;
  isVisible?: boolean;
}

export const ProjectImageSection: React.FC<ProjectImageSectionProps> = ({
  src,
  alt,
  isVisible
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldAnimateLoader, setShouldAnimateLoader] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Always show loader initially, then animate it away after element is visible and image is loaded
  useEffect(() => {
    if (isVisible && imageLoaded) {
      // Add a small delay to ensure the loader is visible initially
      const timer = setTimeout(() => {
        setShouldAnimateLoader(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, imageLoaded]);

  return (
    <ImageSection>
      <ImageContainer>
        <Image 
          src={src} 
          alt={alt}
          onLoad={handleImageLoad}
        />
        <ImageLoader 
          $isLoaded={imageLoaded} 
          $shouldAnimate={shouldAnimateLoader} 
        />
      </ImageContainer>
    </ImageSection>
  );
}; 