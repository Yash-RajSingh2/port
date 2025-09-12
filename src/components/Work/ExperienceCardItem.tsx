import React from 'react';
import {
  IndividualAnimatedExperienceCard,
  WorkImage,
  WorkInfo,
  WorkHeader,
  WorkTitleRow,
  JobTitle,
  Company,
  Period,
  Description,
} from './WorkComponents';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Experience {
  imageSrc: string;
  company: string;
  jobTitle: string;
  period: string;
  description: string[];
}

interface ExperienceCardItemProps {
  experience: Experience;
  index: number;
}

export const ExperienceCardItem: React.FC<ExperienceCardItemProps> = ({ experience }) => {
  // Each experience card gets its own intersection observer
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <IndividualAnimatedExperienceCard 
      ref={elementRef}
      isVisible={isIntersecting} 
      delay={0.1}
    >
      <WorkImage src={experience.imageSrc} alt={`${experience.company} logo`} />
      <WorkInfo>
        <WorkHeader>
          <WorkTitleRow>
            <JobTitle>{experience.jobTitle}</JobTitle>
            <Company>@ {experience.company}</Company>
          </WorkTitleRow>
          <Period>{experience.period}</Period>
        </WorkHeader>
        {experience.description.map((point, descIndex) => (
          <Description key={descIndex}>{point}</Description>
        ))}
      </WorkInfo>
    </IndividualAnimatedExperienceCard>
  );
}; 