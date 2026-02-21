import React, { memo, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@context/reducer/store";
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

const LoadingDots = memo(() => (
  <DotsWrapper aria-label="Loading">
    <Dot />
    <Dot />
    <Dot />
  </DotsWrapper>
));

const SocialLinks = memo(() => (
  <AnimatedHeaderContainer>
    {socials?.map((social,index) => (
      <SocialIcon
        key={social.name+index}
        aria-label={social.ariaLabel}
        src={social.logo}
        alt={social.name}
        onClick={() => window.open(social.link, "_blank")}
      />
    ))}
  </AnimatedHeaderContainer>
));

const MenuItems = memo(({ onNavigate }: { onNavigate: () => void }) => (
  <MenuContent>
    <SocialLinks />
    {menuItems.map((menuItem) => (
      <MenuItem key={menuItem.path}>
        <MenuLink to={menuItem.path} onClick={onNavigate}>
          {menuItem.label}
        </MenuLink>
        <MenuDescription>{menuItem.description}</MenuDescription>
      </MenuItem>
    ))}
  </MenuContent>
));

const Loading: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isMenuOpen } = useAppSelector((state) => state.app);

  const shouldShow = useMemo(
    () => isLoading || isMenuOpen,
    [isLoading, isMenuOpen]
  );

  const handleNavigate = useCallback(() => {
    dispatch(setMenuOpen(false));
  }, [dispatch]);

  return (
    <LoadingContainer $isVisible={shouldShow} $isLoading={isLoading}>
      {isLoading ? (
        <LoadingDots />
      ) : isMenuOpen ? (
        <MenuItems onNavigate={handleNavigate} />
      ) : null}
    </LoadingContainer>
  );
};

export default memo(Loading);
