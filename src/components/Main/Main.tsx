import { FC } from 'react';
import styled from 'styled-components';
import { Hero } from '../Hero/Hero';
import { HotPrices } from '../HotPrices/HotPrices';
import { ModelsCatalog } from '../ModelsCatalog/ModelsCatalog';
import { ShopCategory } from '../ShopCategory/ShopCategory';

const MainContainer = styled.div`
  width: 100%;
`;

const Main: FC = (): JSX.Element => {
  return (
    <MainContainer>
      <Hero />
      <ModelsCatalog title='Brand new models' />
      <ShopCategory title='Shop by category' />
      <HotPrices pricesTitle='Hot prices' />
    </MainContainer>
  );
};

export { Main };
