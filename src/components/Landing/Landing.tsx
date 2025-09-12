import React from 'react';
import { HeroSection } from '@components/Common/HeroSection';
import { AnimatedScrollText } from '@components/Common/AnimatedScrollText';
import { ProfileSection } from './ProfileSection';

const Landing: React.FC = () => {
  return (
    <>
      <HeroSection minHeight="90vh">
        <ProfileSection name="Yash" title="Software Engineer" />
      </HeroSection>
      <AnimatedScrollText text="SCROLL" letterDelay={0.1} topMargin="-5rem" />
    </>
  );
};

export default Landing; 