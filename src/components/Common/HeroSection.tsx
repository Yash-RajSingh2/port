import React from 'react';
import { Container, AnimatedContentWrapper } from './CommonComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface HeroSectionProps {
  minHeight?: string;
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  minHeight = "90vh",
  children,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <Container minHeight={minHeight} ref={elementRef}>
      <AnimatedContentWrapper flexDirection="row" isVisible={isIntersecting}>
        {children}
      </AnimatedContentWrapper>
    </Container>
  );
}; 