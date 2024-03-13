import cl from './phoneCharacteristics.module.scss';
import { FC } from 'react';
import { ProductProps } from '../../interfaces/product-item';

const PhoneCharacteristics: FC<ProductProps> = () => {
  return <div className={cl.phoneCharacteristics__container}></div>;
};

export { PhoneCharacteristics };
