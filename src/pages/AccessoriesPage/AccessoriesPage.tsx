import { FC } from 'react';
import { CatalogPage } from '../CatalogPage/CatalogPage';
import cl from './accessories.module.scss';
import { CustomSelect } from '../../components/Select/Select';

const AccessoriesPage: FC = (): JSX.Element => {
  return (
    <div className={cl.catalog__container}>
      <CatalogPage
        smallTitle=' Accessories'
        models='88 models'
        mainTitle=' Accessories'
      />
      <div className={cl.page__select}>
        <CustomSelect />
      </div>
    </div>
  );
};

export { AccessoriesPage };
