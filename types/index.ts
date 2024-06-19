import { InferType } from "yup";
import {

  shippingSchema,

  
} from '@/utils/schema'
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

export type TCustomerInfo = InferType<typeof shippingSchema>;

export type TFilter = {
  filterId: number;
  filter: string;
  options: TFilterOption[];
};

export type TFilterOption = {
  filterOptionId: number;
  filterOption: string;
};

export type TSelectItem = {
  label: string;
  value: string;
};
