import React from 'react';
import { useAppDispatch, useAppSelector } from '@context/reducer/store';
import type { RootState } from '@context/reducer/store';
import { setMenuOpen } from '@context/reducer/reducer';
import { 
  LoadingContainer, 
  DotsWrapper, 
  Dot, 
  MenuContent, 
  MenuItem, 
  MenuDescription, 
  MenuLink,
  AnimatedHeaderContainer,
  SocialIcon
} from './LoadingComponents';

const Loading: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isMenuOpen } = useAppSelector((state: RootState) => state.app);
  const shouldShow = isLoading || isMenuOpen;

  const handleNavigate = () => {
    dispatch(setMenuOpen(false));
  };

  return (
    <LoadingContainer $isVisible={shouldShow} $isLoading={isLoading}>
      {isLoading ? (
        <DotsWrapper aria-label="Loading">
          <Dot />
          <Dot />
          <Dot />
        </DotsWrapper>
      ) : isMenuOpen ? (
        <MenuContent>
          <AnimatedHeaderContainer>
            <SocialIcon 
              className="social-icon--bs" 
              href="https://bsky.app/profile/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Follow me on Bluesky
            </SocialIcon>
            <SocialIcon 
              className="social-icon--ig" 
              href="https://www.instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Follow me on Instagram
            </SocialIcon>
            <SocialIcon 
              className="social-icon--gh" 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit my GitHub
            </SocialIcon>
            <SocialIcon 
              className="social-icon--email" 
              href="mailto:your@email.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Send me an Email
            </SocialIcon>
          </AnimatedHeaderContainer>
          <MenuItem>
            <MenuLink to="/" onClick={handleNavigate}>Home</MenuLink>
            <MenuDescription>Navigate to the main page</MenuDescription>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about" onClick={handleNavigate}>About</MenuLink>
            <MenuDescription>Learn more about me</MenuDescription>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/projects" onClick={handleNavigate}>Projects</MenuLink>
            <MenuDescription>View my work and projects</MenuDescription>
          </MenuItem>
        </MenuContent>
      ) : null}
    </LoadingContainer>
  );
};

export default Loading; 