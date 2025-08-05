import React from 'react';
import styled from 'styled-components';

export const TriangleLogo: React.FC = () => {
  return (
    <svg
      width="80"
      height="40"
      viewBox="70 38 88 34"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    </svg>
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
  transition: all 0.12s linear;
  text-align: center;

  &:hover {
    letter-spacing: 10px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 26px;
    margin-left: 16px;
    background: #919795;
    vertical-align: middle;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: end;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  right: 3rem;
  position: fixed;
  top: 3rem;
  z-index: 1001;
`;