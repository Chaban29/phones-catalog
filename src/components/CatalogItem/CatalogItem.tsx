import { FC } from 'react';
import cl from './catalogItem.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';
import { ICatalogItemProps } from '../../interfaces/catalog-item';

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 272px;
  padding: 24px;
  border-radius: 10px;
  border: 2px solid #e2e6e9;
`;

const CatalogItem: FC<ICatalogItemProps> = ({
  imgUrl,
  title,
  price,
  displaySize,
  discount,
  capacity,
  memory,
  phoneId,
}: ICatalogItemProps): JSX.Element => {
  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CardItem className={cl.cardItem}>
      <div className={cl.card__container}>
        <img src={imgUrl} alt='iphone' className={cl.image__hovered} />
        <h3 style={{ paddingBottom: '20px' }} className={cl.card__title}>
          {title}
        </h3>
        <CustomButton style={{ border: '2px solid #6d6474' }}>
          <NavLink
            onClick={toUpPage}
            className={cl.view__product}
            to={`/products/${phoneId}`}
          >
            View Product
          </NavLink>
        </CustomButton>
      </div>

      <span className={cl.price}>
        {price} <strong id={cl.discount}>{discount}</strong>
      </span>
      <ul className={cl.card__list}>
        <li className={cl.list__item}>
          Screen
          <span className={cl.list__itemSecondary}>{displaySize}</span>
        </li>
        <li className={cl.list__item}>
          Capacity
          <span className={cl.list__itemSecondary}>{memory}</span>
        </li>
        <li className={cl.list__item}>
          RAM
          <span className={cl.list__itemSecondary}>{capacity}</span>
        </li>
      </ul>
      <div className={cl.catalog__buttonItems}>
        <CatalogButton />
        <button className={cl.favorite__button}>
          <FavoriteBorderIcon
            style={{ padding: '5px', fontSize: '30px', color: '#000' }}
          />
        </button>
      </div>
    </CardItem>
  );
};

export { CatalogItem };
