import styled from 'styled-components';

interface LoadingContainerProps {
  $isVisible: boolean;
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  width: calc(100vw - 40px);
  height: ${({ $isVisible }) => $isVisible ? 'calc(100vh - 40px)' : '0'};
  background-color: var(--fill);
  z-index: 1000;
  transition: height ${({ $isVisible }) => $isVisible ? '0.6s' : '0.3s'} cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`; 