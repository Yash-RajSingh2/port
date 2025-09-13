import styled, { keyframes, css } from "styled-components";

export const ContactContainer = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 4rem 2rem;
  margin: 16rem auto 2rem;
  position: relative;
  @media (max-width: 500px) {
    width: 90%;
    padding: 2rem 0.5rem;
  }
`;

const borderGrow = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%) scaleX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) scaleX(1);
  }
`;

export const ContactTitle = styled.h2`
  font-family: Bitter;
  font-size: 48px;
  color: var(--text);
  margin: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: translateX(100%);
    width: 60%;
    height: 3px;
    background: var(--subtext);
    opacity: 0;
    transform-origin: center;

    @media (max-width: 500px) {
      left: 0;
    }
  }
`;

export const ContactDescription = styled.p`
  font-family: Bitter;
  font-size: 18px;
  color: var(--text);
  line-height: 1.8;
  margin: 0;
  max-width: 600px;
  text-align: left;
`;

export const ContactButton = styled.button`
  color: var(--line);
  padding: 15px 45px;
  letter-spacing: 0.1rem;
  border: 3px solid var(--line);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 700;

  &:hover {
    background: var(--fill);
    color: var(--line);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--fill);
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 10px 20px;
    margin-top: 5rem;
  }
`;

// Animated versions for intersection observer
export const AnimatedContactContainer = styled(ContactContainer)<{
  isVisible?: boolean;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
`;

export const AnimatedContactTitle = styled(ContactTitle)<{
  isVisible?: boolean;
  delay?: number;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;

  &::after {
    ${(props) =>
      props.isVisible
        ? css`
            animation: ${borderGrow} 0.6s ease-out ${(props.delay || 0) + 0.4}s
              forwards;
          `
        : css`
            animation: none;
          `}
  }

  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const AnimatedContactDescription = styled(ContactDescription)<{
  isVisible?: boolean;
  delay?: number;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition:
    opacity 0.6s ease ${(props) => props.delay || 0}s,
    transform 0.6s ease ${(props) => props.delay || 0}s;
`;

export const AnimatedContactButton = styled(ContactButton)<{
  isVisible?: boolean;
  delay?: number;
}>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition: all 0.5s ease ${(props) => props.delay || 0}s;
`;

// Circles component has been moved to CommonComponents.tsx for better reusability
