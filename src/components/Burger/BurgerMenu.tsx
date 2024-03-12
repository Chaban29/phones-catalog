import { FC, useState } from 'react';
import './burger.scss';
import CloseIcon from '@mui/icons-material/Close';
import appleLogo from '../../favicon/favicon.png';
import { useRef } from 'react';
import { CustomLink } from '../UI Components/CustomLink/CustomLink';

const MENU_LINKS = [
  {
    linkId: 1,
    title: 'HOME',
    to: '/',
  },
  {
    linkId: 2,
    title: 'PHONES',
    to: 'phones',
  },
  {
    linkId: 3,
    title: 'TABLETS',
    to: 'tablets',
  },
  {
    linkId: 4,
    title: 'ACCESSORIES',
    to: 'accessories',
  },
];

const BurgerMenu: FC = (): JSX.Element => {
  const buttonRef = useRef(null);
  const burgerMenuRef = useRef(null);
  const [isMenuClosed, setIsMenuClosed] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
  };

  const closeMenuButton = (): void => {
    toggleMenu();
  };

  const handleMenuItemClick = (): void => {
    closeMenuButton();
  };

  return (
    <div className='burger__container'>
      <div
        className={`burger__menu ${isMenuClosed ? 'closed' : 'active'}`}
        ref={burgerMenuRef}
      >
        <div className='close__item'>
          <div className='burger__logoBlock'>
            <img src={appleLogo} alt='Apple Logo' className='burger__logo' />
            <h3 className='logo__title'>Apple Catalog</h3>
          </div>
          <CloseIcon
            onClick={closeMenuButton}
            ref={buttonRef}
            style={{ fontSize: 30, cursor: 'pointer' }}
          />
        </div>
        <nav className='menu'>
          {MENU_LINKS.map((link) => (
            <ul key={link.linkId} className='menu__item'>
              <li className='menu__listItem'>
                <CustomLink
                  onClick={handleMenuItemClick}
                  to={link.to}
                  className='menu__itemLink'
                >
                  {link.title}
                </CustomLink>
              </li>
            </ul>
          ))}
        </nav>
        <span className='menu__description'>Apple Inc. 2024</span>
      </div>
    </div>
  );
};

export { BurgerMenu };
