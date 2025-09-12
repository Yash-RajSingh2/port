import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Landing from '@components/Landing/Landing';
import About from '@components/About/About';
import Work from '@components/Work/Work';
import { MoreComingMessage } from '@components/Common/MoreComingMessage';
import { Container } from '@components/Common/CommonComponents';
import { experiences } from '@/data/experience';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/projects');
  };

  return (
    <Layout>
      <Landing />
      <About />
      <Work experiences={experiences} />
      <Container minHeight="30vh" padding="2rem">
        <MoreComingMessage 
          message="Now let's explore my projects"
          buttonText="View Projects"
          onButtonClick={handleExploreProjects}
          delay={0.2}
        />
      </Container>
    </Layout>
  );
};

export default Homepage; 