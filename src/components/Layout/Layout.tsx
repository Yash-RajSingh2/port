import React from 'react';
import type { LayoutProps } from './Layout.interfaces';
import { LayoutContainer, MainContent } from './LayoutComponents';
import Navbar from '@components/Navbar/Navbar';
import Loading from '@components/Loading/Loading';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Loading />
      <LayoutContainer>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
      </LayoutContainer>
    </>
  );
};

export default Layout; 