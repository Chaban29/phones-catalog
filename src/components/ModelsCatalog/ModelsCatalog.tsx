import { FC } from 'react';
import styled from 'styled-components';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import cl from './modelsCatalog.module.scss';
import products from '../../common/products/products.json';
import { ICatalogItemProps } from '../../interfaces/catalog-item';

const ModelsCatalogSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 30px;
  padding-right: 0px;
`;

const ModelsCatalog: FC<ICatalogItemProps> = ({
  pricesTitle,
}: ICatalogItemProps): JSX.Element => {
  return (
    <ModelsCatalogSection>
      <div className={cl.modelsCatalog__block}>
        <h2 className={cl.catalog__title}>{pricesTitle}</h2>
        <div className={cl.catalog__buttons}>
          <button className={cl.catalog__button}>
            <KeyboardDoubleArrowLeftIcon style={{ color: '#fff' }} />
          </button>
          <button className={cl.catalog__button}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#fff' }} />
          </button>
        </div>
      </div>
      <div className={cl.catalog__cards}>
        {products.map((product) => (
          <CatalogItem
            key={product.phoneId}
            imgUrl={product.imgUrl}
            displaySize={product.displaySize}
            title={product.title}
            price={product.price}
            discount={product.discount}
            capacity={product.capacity}
            memory={product.memory}
          />
        ))}
      </div>
    </ModelsCatalogSection>
  );
};

export { ModelsCatalog };
