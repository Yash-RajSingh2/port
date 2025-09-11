
import type { NavbarProps } from './Navbar.interfaces';
import { TriangleLogo, MenuTitle, NavbarContainer } from "./NavbarComponents";
import { useAppDispatch, useAppSelector } from '@context/reducer/store';
import type { RootState } from '@context/reducer/store';
import { setMenuOpen } from '@context/reducer/reducer';

const Navbar: React.FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen, isLoading } = useAppSelector(
    (state: RootState) => state.app
  );

  const handleMenuClick = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  };
  const computedZIndex = isLoading ? 1001 : isMenuOpen ? 3001 : 1001;
  return (
    <NavbarContainer $zIndex={computedZIndex}>
      <MenuTitle onClick={handleMenuClick}> {isMenuOpen ? 'Close' : 'Menu'}</MenuTitle>
      <TriangleLogo />
    </NavbarContainer>
  );
};

export default Navbar; 