import { FC } from 'react';
import cl from './phonesTechSpecs.module.scss';
import { IPhonesTechSpecsProps } from '../../interfaces/phones-tech-specs';

const PhonesTechSpecs: FC<IPhonesTechSpecsProps> = ({
  screen,
  resolution,
  processor,
  ram,
  memory,
  camera,
  zoom,
  cell,
}: IPhonesTechSpecsProps): JSX.Element => {
  return (
    <article className={cl.techSpecs__block}>
      <h2 className={cl.techSpecs__title}>Tech specs</h2>
      <div className={cl.techSpecs__characteristics}>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Screen</span>
          <span className={cl.techSpecs__itemSubTitle}>{screen}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Resolution</span>
          <span className={cl.techSpecs__itemSubTitle}>{resolution}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Processor</span>
          <span className={cl.techSpecs__itemSubTitle}>{processor}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>RAM</span>
          <span className={cl.techSpecs__itemSubTitle}>{ram}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Built in memory</span>
          <span className={cl.techSpecs__itemSubTitle}>{memory}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Camera</span>
          <span className={cl.techSpecs__itemSubTitle}>{camera}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Zoom</span>
          <span className={cl.techSpecs__itemSubTitle}>{zoom}</span>
        </div>
        <div className={cl.techSpecs__item}>
          <span className={cl.techSpecs__itemTitle}>Cell</span>
          <span className={cl.techSpecs__itemSubTitle}>{cell}</span>
        </div>
      </div>
    </article>
  );
};

export { PhonesTechSpecs };
