import { FC } from 'react';
import { styled } from 'styled-components';
import cl from '../header.module.scss';
import Heart from '../../../images/header/Favourites.svg';
import Basket from '../../../images/header/Basket.svg';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const HeaderNav: FC = (): JSX.Element => {
  return (
    <HeaderNavItems>
      <button className={cl.heart__button}>
        <img src={Heart} alt='Heart Icon' />
      </button>
      <button className={cl.shoppingCart__button}>
        <img src={Basket} alt='Basket Icon' />
      </button>
      <button className={cl.burger__button}></button>
    </HeaderNavItems>
  );
};

export { HeaderNav };
