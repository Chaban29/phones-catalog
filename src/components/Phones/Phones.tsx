import React from 'react';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import cl from '../../pages/PhonesPage/phones.module.scss';
import { PhonesProps } from '../../interfaces/phones';
import { FC } from 'react';

export const Phones: FC<PhonesProps> = ({ products }: PhonesProps) => {
  return (
    <div className={cl.phones__catalog}>
      <div className={cl.catalog__item}>
        {products.map((product) => (
          <CatalogItem
            displaySize={product.displaySize}
            key={product.phoneId}
            imgUrl={product.imgUrl}
            title={product.title}
            phoneId={product.phoneId}
            capacity={`${product.capacity} GB`}
            memory={`${product.memory} GB`}
            discount={`${product.discount}$`}
            price={`${product.price}$`}
          />
        ))}
      </div>
    </div>
  );
};
