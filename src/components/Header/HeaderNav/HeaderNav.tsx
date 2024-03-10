import { FC } from 'react';
import { styled } from 'styled-components';
import cl from '../header.module.scss';
import Heart from '../../../images/icons/favorites-heart-icon.svg';
import Basket from '../../../images/icons/busket-Icon.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const HeaderNav: FC = (): JSX.Element => {
  return (
    <HeaderNavItems>
      <NavLink to='favorites'>
        <button className={cl.heart__button}>
          <img src={Heart} alt='Heart Icon' />
        </button>
      </NavLink>
      <NavLink to={'cart'}>
        <button className={cl.shoppingCart__button}>
          <img src={Basket} alt='Basket Icon' />
        </button>
      </NavLink>
      <button className={cl.burger__button}>
        <MenuIcon style={{ width: '50px' }} />
      </button>
    </HeaderNavItems>
  );
};

export { HeaderNav };
