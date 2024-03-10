interface IRoutesProps {
  LAYOUT: string;
  HOME: string;
  PHONES: string;
  TABLETS: string;
  ACCESSORIES: string;
  ERROR: string;
  FAVORITES: string;
  CART: string;
}

const ROUTES: IRoutesProps = {
  LAYOUT: '/',
  HOME: '/',
  PHONES: 'phones',
  TABLETS: 'tablets',
  ACCESSORIES: 'accessories',
  FAVORITES: 'favorites',
  CART: 'cart',
  ERROR: '*',
};

// eslint-disable-next-line react-refresh/only-export-components
export { ROUTES };
