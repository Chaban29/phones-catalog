import { FC } from 'react';
import { Apple } from '@mui/icons-material';
import styled from 'styled-components';
import cl from './notFound.module.scss';
import { NavLink } from 'react-router-dom';

const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding-top: 150px;
  color: #313237;
  font-size: 32px;
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <StyledErrorPage>
        <Apple id={cl.rotateIcon} style={{ fontSize: '50px' }} />
        Page is not Defined {erorr.toUpperCase()}
      </StyledErrorPage>
      <NavLink id={cl.error__link} to='/'>
        Click To Home
      </NavLink>
    </NotFoundContainer>
  );
};

export { NotFoundPage };
