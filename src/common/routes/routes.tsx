interface IRoutesProps {
  LAYOUT: string;
  HOME: string;
  PHONES: string;
  TABLETS: string;
  ACCESSORIES: string;
  ERROR: string;
}

const ROUTES: IRoutesProps = {
  LAYOUT: '/',
  HOME: '/',
  PHONES: 'phones',
  TABLETS: 'tablets',
  ACCESSORIES: 'accessories',
  ERROR: '*',
};


// eslint-disable-next-line react-refresh/only-export-components
export { ROUTES };