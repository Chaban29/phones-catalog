import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';

const AccessoriesPage: FC = (): JSX.Element => {
  return (
    <div>
      <CatalogPage
        smallTitle=' Accessories'
        models='88 models'
        mainTitle=' Accessories'
      />
    </div>
  );
};

export { AccessoriesPage };
