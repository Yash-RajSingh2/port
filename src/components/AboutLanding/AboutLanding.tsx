import React from 'react';
import type { AboutLandingProps } from './AboutLanding.interfaces';
import { AnimatedContentWrapper } from '@components/Common/CommonComponents';
import {
  ScrollText,
  BouncingLetter,
} from "@components/Landing/LandingComponents";
import {
  AboutContainer,
  AboutLandingTitle,
  AboutLandingText,
  AboutScrollSection,
} from "@/routes/pages/about/AboutComponents";
import { Circles } from '@components/Contact/ContactComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AboutLanding: React.FC<AboutLandingProps> = () => {
  const scrollText = "DISCOVER";
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <AboutContainer minHeight="90vh" ref={elementRef}>
      <AnimatedContentWrapper
        flexDirection="column"
        alignItems="flex-start"
        gap="2rem"
        isVisible={isIntersecting}
      >
        <AboutLandingTitle>
          About Me<span>.</span>
        </AboutLandingTitle>
        <Circles top="15%" left="50%" width="40%" height="50%" />
        <AboutLandingText>
          I’m a <b>software engineer</b> with a passion for technology and
          problem-solving. Outside of work, I enjoy <b>gaming</b> and often take
          time to <b>explore</b> new places on a bike and <b>photography</b>, combining my love for
          adventure with the thrill of discovery.
        </AboutLandingText>
      </AnimatedContentWrapper>
      <AboutScrollSection>
        <ScrollText>
          {scrollText.split("").map((letter, index) => (
            <BouncingLetter key={index} delay={index * 0.1}>
              {letter}
            </BouncingLetter>
          ))}
        </ScrollText>
      </AboutScrollSection>
    </AboutContainer>
  );
};

export default AboutLanding; 