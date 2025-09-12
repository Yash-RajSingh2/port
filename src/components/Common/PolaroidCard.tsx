import React from "react";
import styled from "styled-components";
import { AnimatedCard } from "./SectionComponents";

const PolaroidWrapper = styled(AnimatedCard)`
  background: white;
  padding: 20px 20px 60px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transform: ${(props) =>
    props.isVisible
      ? `rotate(${Math.random() * 6 - 3}deg) translateY(0)`
      : `rotate(${Math.random() * 6 - 3}deg) translateY(30px)`};
  transition: all 0.3s ease;
  cursor: pointer;
  animation-delay: ${(props) => props.delay || 0}s;
  &:hover {
    transform: rotate(0deg) translateY(-10px) scale(1.05);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }

  &:nth-child(even) {
    transform: ${(props) =>
      props.isVisible
        ? `rotate(${Math.random() * 6 - 3}deg) translateY(0)`
        : `rotate(${Math.random() * 6 - 3}deg) translateY(30px)`};
  }

  &:nth-child(odd) {
    transform: ${(props) =>
      props.isVisible
        ? `rotate(${-(Math.random() * 6 - 3)}deg) translateY(0)`
        : `rotate(${-(Math.random() * 6 - 3)}deg) translateY(30px)`};
  }

  @media (max-width: 768px) {
    padding: 12px 12px 40px 12px;

    &:hover {
      transform: rotate(0deg) translateY(-5px) scale(1.02);
    }
  }
`;

const PolaroidImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border: none;
  display: block;
`;

interface PolaroidCardProps {
  src: string;
  alt: string;
  isVisible?: boolean;
  delay?: number;
  width?: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  src,
  alt,
  isVisible,
  delay,
  width = "40%",
}) => {
  return (
    <PolaroidWrapper isVisible={isVisible} delay={delay} width={width}>
      <PolaroidImage src={src} alt={alt} />
    </PolaroidWrapper>
  );
};
