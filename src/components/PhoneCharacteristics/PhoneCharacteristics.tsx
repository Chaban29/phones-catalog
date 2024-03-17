import cl from './phoneCharacteristics.module.scss';
import React, { FC, useRef, useState } from 'react';

const PhoneCharacteristics: FC = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null
  );

  const buttonsRefs: React.RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const resetButtonStyles = (): void => {
    buttonsRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.background = 'transparent';
        ref.current.style.color = '#313131';
      }
    });
  };

  const updateButtonStyles = (index: number): void => {
    resetButtonStyles();
    if (buttonsRefs[index] && buttonsRefs[index].current) {
      buttonsRefs[index].current.style.background = '#313131';
      buttonsRefs[index].current.style.color = '#fff';
      setSelectedButtonIndex(index);
    }
  };
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
              <img
                src='../../../public/Color - Default-1.svg'
                alt='color-selected'
              />
            </button>
            <button type='button' className={cl.checkColor__button}>
              <img
                src='../../../public/Color - Default-2.svg'
                alt='color-selected'
              />
            </button>
            <button type='button' className={cl.checkColor__button}>
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
            <button
              ref={buttonsRefs[0]}
              onClick={() => updateButtonStyles(0)}
              className={`${cl.select__capacity} ${selectedButtonIndex === 0 ? cl.selected : ''}`}
            >
              64 GB
            </button>
            <button
              ref={buttonsRefs[1]}
              onClick={() => updateButtonStyles(1)}
              className={`${cl.select__capacity} ${selectedButtonIndex === 1 ? cl.selected : ''}`}
            >
              128 GB
            </button>
            <button
              ref={buttonsRefs[2]}
              onClick={() => updateButtonStyles(2)}
              className={`${cl.select__capacity} ${selectedButtonIndex === 2 ? cl.selected : ''}`}
            >
              256 GB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhoneCharacteristics };
