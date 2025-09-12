import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

interface LoadingContainerProps {
  $isVisible: boolean;
  $isLoading: boolean;
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  width: calc(100vw - 40px);
  height: ${({ $isVisible }) => ($isVisible ? "calc(100vh - 40px)" : "0")};
  background-color: var(--fill);
  z-index: 2000;
  transition: height ${({ $isVisible }) => ($isVisible ? "0.4s" : "0.2s")}
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  justify-content: ${({ $isLoading }) =>
    $isLoading ? "center" : "flex-start"};
  overflow: hidden;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`;

const slideFromRight = keyframes`
  0% { transform: translateX(24px) scale(0.8); }
  33.333% { transform: translateX(0px) scale(1.2); }
  66.666% { transform: translateX(-24px) scale(0.9); }
  100% { transform: translateX(24px) scale(0.8); }
`;

const slideFromMiddle = keyframes`
  0% { transform: translateX(0px) scale(1.2); }
  33.333% { transform: translateX(-24px) scale(0.9); }
  66.666% { transform: translateX(24px) scale(0.9); }
  100% { transform: translateX(0px) scale(1.2); }
`;

const slideFromLeft = keyframes`
  0% { transform: translateX(-24px) scale(0.8); }
  33.333% { transform: translateX(24px) scale(0.9); }
  66.666% { transform: translateX(0px) scale(1.2); }
  100% { transform: translateX(-24px) scale(0.8); }
`;

export const DotsWrapper = styled.div`
  position: relative;
  height: 34px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

export const Dot = styled.span`
  position: relative;
  display: block;
  width: 16px;
  aspect-ratio: 1 / 1;
  margin: 0 12px;
  border-radius: 50%;
  background-color: #ffffff;
  transform-origin: center;
  backface-visibility: hidden;
  will-change: transform;

  &:nth-child(1) {
    animation: ${slideFromLeft} 1s ease-in-out infinite;
  }

  &:nth-child(2) {
    width: 24px;
    animation: ${slideFromMiddle} 1s ease-in-out infinite;
  }

  &:nth-child(3) {
    animation: ${slideFromRight} 1s ease-in-out infinite;
  }
`;

const menuItemSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 2rem;

  @media (min-width: 700px) and (max-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 600px) and (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    gap: 0;
    margin-top: -10rem;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: end;
  opacity: 0;
  animation: ${menuItemSlideDown} 0.4s ease-out forwards;

  &:nth-child(2) {
    animation-delay: 1.2s;
  }

  &:nth-child(3) {
    animation-delay: 1.35s;
  }

  &:nth-child(4) {
    animation-delay: 1.5s;
  }
  &:nth-child(5) {
    animation-delay: 1.65s;
  }
  @media (max-width: 500px) {
    margin-bottom: 1.25rem;
  }
`;

export const MenuDescription = styled.span`
  color: var(--text);
  font-size: 1.25rem;
  opacity: 0.7;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 1px;
  width: max-content;
  padding-bottom: 1rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 600;
  line-height: 1.25;
  width: 360px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--bg);
    -webkit-text-stroke: 0.5px var(--text);
    text-shadow:
      -0.5px -0.5px 0 var(--text),
      0.5px -0.5px 0 var(--text),
      -0.5px 0.5px 0 var(--text),
      0.5px 0.5px 0 var(--text);
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1000px) {
    width: unset;
  }
`;

// Animated header components
const lineAnimation = keyframes`
  0% {
    right: 35%;
    width: 30%;
    opacity: 0;
  }
  50% {
    right: 35%;
    width: 70%;
    opacity: 1;
  }
  100% {
    right: 70%;
    width: 30%;
    opacity: 1;
  }
`;

const socialIconsSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    right: 35%;
    width: 30%;
    height: 3px;
    background-color: var(--line);
    animation: ${lineAnimation} 0.4s ease-out forwards;
    animation-delay: 0.2s;
  }
  @media (max-width: 500px) {
    gap: 0.5rem;
  }
`;

export const SocialIcon = styled.img`
  display: block;
  width: 60px;
  aspect-ratio: 1/1;
  padding: 4px;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.2s ease;
  opacity: 0;
  animation: ${socialIconsSlideIn} 0.4s ease-out forwards;
  cursor: pointer;
  object-fit: contain;
  &:nth-child(1) {
    animation-delay: 0.8s;
  }

  &:nth-child(2) {
    animation-delay: 0.9s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }

  &:nth-child(4) {
    animation-delay: 1.1s;
  }

  @media (max-width: 500px) {
    width: 40px;
  }
`;
