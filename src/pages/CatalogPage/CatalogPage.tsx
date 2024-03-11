import styled from 'styled-components';
import cl from './catalog.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import arrowRightIcon from '../../images/icons/Chevron (Arrow Right).svg';
import { MainTitle } from '../../components/UI Components/MainTitle/MainTitle';
import { FC } from 'react';
import { CatalogPageProps } from '../../interfaces/catalog-page';

const PhonesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 0px 0 24px;
  width: 100%;
  max-width: 1138px;
  margin: 0 auto;
  padding-bottom: 36px;
`;

const CatalogPage: FC<CatalogPageProps> = ({
  smallTitle,
  mainTitle,
  models,
}: CatalogPageProps): JSX.Element => {
  const navigate = useNavigate();
  const goBack = () => navigate('/', { replace: true });
  return (
    <>
      <PhonesContainer className='Phones'>
        <div className={cl.phones__navigation}>
          <NavLink
            to='/'
            style={{ color: '#313237' }}
            className={cl.phones__toHome}
          >
            <img onClick={goBack} src={homeIcon} alt='home icon' />
          </NavLink>
          <img src={arrowRightIcon} alt='arrow right icon' />
          <h5 className={cl.phones__title}>{smallTitle}</h5>
        </div>
        <div className={cl.phones__titles}>
          <MainTitle>{mainTitle}</MainTitle>
        </div>
        <div className={cl.models__title}>{models}</div>
      </PhonesContainer>
    </>
  );
};

export { CatalogPage };
