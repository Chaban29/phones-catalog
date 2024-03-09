import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './common/Router/Router';

const App: FC = (): JSX.Element => {
  return <RouterProvider router={Router} />;
};

export { App };
