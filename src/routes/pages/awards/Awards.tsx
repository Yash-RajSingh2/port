import React from 'react';
import type { AwardsProps } from './Awards.interfaces';
import Layout from '@components/Layout/Layout';
import AwardsLanding from '@components/AwardsLanding/AwardsLanding';
import {
  AwardsListContainer,
  PositionedDiagonalLines,
  AwardsCircles,
  MoreComingMessage,
} from "./AwardsComponents.tsx";
import { awards } from '@/data/awards';
import { AwardItem } from './AwardItem';
import { Container, ContentWrapper } from '@/components/Common/CommonComponents.tsx';

const Awards: React.FC<AwardsProps> = () => {
  return (
    <Layout>
      <AwardsLanding />
      <Container style={{ padding: '0 2rem 0' }}>
        <ContentWrapper
          flexDirection="column"
          alignItems="flex-start"
          gap="2rem"
        >
          <AwardsListContainer>
            {/* Decorative elements that won't cause height issues */}
            <PositionedDiagonalLines top="2%" right="5%" />
            <AwardsCircles top="15%" left="-10%" width="30%" height="10%" />
            <AwardsCircles top="38%" right="5%" width="30%" height="10%" />
            <PositionedDiagonalLines top="50%" left="10%" opacity={0.4} />
            <AwardsCircles top="70%" left="80%" width="25%" height="10%" />
            <PositionedDiagonalLines top="85%" right="10%" opacity={0.6} />
            
            {awards.map((award, index) => (
              <AwardItem
                key={`${award.name}-${index}`}
                award={award}
                index={index}
              />
            ))}
          </AwardsListContainer>
          
          <MoreComingMessage>
            More achievements brewing in the pipeline
          </MoreComingMessage>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default Awards; 