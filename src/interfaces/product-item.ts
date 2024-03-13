export interface ProductItemProps {
  phoneId?: number;
  imgUrl?: string;
  title?: string;
  price?: string;
  discount?: string;
  memory?: number;
  capacity?: number;
  displaySize?: string;
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  fourImage?: string;
}

export interface ProductProps {
  product: ProductItemProps;
}
