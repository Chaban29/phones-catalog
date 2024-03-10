import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';

const FavoritesPage: FC = (): JSX.Element => {
  return (
    <CatalogPage
      mainTitle='Favorites'
      smallTitle='Favorites'
      models='74 models'
    />
  );
};

export { FavoritesPage };
