import React from 'react';
import { Container, ContentWrapper } from '@/components/Common/CommonComponents';
import { 
  AdventuresTitle, 
  AdventuresGrid, 
  PolaroidCard, 
  PolaroidImage 
} from '@/routes/pages/about/AboutComponents';
import { adventures } from '@/data/adventure';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AdventuresProps {}

const Adventures: React.FC<AdventuresProps> = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <Container minHeight="80vh" ref={elementRef}>
      <ContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem">
        <AdventuresTitle isVisible={isIntersecting}>
          A peek into my adventures<span>.</span>
        </AdventuresTitle>
        <AdventuresGrid isVisible={isIntersecting}>
          {adventures.map((adventure, index) => (
            <PolaroidCard 
              key={index} 
              isVisible={isIntersecting} 
              delay={0.1 + (index * 0.1)}
            >
              <PolaroidImage src={adventure} alt={`Adventure ${index + 1}`} />
            </PolaroidCard>
          ))}
        </AdventuresGrid>
      </ContentWrapper>
    </Container>
  );
};

export default Adventures; 