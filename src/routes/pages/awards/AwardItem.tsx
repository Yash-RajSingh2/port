import React, { useState, useEffect } from 'react';
import type { Award } from '@/data/awards';
import {
  AnimatedAwardItemContainer,
  AwardImageSection,
  AwardImageContainer,
  AwardImageLoader,
  AwardImage,
  AwardNameOverlay,
  AwardDescription,
} from './AwardsComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';


interface AwardItemProps {
  award: Award;
  index: number;
}

export const AwardItem: React.FC<AwardItemProps> = ({ award, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const [shouldAnimateLoader, setShouldAnimateLoader] = useState(false);
  const isReversed = index % 2 === 1; // Alternate alignment

  // Each award item gets its own intersection observer
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });


  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  // Always show loader initially, then animate it away after element is visible and image is loaded
  useEffect(() => {
    if (isIntersecting && imageLoaded) {
      // Add a small delay to ensure the loader is visible initially
      const timer = setTimeout(() => {
        setShouldAnimateLoader(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, imageLoaded]);

  return (
    <AnimatedAwardItemContainer 
      ref={elementRef}
      data-index={index} 
      $isReversed={isReversed}
      isVisible={isIntersecting}
      delay={0}
    >
      <AwardImageSection>
        <AwardImageContainer>
          <AwardImageLoader 
            $isLoaded={imageLoaded} 
            $shouldAnimate={shouldAnimateLoader}
          />

          <AwardImage
            src={award.image}
            alt={award.name}
            onLoad={handleImageLoad}
          />
          <AwardNameOverlay>
            {award.name}
          </AwardNameOverlay>
        </AwardImageContainer>
      </AwardImageSection>
      <AwardDescription>
        {award.desc}
      </AwardDescription>
    </AnimatedAwardItemContainer>
  );
}; 