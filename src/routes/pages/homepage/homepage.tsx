import React from 'react';
import type { HomepageProps } from './Homepage.interfaces';
import Layout from '@components/Layout/Layout';
import Landing from '@components/Landing/Landing';

const Homepage: React.FC<HomepageProps> = () => {

  return (
    <Layout>
      <div><Landing /></div>
    </Layout>
  );
};

export default Homepage; 