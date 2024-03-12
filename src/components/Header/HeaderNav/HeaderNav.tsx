import { FC, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import cl from '../header.module.scss';
import Heart from '../../../images/icons/favorites-heart-icon.svg';
import Basket from '../../../images/icons/busket-Icon.svg';
import { NavLink } from 'react-router-dom';

const HeaderNavItems = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;

const HeaderNav: FC = (): JSX.Element => {
  const heartButtonRef = useRef<HTMLButtonElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  const handleChangeButtonColor = (
    ref: React.RefObject<HTMLButtonElement>
  ): void => {
    if (ref.current) {
      ref.current.style.borderBottom = '2px solid #313131';
      if (ref === heartButtonRef && cartButtonRef.current) {
        cartButtonRef.current.style.borderBottom = 'none';
      } else if (ref === cartButtonRef && heartButtonRef.current) {
        heartButtonRef.current.style.borderBottom = 'none';
      }
    }
  };

  useEffect(() => {
    if (heartButtonRef.current) {
      heartButtonRef.current.style.borderBottom = 'none';
    }
    if (cartButtonRef.current) {
      cartButtonRef.current.style.borderBottom = 'none';
    }
  }, []);

  return (
    <HeaderNavItems>
      <NavLink to='favorites'>
        <button
          ref={heartButtonRef}
          onClick={() => handleChangeButtonColor(heartButtonRef)}
          className={cl.heart__button}
        >
          <img src={Heart} alt='Heart Icon' />
        </button>
      </NavLink>
      <NavLink to={'cart'}>
        <button
          ref={cartButtonRef}
          onClick={() => handleChangeButtonColor(cartButtonRef)}
          className={cl.shoppingCart__button}
        >
          <img src={Basket} alt='Basket Icon' />
        </button>
      </NavLink>
    </HeaderNavItems>
  );
};

export { HeaderNav };
