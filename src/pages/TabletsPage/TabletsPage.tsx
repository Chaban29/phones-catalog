import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import { CustomSelect } from '../../components/Select/Select';
import cl from './tablets.module.scss';

const TabletsPage: FC = (): JSX.Element => {
  return (
    <div className={cl.catalog__container}>
      <CatalogPage
        smallTitle='Tablets'
        models='55 models'
        mainTitle='Tablets'
      />
      <div className={cl.page__select}>
        <CustomSelect />
      </div>
    </div>
  );
};

export { TabletsPage };
