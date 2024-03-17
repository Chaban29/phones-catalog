import * as React from 'react';
import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './catalogPage.module.scss';

type TypeContent = boolean;

const CartPage: FC = (): JSX.Element => {
  const isContent: TypeContent = true;
  return (
    <>
      <CatalogPage smallTitle='Cart' mainTitle='Products Cart' models='' />
      <div>
        {isContent && (
          <h2 className={cl.empty__title}>Favorite page is empty</h2>
        )}
      </div>
    </>
  );
};

export { CartPage };
