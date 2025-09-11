import React from 'react';
import type { AboutProps } from './About.interfaces';
import {
  AboutTitle,
  AboutText,
} from "./AboutComponents";
import { Button, Container, ContentWrapper } from "@components/Common/CommonComponents"
import Resume from '@assets/Yash-Raj-Singh-Resume.pdf';
const About: React.FC<AboutProps> = () => {
  return (
    <Container minHeight="80vh">
      <ContentWrapper flexDirection="column" alignItems="flex-start" gap="2rem">
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I'm a passionate software engineer and a technophile with expertise in
          modern web technologies. I love creating beautiful, functional
          applications and I can use my technical prowess to solve any problem
          and create any wonder that you'd like -
          <span className="bold"> the wilder, the better.</span>
        </AboutText>
        <Button onClick={() => window.open(Resume, "_blank")}>Resume</Button>
      </ContentWrapper>
    </Container>
  );
};

export default About; 