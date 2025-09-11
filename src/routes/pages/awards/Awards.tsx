import React from 'react';
import type { AwardsProps } from './Awards.interfaces';
import Layout from '@components/Layout/Layout';
import { Container, ContentWrapper } from '@/components/Common/CommonComponents.tsx';

const Awards: React.FC<AwardsProps> = () => {
  return (
    <Layout>
      <Container minHeight="80vh">
        <ContentWrapper flexDirection="column" alignItems="center" gap="2rem">
          <h1>Awards</h1>
          <div>Awards content will go here</div>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default Awards; 