import React from 'react';
import { useAppSelector } from '@context/reducer/store';
import type { RootState } from '@context/reducer/store';
import { LoadingContainer } from './LoadingComponents';

const Loading: React.FC = () => {
  const { isLoading, isMenuOpen } = useAppSelector((state: RootState) => state.app);
  const shouldShow = isLoading || isMenuOpen;

  return (
    <LoadingContainer $isVisible={shouldShow}>
      {/* Loading content can be added here */}
    </LoadingContainer>
  );
};

export default Loading; 