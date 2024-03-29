import { FC } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AppleIcon from '@mui/icons-material/Apple';
import cl from './footer.module.scss';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  box-shadow: 0px -1.5px 0px 0px #e2e6e9;
`;

const FooterStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Footer: FC = () => {
  const toUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <FooterContainer>
      <FooterStyledWrapper>
        <>
          <button className={cl.logo__buttonUp} onClick={toUppPage}>
            <a href='#!'>
              <AppleIcon
                style={{ fontSize: '30' }}
                className={cl.footer__appleLogo}
              />
            </a>
          </button>
        </>
        <>
          <ul className={cl.footer__menu}>
            <li className={cl.list__item}>
              <a
                href='https://github.com/Chaban29'
                target='_blank'
                rel='noreferrer'
                className={cl.list__link}
              >
                Github
              </a>
            </li>
            <li className={cl.list__item}>
              <a href='#!' className={cl.list__link}>
                Contacts
              </a>
            </li>
            <li className={cl.list__item}>
              <a href='#!' className={cl.list__link}>
                rights
              </a>
            </li>
          </ul>
        </>
        <div className={cl.footer__buttons}>
          <button className={cl.footer__button} onClick={toUppPage}>
            Back to top
          </button>
          <button className={cl.arrow__top} onClick={toUppPage}>
            <ArrowCircleUpIcon className={cl.arrow__circle} />
          </button>
        </div>
      </FooterStyledWrapper>
    </FooterContainer>
  );
};

export { Footer };
