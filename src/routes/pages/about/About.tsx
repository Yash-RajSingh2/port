import React from 'react';
import type { AboutProps } from './About.interfaces';
import Layout from '@components/Layout/Layout';
import AboutLanding from '@components/AboutLanding/AboutLanding';
import Skills from '@components/Skills/Skills';
import Adventures from '@components/Adventures/Adventures';

const About: React.FC<AboutProps> = () => {
  return (
    <Layout>
      <AboutLanding />
      <Skills />
      <Adventures />
    </Layout>
  );
};

export default About; 