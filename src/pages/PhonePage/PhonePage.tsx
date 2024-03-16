import * as React from 'react';
import { FC, useState } from 'react';
import cl from './phonePage.module.scss';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import products from '../../common/products/products.json';

const PhonePage: FC = () => {
  const [selectedProduct] = useState(products[0]);

  return (
    <div className={cl.phone__layout}>
      <ProductItem product={selectedProduct} />
    </div>
  );
};

export { PhonePage };
