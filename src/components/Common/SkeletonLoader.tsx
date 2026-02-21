import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  width?: string;
  height?: string;
}

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonContainer = styled.div<SkeletonProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20vh'};
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonLoader = ({ width, height }: SkeletonProps) => {
  return <SkeletonContainer width={width} height={height} />;
};

export default SkeletonLoader;