import { FC } from 'react';
import { styled } from 'styled-components';
import AppleIcon from '@mui/icons-material/Apple';
import cl from './header.module.scss';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';

const HeaderWrapper = styled.header`
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 3;
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
  max-width: 1440px;
  margin: 0 auto;
`;

const Header: FC = (): JSX.Element => {
  return (
    <HeaderWrapper className={cl.header}>
      <HeaderContainer className={cl.header__navContainer}>
        <div className={cl.header__logo}>
          <a href='#!' className={cl.logo__link}>
            <AppleIcon style={{ fontSize: '30px', color: '#89939A' }} />
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
      </HeaderContainer>
    </HeaderWrapper>
  )
};

export { Header };
