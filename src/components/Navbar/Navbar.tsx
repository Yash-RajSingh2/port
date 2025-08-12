
import type { NavbarProps } from './Navbar.interfaces';
import { TriangleLogo, MenuTitle, NavbarContainer } from "./NavbarComponents";
import { useAppDispatch, useAppSelector } from '@context/reducer/store';
import type { RootState } from '@context/reducer/store';
import { setMenuOpen } from '@context/reducer/reducer';

const Navbar: React.FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state: RootState) => state.app);

  const handleMenuClick = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  };

  return (
    <NavbarContainer>
      <MenuTitle onClick={handleMenuClick}>Menu</MenuTitle>
      <TriangleLogo />
    </NavbarContainer>
  );
};

export default Navbar; 