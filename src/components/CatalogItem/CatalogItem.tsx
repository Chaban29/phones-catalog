import { FC } from 'react';
import cl from './catalogItem.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../UI Components/CustomButton/CustomButton';
import { CatalogButton } from '../UI Components/CatalogButton/CatalogButton';

interface ICatalogItemProps {
  imgUrl: string;
  title: string;
  price: string;
  displaySize: string;
  discount?: string;
}

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 272px;
  padding: 32px;
  border-radius: 10px;
  border: 2px solid #e2e6e9;
`;

const CatalogItem: FC<ICatalogItemProps> = ({
  imgUrl,
  title,
  price,
  displaySize,
  discount,
}: ICatalogItemProps): JSX.Element => {
  return (
    <CardItem>
      <div>
        <img src={imgUrl} alt='iphone' className={cl.image__hovered} />
        <h3 style={{ paddingBottom: '20px' }} className={cl.card__title}>
          {title}
        </h3>
        <CustomButton style={{ border: '2px solid #6d6474' }} to={''}>
          <NavLink className={cl.view__product} to={''}>
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
          <span className={cl.list__itemSecondary}>128 GB</span>
        </li>
        <li className={cl.list__item}>
          RAM
          <span className={cl.list__itemSecondary}>6 GB</span>
        </li>
      </ul>
      <div className={cl.catalog__buttonItems}>
        <CatalogButton />
        <button className={cl.favorite__button}>
          <FavoriteBorderIcon style={{ marginTop: '5px', color: '#000' }} />
        </button>
      </div>
    </CardItem>
  );
};

export { CatalogItem };