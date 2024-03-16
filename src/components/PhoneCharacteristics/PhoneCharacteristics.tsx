import cl from './phoneCharacteristics.module.scss';
import React, { FC, useState } from 'react';

const PhoneCharacteristics: FC = () => {
  return (
    <div className={cl.phoneCharacteristics__container}>
      <div className={cl.characteristics__block}>
        <div className={cl.colors__itemBlock}>
          <h4 className={cl.colors__title}>Available colors</h4>
          <div className={cl.checkColors__items}>
            <button type='button' className={cl.checkColor__button}>
              <img
                src='../../../public/Color - Selected.svg'
                alt='color-selected'
              />
            </button>
            <button type='button' className={cl.checkColor__button}>
              {' '}
              <img
                src='../../../public/Color - Default-1.svg'
                alt='color-selected'
              />
            </button>
            <button type='button' className={cl.checkColor__button}>
              {' '}
              <img
                src='../../../public/Color - Default-2.svg'
                alt='color-selected'
              />
            </button>
            <button type='button' className={cl.checkColor__button}>
              {' '}
              <img
                src='../../../public/Color - Default-3.svg'
                alt='color-selected'
              />
            </button>
          </div>
        </div>
        <div className={cl.selectCapacity__block}>
          <h4 className={cl.capacity__title}>Select capacity</h4>
          <div className={cl.capacity__buttons}>
            <button className={cl.select__capacity}>64 GB</button>
            <button className={cl.select__capacity}>128 GB</button>
            <button className={cl.select__capacity}>256 GB</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhoneCharacteristics };
