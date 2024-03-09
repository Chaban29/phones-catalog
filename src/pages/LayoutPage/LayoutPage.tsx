import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const LayoutPage: FC = (): JSX.Element => {
  return (
    <div className='layout__container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { LayoutPage };
