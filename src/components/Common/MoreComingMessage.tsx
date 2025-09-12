import React from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const MessageContainer = styled.div<{ 
  isVisible?: boolean; 
  delay?: number; 
  hasButton?: boolean; 
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.hasButton ? 'space-between' : 'center'};
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 6rem auto 2%;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '40px'});
  transition: opacity 0.4s ease ${props => props.delay || 0}s, transform 0.4s ease ${props => props.delay || 0}s;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 3rem;
    text-align: center;
    gap: 1.5rem;
  }
`;

const MessageText = styled.h2`
  color: var(--text);
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;

  span {
    color: var(--subtext);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: calc(-10px - 1rem);
    left: 0;
    width: 100px;
    height: 4px;
    background: var(--duo);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ActionButton = styled.button`
  color: var(--text);
  background: transparent;
  border: 3px solid var(--subtext);
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  white-space: nowrap;

  &:hover {
    background: var(--subtext);
    color: var(--background);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--duo);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
`;

interface MoreComingMessageProps {
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const MoreComingMessage: React.FC<MoreComingMessageProps> = ({
  message,
  buttonText,
  onButtonClick,
  delay = 0.3,
  threshold = 0.3,
  rootMargin = '0px 0px -100px 0px'
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <MessageContainer 
      ref={elementRef}
      isVisible={isIntersecting}
      delay={delay}
      hasButton={!!buttonText}
    >
      <MessageText>
        {message}
      </MessageText>
      {buttonText && onButtonClick && (
        <ActionButton onClick={onButtonClick}>
          {buttonText}
        </ActionButton>
      )}
    </MessageContainer>
  );
}; 