import cl from '../styles/phonesCharacteristics.module.scss';
import { AddButton } from '../UI Components/AddButton/AddButton';
import { FC } from 'react';
import { PhoneCharacteristicsProps } from '../../interfaces/phone-characteristics';

const PhoneCharacteristics: FC<PhoneCharacteristicsProps> = ({
  firstImg,
  secondImg,
  thirdImg,
  fourImg,
  sixImg,
  screen,
  processor,
  resolution,
  ram,
}: PhoneCharacteristicsProps) => {
  return (
    <div className={cl.PhoneCharacteristics__container}>
      <div className={cl.PhoneCharacteristics__block}>
        <div className={cl.PhoneCharacteristics__photos}>
          <div className={cl.PhoneCharacteristics__smallPhotos}>
            <img src={firstImg} className={cl.border} alt='first' />
            <img
              src={secondImg}
              className={cl.border}
              style={{ width: '100%', height: '80px' }}
              alt='second'
            />
            <img src={thirdImg} className={cl.border} alt='third' />
            <img src={fourImg} className={cl.border} alt='four' />
          </div>
          <img className={cl.sixImage} src={sixImg} alt='six' />
        </div>
        <div className={cl.PhoneCharacteristics__titles}>
          <div className={cl.PhoneCharacteristics__colorsItems}>
            <h4 className={cl.colors__title}>
              Available colors
              <strong id={cl.iphone__id}>ID: 802390</strong>
            </h4>
            <div className={cl.colors__params}>
              <span className={cl.selected__color} title='white' />
              <span className={cl.color__default_1} title='gold' />
              <span className={cl.color__default_2} title='deep purple' />
              <span className={cl.color__default_3} title='space black' />
            </div>
          </div>
          <div className={cl.PhoneCharacteristics__capacity}>
            <h4 className={cl.capacity__title}>Select capacity</h4>
            <div className={cl.capacity__items}>
              <a href='#!' className={cl.capacityMemory__item}>
                128 GB
              </a>
              <a href='#!' className={cl.capacityMemory__item}>
                256 GB
              </a>
              <a href='#!' className={cl.capacityMemory__item}>
                512 GB
              </a>
            </div>
          </div>
          <div className={cl.PhoneCharacteristics__prices}>
            <span className={cl.PhoneCharacteristics__price}>$1199</span>
            <strong className={cl.PhoneCharacteristics__lastPrice}>
              $1999
            </strong>
          </div>
          <div className={cl.addButton__block}>
            <AddButton>Add to cart</AddButton>
          </div>
          <div className={cl.PhoneCharacteristics__tellParams}>
            <div className={cl.firstParams__items}>
              <span className={cl.paramsItemTitle}>Screen</span>
              <span className={cl.paramsItemTitle}>Resolution</span>
              <span className={cl.paramsItemTitle}>Processor</span>
              <span className={cl.paramsItemTitle}>RAM</span>
            </div>
            <div className={cl.secondParams__items}>
              <span className={cl.paramsItemSecondTitle}>{screen}</span>
              <span className={cl.paramsItemSecondTitle}>{resolution}</span>
              <span className={cl.paramsItemSecondTitle}>{processor}</span>
              <span className={cl.paramsItemSecondTitle}>{ram}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhoneCharacteristics };
