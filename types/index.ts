export type TProduct = {
  sku: string;
  name: string;
  images: string[];
  price: string;
  sale: number;
  isOnSale: boolean;
  sizes: TSize[];
};
export type TSize = {
  size: string;
  description: string;
};
