import React from 'react';
import type { AwardsLandingProps } from './AwardsLanding.interfaces';
import { ContentWrapper } from '@components/Common/CommonComponents';
import {
  ScrollText,
  BouncingLetter,
} from "@components/Landing/LandingComponents";
import {
  AwardsContainer,
  AwardsTitle,
  AwardsText,
  AwardsScrollSection,
} from "@routes/pages/awards/AwardsComponents";

const AwardsLanding: React.FC<AwardsLandingProps> = () => {
  const scrollText = "DISCOVER";

  return (
    <AwardsContainer minHeight="90vh">
      <ContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem">
        <AwardsTitle>
          My Awards<span>.</span>
        </AwardsTitle>
        <AwardsText>
          Discover a collection of achievements that showcase my{" "}
          <b>dedication</b> and commitment to excellence in technology and innovation.
          From hackathon victories to recognition programs, each award represents
          <b> hard work, creativity, and the pursuit of impactful solutions</b> that
          make a difference in the tech community.
        </AwardsText>
      </ContentWrapper>
      <AwardsScrollSection>
        <ScrollText>
          {scrollText.split("").map((letter, index) => (
            <BouncingLetter key={index} delay={index * 0.1}>
              {letter}
            </BouncingLetter>
          ))}
        </ScrollText>
      </AwardsScrollSection>
    </AwardsContainer>
  );
};

export default AwardsLanding; 