import { FC } from 'react';
import styled from 'styled-components';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import firstItem from '../../images/catalog-images/first-item.svg';
import secondItem from '../../images/catalog-images/second-item.svg';
import thirdItem from '../../images/catalog-images/third-item.svg';
import fourItem from '../../images/catalog-images/four-item.svg';
import cl from './modelsCatalog.module.scss';
import { IModelsCatalogProps } from '../../interfaces/models-catalog';

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

const ModelsCatalog: FC<IModelsCatalogProps> = ({
  title,
}: IModelsCatalogProps): JSX.Element => {
  return (
    <ModelsCatalogSection>
      <div className={cl.modelsCatalog__block}>
        <h2 className={cl.catalog__title}>{title}</h2>
        <div className={cl.catalog__buttons}>
          <button className={cl.catalog__button}>
            <KeyboardDoubleArrowLeftIcon
              style={{ marginTop: '5px', color: '#fff' }}
            />
          </button>
          <button className={cl.catalog__button}>
            <KeyboardDoubleArrowRightIcon
              style={{ marginTop: '5px', color: '#fff' }}
            />
          </button>
        </div>
      </div>
      <div className={cl.catalog__cards}>
        <CatalogItem
          imgUrl={firstItem}
          displaySize='6.1” OLED'
          title='Apple iPhone 14 Pro 128GB Silver (MQ023)'
          price='$1999'
        />
        <CatalogItem
          imgUrl={secondItem}
          displaySize='6.1” OLED'
          title='Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)'
          price='$1999'
        />
        <CatalogItem
          imgUrl={thirdItem}
          displaySize='6.1” OLED'
          title='Apple iPhone 14 Pro 128GB Gold (MQ083)'
          price='$1999'
        />
        <CatalogItem
          imgUrl={fourItem}
          displaySize='6.7” OLED'
          title='Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'
          price='$1859'
        />
      </div>
    </ModelsCatalogSection>
  );
};

export { ModelsCatalog };
