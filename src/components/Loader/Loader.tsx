import { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import './loader.scss';
import { App } from '../../App';
import { Oval } from 'react-loader-spinner';
import { MainTitle } from '../UI Components/MainTitle/MainTitle';
import { Apple } from '@mui/icons-material';

type TypeLoader = {
  children: ReactNode;
};

const Loader: FC<TypeLoader> = () => {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const changeLoading = async () => {
      const loading = await setTimeout(() => {
        setLoader(true);
      }, 1800);
      return loading;
    };
    changeLoading();
  }, []);

  if (!loader) {
    return (
      <div className='blocks__loader'>
        <MainTitle className='block__title'>
          Welcome to Apple Catalog store!
          <Apple style={{ fontSize: 60, color: '#89939a' }} />
        </MainTitle>
        <Oval
          visible={true}
          height='100'
          width='100'
          color='#313237'
          ariaLabel='oval-loading'
          wrapperStyle={{}}
          wrapperClass=''
          secondaryColor='#313131'
        />
      </div>
    );
  }

  return <App />;
};

export { Loader };
