import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';

const TabletsPage: FC = (): JSX.Element => {
  return (
    <div className='tablets'>
      <CatalogPage
        smallTitle='Tablets'
        // models='55 models'
        mainTitle='Tablets'
      />
    </div>
  );
};

export { TabletsPage };
