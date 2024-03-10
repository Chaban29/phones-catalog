import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import cl from '../ShopCategory/shopCategory.module.scss';

const CategoryItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

interface ICategoryItemProps {
  categoryTitle: string;
  categoryModels: string;
  banner: string;
  to: string;
}

const CategoryItem: FC<ICategoryItemProps> = ({
  categoryTitle,
  categoryModels,
  banner,
  to,
}: ICategoryItemProps): JSX.Element => {
  const categoryTopScrolled = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <CategoryItemBlock>
      <img
        src={banner}
        alt='Iphone Banner'
        id={cl.width}
        className={cl.category__banner}
      />
      <div className={cl.category__titles}>
        <NavLink
          onClick={categoryTopScrolled}
          to={to}
          className={cl.category__title}
        >
          {categoryTitle}
        </NavLink>
        <span className={cl.category__models}>{categoryModels}</span>
      </div>
    </CategoryItemBlock>
  );
};

export { CategoryItem };
