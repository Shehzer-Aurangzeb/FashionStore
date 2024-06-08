export type TCartSelection = {
  cartItems: TCartProduct[];
};

export type TCartProduct = {
  sku: string;
  image: string;
  size: string;
  qty: number;
  price: string;
  name: string;
  isDiscount: boolean;
  discountPercent: string;
};
