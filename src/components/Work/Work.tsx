import React from 'react';
import type { WorkProps } from './Work.interfaces';
import {  ExperienceCard, WorkImage, WorkInfo, WorkHeader, WorkTitleRow, JobTitle, Company, Period, Description } from './WorkComponents';
import { Container, ContentWrapper } from '@components/Common/CommonComponents';
import { AboutTitle } from '@components/About/AboutComponents';

const Work: React.FC<WorkProps> = ({ experiences }) => {
  return (
    <Container minHeight="100vh"> 
      <ContentWrapper alignItems="flex-start" gap="6rem" flexDirection="column">
        <AboutTitle>Experience</AboutTitle>
        {experiences?.map((exp, idx) => (
          <ExperienceCard key={idx}>
            <WorkImage src={exp.imageSrc} alt={`${exp.company} logo`} />
            <WorkInfo>
              <WorkHeader>
                <WorkTitleRow>
                  <JobTitle>{exp.jobTitle}</JobTitle>
                  <Company>@ {exp.company}</Company>
                </WorkTitleRow>
                <Period>{exp.period}</Period>
              </WorkHeader>
              {exp.description.slice(0, 3).map((point, index) => (
                <Description key={index}>{point}</Description>
              ))}
            </WorkInfo>
          </ExperienceCard>
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default Work; 