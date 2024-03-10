import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import cl from './layout.module.scss';

const LayoutPage: FC = (): JSX.Element => {
  return (
    <div className={cl.layout__container}>
      <Header />
      <main className={cl.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { LayoutPage };
