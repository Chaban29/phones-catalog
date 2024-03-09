import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './phones.module.scss';
import { Phones } from '../../components/Phones/Phones';
import PaginationRounded from '../../components/Pagination/Pagination';

const PhonesPage: FC = (): JSX.Element => {
  return (
    <main className={cl.phones} style={{ margin: '0 auto' }}>
      <CatalogPage
        smallTitle='Phones'
        // models='95 models'
        mainTitle='Mobile phones'
      />
      <Phones />
      <PaginationRounded />
    </main>
  );
};

export { PhonesPage };
