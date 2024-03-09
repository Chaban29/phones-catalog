import { FC } from 'react';
import cl from './home.module.scss';
import { Main } from '../../components/Main/Main';

const HomePage: FC = (): JSX.Element => {
  return (
    <div className={cl.home__page}>
      <Main />
    </div>
  );
};

export { HomePage };
