import { FC } from 'react';
import { styled } from 'styled-components';
import cl from './shopCategory.module.scss';
import IphoneBanner from '../../images/category-images/aalp-magsafe-header-202309.png';
import AccessoriesBanner from '../../images/category-images/Iphone15-Banner.jpg';
import TabletBanner from '../../images/category-images/tablet-banner.jpg';
import { CategoryItem } from '../CategoryItem/CategoryItem';

const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1136px;
  gap: 24px;
  margin-bottom: 81px;
  padding: 0 30px;
`;

interface IShopCategory {
  title: string;
}

const ShopCategory: FC<IShopCategory> = ({
  title,
}: IShopCategory): JSX.Element => {
  return (
    <section>
      <CategoriesContainer>
        <h2 className={cl.categories__title}>{title}</h2>
        <div className={cl.category__products}>
          <CategoryItem
            banner={IphoneBanner}
            categoryTitle='Mobile phones'
            categoryModels='95 models'
            to='/phones'
          />
          <CategoryItem
            categoryTitle='Tablets'
            categoryModels='24 models'
            banner={TabletBanner}
            to='/tablets'
          />
          <CategoryItem
            categoryTitle='Accessories'
            categoryModels='100 models'
            banner={AccessoriesBanner}
            to='/accessories'
          />
        </div>
      </CategoriesContainer>
    </section>
  );
};

export { ShopCategory };
