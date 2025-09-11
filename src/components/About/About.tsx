import React from 'react';
import type { AboutProps } from './About.interfaces';
import {
  AboutTitle,
  AboutText,
} from "./AboutComponents";
import { Container, AnimatedContentWrapper, AnimatedButton } from "@components/Common/CommonComponents"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Resume from '@assets/Yash-Raj-Singh-Resume.pdf';

const About: React.FC<AboutProps> = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <Container minHeight="80vh" ref={elementRef}>
      <AnimatedContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem" isVisible={isIntersecting}>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I'm a passionate software engineer and a technophile with expertise in
          modern web technologies. I love creating beautiful, functional
          applications and I can use my technical prowess to solve any problem
          and create any wonder that you'd like -
          <span className="bold"> the wilder, the better.</span>
        </AboutText>
        <AnimatedButton 
          onClick={() => window.open(Resume, "_blank")} 
          isVisible={isIntersecting} 
          delay={0.3}
        >
          Resume
        </AnimatedButton>
      </AnimatedContentWrapper>
    </Container>
  );
};

export default About; 