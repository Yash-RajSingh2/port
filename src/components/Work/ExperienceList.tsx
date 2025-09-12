import React, { useState } from 'react';
import { AnimatedSeeMoreButton } from './WorkComponents';
import { ExperienceCardItem } from './ExperienceCardItem';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Experience {
  imageSrc: string;
  company: string;
  jobTitle: string;
  period: string;
  description: string[];
}

interface ExperienceListProps {
  experiences: Experience[];
  initialDisplayCount?: number;
}

export const ExperienceList: React.FC<ExperienceListProps> = ({
  experiences,
  initialDisplayCount = 3
}) => {
  const [showAll, setShowAll] = useState(false);
  const { elementRef: buttonRef, isIntersecting: buttonVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  });

  const displayedExperiences = showAll 
    ? experiences 
    : experiences?.slice(0, initialDisplayCount);

  return (
    <>
      {displayedExperiences?.map((exp, idx) => (
        <ExperienceCardItem 
          key={idx} 
          experience={exp}
          index={idx}
        />
      ))}

      {experiences && experiences.length > initialDisplayCount && (
        <AnimatedSeeMoreButton 
          ref={buttonRef}
          onClick={() => setShowAll(!showAll)}
          isVisible={buttonVisible}
          delay={0.2}
        >
          {showAll ? "See Less" : "See More"}
        </AnimatedSeeMoreButton>
      )}
    </>
  );
}; 