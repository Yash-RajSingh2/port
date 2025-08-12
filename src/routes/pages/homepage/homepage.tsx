import React from 'react';
import type { HomepageProps } from './Homepage.interfaces';
import Layout from '@components/Layout/Layout';
import Landing from '@components/Landing/Landing';
import About from '@components/About/About';

const Homepage: React.FC<HomepageProps> = () => {

  return (
    <Layout>
      <Landing />
      <About />
    </Layout>
  );
};

export default Homepage; 