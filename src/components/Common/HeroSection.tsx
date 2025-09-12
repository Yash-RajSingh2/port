import React from "react";
import styled from "styled-components";
import { Container, AnimatedContentWrapper } from "./CommonComponents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface HeroSectionProps {
  minHeight?: string;
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  responsiveFlexDirection?: boolean; // New prop for responsive behavior
}

const ResponsiveAnimatedContentWrapper = styled(AnimatedContentWrapper)<{
  $enableResponsive?: boolean;
}>`
  ${(props) =>
    props.$enableResponsive &&
    `
    @media (max-width: 1000px) {
      flex-direction: column-reverse;
      margin-top: 10rem;
      min-height: 60vh;
    }
    @media (min-width: 600px) and (max-width: 750px) {
      min-height: 30vh;
      margin-top: 5rem;
    }
       @media (max-width: 599px) {
      min-height: 50vh;
       margin-top: 2rem;
    }
    @media (max-width: 500px) {
      margin-top: 0;
    }
  `}
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
  minHeight = "90vh",
  children,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  responsiveFlexDirection = false,
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const WrapperComponent = responsiveFlexDirection
    ? ResponsiveAnimatedContentWrapper
    : AnimatedContentWrapper;

  return (
    <Container minHeight={minHeight} ref={elementRef}>
      <WrapperComponent
        flexDirection="row"
        isVisible={isIntersecting}
        $enableResponsive={responsiveFlexDirection}
      >
        {children}
      </WrapperComponent>
    </Container>
  );
};
