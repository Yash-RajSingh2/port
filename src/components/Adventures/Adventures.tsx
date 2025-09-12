import React from "react";
import {
  ContentWrapper,
  Container,
} from "@/components/Common/CommonComponents";
import {
  SectionTitle,
  CardsContainer,
} from "@/components/Common/SectionComponents";
import { PolaroidCard } from "@/components/Common/PolaroidCard";
import { adventures } from "@/data/adventure";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Adventures: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <Container
      minHeight="90vh"
      padding="4rem 2rem"
      isRelative
      hasOverflow
      ref={elementRef}
    >
      <ContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem">
        <SectionTitle isVisible={isIntersecting} alignment="left">
          Peek into my adventures<span>.</span>
        </SectionTitle>
        <CardsContainer isVisible={isIntersecting} layout="flex">
          {adventures.map((adventure, index) => (
            <PolaroidCard
              key={index}
              src={adventure}
              alt={`Adventure ${index + 1}`}
              isVisible={isIntersecting}
              delay={0.1 + index * 0.1}
              width="40%"
            />
          ))}
        </CardsContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Adventures;
