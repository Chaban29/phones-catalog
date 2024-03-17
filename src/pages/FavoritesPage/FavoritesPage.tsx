import * as React from 'react';
import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './favoritePage.module.scss';

type TypeContent = boolean;

const FavoritesPage: FC = (): JSX.Element => {
  const isContent: TypeContent = true;
  return (
    <>
      <CatalogPage mainTitle='Favorites' smallTitle='Favorites' />
      <div>
        {isContent && (
          <h2 className={cl.empty__title}>Favorite page is empty</h2>
        )}
      </div>
    </>
  );
};

export { FavoritesPage };
