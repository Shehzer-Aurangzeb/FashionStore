import { TSize } from "../categories/types";

export type TCartSelection = {
  cartItems: TCartProduct[];
};

export type TCartProduct = {
  sku: string;
  image: string;
  size: TSize | undefined;
  qty: number;
  price: string;
  name: string;
  isDiscount: boolean;
  discountPercent: string;
};
