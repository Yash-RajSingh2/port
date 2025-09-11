import React from 'react';
import type { AwardsProps } from './Awards.interfaces';
import Layout from '@components/Layout/Layout';
import AwardsLanding from '@components/AwardsLanding/AwardsLanding';
import {
  AnimatedAwardsListContainer,
  PositionedDiagonalLines,
  AwardsCircles,
  AnimatedMoreComingMessage,
} from "./AwardsComponents.tsx";
import { awards } from '@/data/awards';
import { AwardItem } from './AwardItem';
import { Container, AnimatedContentWrapper } from '@/components/Common/CommonComponents.tsx';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Awards: React.FC<AwardsProps> = () => {
  const { elementRef: listRef, isIntersecting: listVisible } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '0px 0px -200px 0px',
  });

  const { elementRef: messageRef, isIntersecting: messageVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <Layout>
      <AwardsLanding />
      <Container style={{ padding: '0 2rem 0' }} ref={listRef}>
        <AnimatedContentWrapper
          flexDirection="column"
          alignItems="flex-start"
          gap="2rem"
          isVisible={listVisible}
        >
          <AnimatedAwardsListContainer isVisible={listVisible}>
            <PositionedDiagonalLines top="2%" right="5%" />
            <AwardsCircles top="15%" left="-10%" width="30%" height="10%" />
            <AwardsCircles top="38%" right="5%" width="30%" height="10%" />
            <PositionedDiagonalLines top="50%" left="10%" opacity={0.4} />
            <AwardsCircles top="70%" left="80%" width="25%" height="10%" />
            <PositionedDiagonalLines top="85%" right="10%" opacity={0.6} />
            
            {awards.map((award, index) => (
              <AwardItem
                key={`${award.name}-${index}`}
                award={award}
                index={index}
              />
            ))}
          </AnimatedAwardsListContainer>
          
          <AnimatedMoreComingMessage 
            ref={messageRef}
            isVisible={messageVisible}
            delay={0.3}
          >
            More achievements brewing in the pipeline
          </AnimatedMoreComingMessage>
        </AnimatedContentWrapper>
      </Container>
    </Layout>
  );
};

export default Awards; 