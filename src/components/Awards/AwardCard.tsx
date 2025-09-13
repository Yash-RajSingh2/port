import React from "react";
import styled from "styled-components";
import { AwardImageSection } from "./AwardImageSection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CardContainer = styled.div<{
  $isReversed: boolean;
  isVisible?: boolean;
  delay?: number;
}>`
  width: 60%;
  aspect-ratio: 3/2;
  display: flex;
  flex-direction: column;
  align-self: ${(props) => (props.$isReversed ? "flex-end" : "flex-start")};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 16px;
  border: 1px solid var(--subtext);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "60px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Description = styled.p`
  background: var(--duo);
  color: var(--background);
  padding: 3rem 1.5rem 1.5rem;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  border-radius: 0 0 16px 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 2.5rem 1.2rem 1.2rem;
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem 0.5rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

interface Award {
  name: string;
  desc: string;
  image: string;
}

interface AwardCardProps {
  award: Award;
  index: number;
  threshold?: number;
  rootMargin?: string;
}

export const AwardCard: React.FC<AwardCardProps> = ({
  award,
  index,
  threshold = 0.2,
  rootMargin = "0px 0px -100px 0px",
}) => {
  const isReversed = index % 2 === 1; // Alternate alignment

  // Each award card gets its own intersection observer
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <CardContainer
      ref={elementRef}
      data-index={index}
      $isReversed={isReversed}
      isVisible={isIntersecting}
      delay={0}
    >
      <AwardImageSection
        src={award.image}
        alt={award.name}
        name={award.name}
        isVisible={isIntersecting}
      />
      <Description>{award.desc}</Description>
    </CardContainer>
  );
};
