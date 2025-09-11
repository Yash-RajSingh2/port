import React from 'react';
import type { HomepageProps } from './Homepage.interfaces';
import Layout from '@components/Layout/Layout';
import Landing from '@components/Landing/Landing';
import About from '@components/About/About';
import Work from '@components/Work/Work';
import { experiences } from '@/data/experience';

const Homepage: React.FC<HomepageProps> = () => {

  return (
    <Layout>
      <Landing />
      <About />
      <Work experiences={experiences} />
    </Layout>
  );
};

export default Homepage; 