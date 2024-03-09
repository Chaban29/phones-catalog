import { CatalogItem } from '../CatalogItem/CatalogItem';
import firstItem from '../../images/catalog-images/first-item.svg';
import secondItem from '../../images/catalog-images/second-item.svg';
import thirdItem from '../../images/catalog-images/third-item.svg';
import fourItem from '../../images/catalog-images/four-item.svg';
import cl from '../styles/phonesPage.module.scss';
import { FC } from 'react';

export const Phones: FC = () => {
  return (
    <div className={cl.phones__catalog}>
      <div className={cl.catalog__item}>
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
      <div className={cl.catalog__item}>
        <CatalogItem
          imgUrl={firstItem}
          displaySize='6.1” OLED'
          title='Apple iPhone 14 Pro 128GB Silver (MQ023)'
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
      <div className={cl.catalog__item}>
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
          imgUrl={fourItem}
          displaySize='6.7” OLED'
          title='Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'
          price='$1859'
        />
      </div>
      <div className={cl.catalog__item}>
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
      </div>
    </div>
  );
};
