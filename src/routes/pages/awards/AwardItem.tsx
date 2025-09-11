import React, { useState } from 'react';
import type { Award } from '@/data/awards';
import {
  AwardItemContainer,
  AwardImageSection,
  AwardImageContainer,
  AwardImageLoader,
  AwardImage,
  AwardNameOverlay,
  AwardDescription,
} from './AwardsComponents';

interface AwardItemProps {
  award: Award;
  index: number;
}

export const AwardItem: React.FC<AwardItemProps> = ({ award, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isReversed = index % 2 === 1; // Alternate alignment

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <AwardItemContainer data-index={index} $isReversed={isReversed}>
      <AwardImageSection>
        <AwardImageContainer>
          <AwardImageLoader $isLoaded={imageLoaded} />
          <AwardImage
            src={award.image}
            alt={award.name}
            onLoad={handleImageLoad}
          />
          <AwardNameOverlay>
            {award.name}
          </AwardNameOverlay>
        </AwardImageContainer>
      </AwardImageSection>
      <AwardDescription>
        {award.desc}
      </AwardDescription>
    </AwardItemContainer>
  );
}; 