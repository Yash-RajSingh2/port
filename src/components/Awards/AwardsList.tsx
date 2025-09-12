import React from 'react';
import styled from 'styled-components';
import { AwardCard } from './AwardCard';
import { AwardsCircles, PositionedDiagonalLines } from '@/routes/pages/awards/AwardsComponents';

const ListContainer = styled.div<{ isVisible?: boolean }>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  margin-top: 5vh;
  position: relative;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  transition: opacity 0.4s ease, transform 0.4s ease;
  
  @media (max-width: 768px) {
    gap: 6rem;
    margin-top: 3vh;
  }
`;

interface Award {
  name: string;
  desc: string;
  image: string;
}

interface AwardsListProps {
  awards: Award[];
  isVisible?: boolean;
}

export const AwardsList: React.FC<AwardsListProps> = ({
  awards,
  isVisible
}) => {
  return (
    <ListContainer isVisible={isVisible}>
      <PositionedDiagonalLines top="2%" right="5%" />
      <AwardsCircles top="15%" left="-10%" width="30%" height="10%" />
      <AwardsCircles top="38%" right="5%" width="30%" height="10%" />
      <PositionedDiagonalLines top="50%" left="10%" opacity={0.4} />
      <AwardsCircles top="70%" left="80%" width="25%" height="10%" />
      <PositionedDiagonalLines top="85%" right="10%" opacity={0.6} />
      
      {awards.map((award, index) => (
        <AwardCard
          key={`${award.name}-${index}`}
          award={award}
          index={index}
        />
      ))}
    </ListContainer>
  );
}; 