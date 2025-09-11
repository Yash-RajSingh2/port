import React, { useEffect } from 'react';
import type { LayoutProps } from './Layout.interfaces';
import { LayoutContainer, MainContent } from './LayoutComponents';
import Navbar from '@components/Navbar/Navbar';
import Loading from '@components/Loading/Loading';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@context/reducer/store';
import { setLoading } from '@context/reducer/reducer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 700);
    return () => clearTimeout(timer);
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 900);
    return () => clearTimeout(timer);
  }, [dispatch]);

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

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