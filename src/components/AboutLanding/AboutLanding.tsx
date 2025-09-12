import React from 'react';
import { Container, AnimatedContentWrapper } from '@components/Common/CommonComponents';
import { SectionTitle } from '@components/Common/SectionComponents';
import { AnimatedScrollText } from '@components/Common/AnimatedScrollText';
import { AboutLandingText } from "@/routes/pages/about/AboutComponents";
import { Circles } from '@components/Common/CommonComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AboutLanding: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <>
      <Container minHeight="90vh" topMargin="3rem" ref={elementRef}>
        <AnimatedContentWrapper
          flexDirection="column"
          alignItems="flex-start"
          gap="2rem"
          isVisible={isIntersecting}
        >
          <SectionTitle isVisible={isIntersecting} alignment="left">
            About Me<span style={{ color: 'var(--subtext)' }}>.</span>
          </SectionTitle>
          <Circles top="15%" left="50%" width="50%" height="80%" />
          <AboutLandingText>
            I'm a <b>software engineer</b> with a passion for technology and
            problem-solving. Outside of work, I enjoy <b>gaming</b> and often take
            time to <b>explore</b> new places on a bike and <b>photography</b>, combining my love for
            adventure with the thrill of discovery.
          </AboutLandingText>
        </AnimatedContentWrapper>
      <AnimatedScrollText text="DISCOVER" letterDelay={0.1} topMargin="10rem" />
      </Container>
    </>
  );
};

export default AboutLanding; 