import { FC } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Banner from '../../images/banner/Banner.svg';
import cl from './hero.module.scss';
import { styled} from 'styled-components';

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

const BannerIntro = styled.img`
  width: 100%;
  max-width: 1040px;
  object-fit: cover;
  border-radius: 20px;
`;

const StyledButtonHeight = styled.div`
  height: 100%;
`;

const Hero: FC = (): JSX.Element => {
  return (
    <HeroSection>
      <div className={cl.hero__container}>
        <MainTitle className={cl.mainHero__title}>
          Welcome to Nice Gadgets store!
        </MainTitle>
        <div className={cl.hero__swipper}>
          <StyledButtonHeight>
            <button className={cl.left__swipper}>
              <KeyboardArrowLeftIcon style={{ fontSize: '30px' }} />
            </button>
          </StyledButtonHeight>
          <div className={cl.hero__banner}>
            <BannerIntro src={Banner} alt='Apple Banner' />
          </div>
          <StyledButtonHeight>
            <button className={cl.right__swipper}>
              <KeyboardArrowRightIcon style={{ fontSize: '30px' }} />
            </button>
          </StyledButtonHeight>
        </div>
      </div>
      <div className={cl.swipper__items}>
        <span className={cl.active}></span>
        <span className={cl.swipper__item}></span>
        <span className={cl.swipper__item}></span>
      </div>
    </HeroSection>
  );
};

export { Hero };
