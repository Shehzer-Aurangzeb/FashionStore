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


export type TFilter = {
  filterId: number;
  filter: string;
  options: TFilterOption[];
};

export type TFilterOption = {
  filterOptionId: number;
  filterOption: string;
};