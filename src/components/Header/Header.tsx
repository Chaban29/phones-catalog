import { FC, useState } from 'react';
import { styled } from 'styled-components';
import AppleIcon from '@mui/icons-material/Apple';
import cl from './header.module.scss';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';
import { BurgerMenu } from '../Burger/BurgerMenu';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 1.5px 0px 0px #e2e6e9;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const Header: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toPageBottomScrolled = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderWrapper className={cl.header}>
      <HeaderContainer className={cl.header__navContainer}>
        <div onClick={toPageBottomScrolled} className={cl.header__logo}>
          <a href='#!' className={cl.logo__link}>
            <AppleIcon
              className={cl.apple__logo}
              style={{ fontSize: 30, color: '#89939A' }}
            />
          </a>
          <h3 className={cl.logo__title}>Apple Catalog</h3>
        </div>
        <nav className={cl.navigation__bar}>
          <ul className={cl.nav}>
            <li className={cl.nav__item}>
              <CustomLink className={cl.nav__link} to='/'>
                home
              </CustomLink>
            </li>
            <li className={cl.nav__item}>
              <CustomLink className={cl.nav__link} to='/phones'>
                phones
              </CustomLink>
            </li>
            <li className={cl.nav__item}>
              <CustomLink className={cl.nav__link} to='/tablets'>
                tablets
              </CustomLink>
            </li>
            <li className={cl.nav__item}>
              <CustomLink className={cl.nav__link} to='accessories'>
                accessories
              </CustomLink>
            </li>
          </ul>
        </nav>
        <HeaderNav />
        <div onClick={toggleMenu} className={cl.burger__buttonBlock}>
          <button type='button' className={cl.button__burgerLine}></button>
          <button type='button' className={cl.button__burgerLine}></button>
          <button type='button' className={cl.button__burgerLine}></button>
        </div>
      </HeaderContainer>
      {isMenuOpen && <BurgerMenu />}
    </HeaderWrapper>
  );
};

export { Header };
