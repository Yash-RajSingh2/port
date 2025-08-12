import styled from 'styled-components';

export const AboutTitle = styled.h2`
  font-family: Bitter;
  font-size: 60px;
  color: var(--text);
  margin-top: 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s ease-out forwards;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40%;
    height: 3px;
    background: var(--subtext);
    opacity: 0;
    animation: borderGrow 0.6s ease-out 0.4s forwards;
    transform: scaleX(0);
    transform-origin: left;
  }

  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes borderGrow {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

export const AboutText = styled.p`
  font-family: Bitter;
  font-size: 18px;
  max-width: 50%;
  color: var(--text);
  line-height: 1.8;
  margin-top: 0.5rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s ease-out 0.6s forwards;

  .bold {
    font-weight: bold;
  }
`; 