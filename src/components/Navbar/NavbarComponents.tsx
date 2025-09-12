import React from "react";
import styled from "styled-components";

const StyledTriangleSvg = styled.svg`
  width: 80px;
  height: 40px;

  @media (max-width: 500px) {
    width: 60px;
    height: 30px;
  }
`;

export const TriangleLogo: React.FC = () => {
  return (
    <StyledTriangleSvg viewBox="70 38 88 34" xmlns="http://www.w3.org/2000/svg">
      {/* Left triangle */}
      <polygon
        points="70,70 94,46 118,70"
        fill="none"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      {/* Right triangle */}
      <polygon
        points="94,70 126,38 158,70"
        fill="none"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
    </StyledTriangleSvg>
  );
};

export const MenuTitle = styled.p`
  color: var(--text);
  font-size: 1rem;
  letter-spacing: 8.4px;
  font-weight: 600;
  font-family: Bitter;
  padding-top: 10px;
  cursor: pointer;
  transition: all 0.1s linear;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 26px;
    margin-left: 16px;
    background: #919795;
    vertical-align: middle;
    @media (max-width: 500px) {
      height: 20px;
    }
  }
`;

interface NavbarContainerProps {
  $zIndex: number;
  $isMenuOpen: boolean;
}

export const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  flex-direction: end;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  right: 3rem;
  position: fixed;
  top: 3rem;
  z-index: ${({ $zIndex }) => $zIndex};
  @media (max-width: 500px) {
    padding-right: 0rem;
    background-color: ${({ $isMenuOpen }) =>
      $isMenuOpen ? "transparent" : "var(--bg)"};
    top: 1rem;
    right: 2rem;
    width: 100%;
    justify-content: end;
  }
`;
