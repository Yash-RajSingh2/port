import React from "react";
import { useAppDispatch, useAppSelector } from "@context/reducer/store";
import type { RootState } from "@context/reducer/store";
import { setMenuOpen } from "@context/reducer/reducer";
import { socials } from "@/data/socials";
import { menuItems } from "@/data/menuItems";
import {
  LoadingContainer,
  DotsWrapper,
  Dot,
  MenuContent,
  MenuItem,
  MenuDescription,
  MenuLink,
  AnimatedHeaderContainer,
  SocialIcon,
} from "./LoadingComponents";

const Loading: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isMenuOpen } = useAppSelector(
    (state: RootState) => state.app,
  );
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
            {socials?.map((social, index) => (
              <SocialIcon
                key={social.name + index}
                aria-label={social.ariaLabel}
                src={social.logo}
                alt={social.name}
                onClick={() => window.open(social.link, "_blank")}
              />
            ))}
          </AnimatedHeaderContainer>
          {menuItems.map((menuItem, index) => (
            <MenuItem key={menuItem.path + index}>
              <MenuLink to={menuItem.path} onClick={handleNavigate}>
                {menuItem.label}
              </MenuLink>
              <MenuDescription>{menuItem.description}</MenuDescription>
            </MenuItem>
          ))}
        </MenuContent>
      ) : null}
    </LoadingContainer>
  );
};

export default Loading;
