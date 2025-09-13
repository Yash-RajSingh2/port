import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ImageSection = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: -2rem;
  z-index: 2;
  flex: 1;
`;

const ImageContainer = styled.div`
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

const ImageLoader = styled.div<{ $isLoaded: boolean; $shouldAnimate: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: var(--subtext);
  z-index: 3;
  ${(props) =>
    props.$isLoaded &&
    props.$shouldAnimate &&
    css`
      animation: imageLoaderSlideUp 0.3s ease-out 0.15s forwards;
    `}
  transform-origin: bottom;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 16px 16px 0 0;
  transition: transform 0.3s ease;
`;

const NameOverlay = styled.div`
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
    content: "";
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
    content: "";
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
  
  @media (max-width: 500px) {
    bottom: 0rem;
    padding: 0.4rem 1rem 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

interface AwardImageSectionProps {
  src: string;
  alt: string;
  name: string;
  isVisible?: boolean;
}

export const AwardImageSection: React.FC<AwardImageSectionProps> = ({
  src,
  alt,
  name,
  isVisible,
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
        <ImageLoader
          $isLoaded={imageLoaded}
          $shouldAnimate={shouldAnimateLoader}
        />
        <Image src={src} alt={alt} onLoad={handleImageLoad} />
        <NameOverlay>{name}</NameOverlay>
      </ImageContainer>
    </ImageSection>
  );
};
