import Button from '@mui/material/Button';
import cl from './catalog-button.module.scss';

export const CatalogButton = () => {
  return <Button className={cl.catalog__buttonItem}>Add to cart</Button>;
};
