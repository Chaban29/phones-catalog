import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './assets/styles/main.module.scss';
import { styled, createGlobalStyle } from 'styled-components';
import { Fragment } from 'react/jsx-runtime';
import { StrictMode } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const RootWrapper = createGlobalStyle`
body {
  font-family: 'Montserrat' !important;
}
`;

// eslint-disable-next-line react-refresh/only-export-components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <StrictMode>
    <Fragment>
      <App />
      <RootWrapper />
      <AppContainer />
    </Fragment>
  </StrictMode>
);
