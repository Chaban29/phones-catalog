import { FC } from 'react';
import cl from './hero.module.scss';
import { styled } from 'styled-components';
import { Slider } from '../Slider/Slider';
import slides from '../../mock/mock.json';

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 80px;
  padding: 0px 30px;
  @media (max-width: 550px) {
    padding: 0px;
  }
`;

const MainTitle = styled.h1`
  padding: 25px 0;
  padding-top: 50px;
  color: #313237;
  font-size: 48px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.48px;
  @media (max-width: 850px) {
    font-size: 34px;
  }
`;

const Hero: FC = (): JSX.Element => {
  return (
    <HeroSection>
      <div className={cl.hero__container}>
        <MainTitle className={cl.mainHero__title}>
          Welcome to Nice Gadgets store!
        </MainTitle>
        <div className={cl.swiper__div}>
          <Slider slides={slides} />
        </div>
      </div>
    </HeroSection>
  );
};

export { Hero };
