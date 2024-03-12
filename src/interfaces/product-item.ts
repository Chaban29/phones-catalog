export interface ProductItemProps {
  phoneId?: number;
  imgUrl?: string;
  title?: string;
  price?: string;
  discount?: string;
  memory?: number;
  capacity?: number;
  displaySize?: string;
}

export interface ProductProps {
  product: ProductItemProps;
}
