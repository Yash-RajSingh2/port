import React from 'react';
import type { AboutProps } from './About.interfaces';
import Layout from '@components/Layout/Layout';

const About: React.FC<AboutProps> = () => {
  return (
    <Layout>
      <div>About Content</div>
    </Layout>
  );
};

export default About; 