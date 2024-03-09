import styled from 'styled-components';
import cl from './catalog.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import homeIcon from '../../images/icons/Home.svg';
import arrowRightIcon from '../../images/icons/Chevron (Arrow Right).svg';
import { MainTitle } from '../../components/UI Components/MainTitle/MainTitle';
import { FC } from 'react';

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

interface CatalogPageProps {
  smallTitle: string;
  mainTitle: string;
}
const CatalogPage: FC<CatalogPageProps> = ({
  smallTitle,
  mainTitle,
}: CatalogPageProps): JSX.Element => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
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
          <img src={arrowRightIcon} alt='' />
          <h5 className={cl.phones__title}>{smallTitle}</h5>
        </div>
        <div className={cl.phones__titles}>
          <MainTitle>{mainTitle}</MainTitle>
        </div>
        <form action='#!' className={cl.phones__dropDowns}>
          <div className={cl.first__dropDown}>
            <label htmlFor='phones__list' className={cl.dropDown__label}>
              Sort by
            </label>
            <select
              id='phones__list'
              value='phones list'
              className={cl.dropDown}
            >
              <option value='phone item' className={cl.dropDown__option}>
                Newest
              </option>
            </select>
          </div>
          <div className={cl.second__dropDown}>
            <label
              htmlFor='phones__categoriesList'
              className={cl.dropDown__label}
            >
              Items on page
            </label>
            <select
              id='phones__categoriesList'
              value='phones category numbers'
              className={cl.dropDown}
            >
              <option
                value='phone category number'
                className={cl.dropDown__option}
              >
                16
              </option>
            </select>
          </div>
        </form>
      </PhonesContainer>
    </>
  );
};

export { CatalogPage };
