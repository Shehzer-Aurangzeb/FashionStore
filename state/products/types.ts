import { SubProduct } from "../categories/types";

export type TProductSlice = {
  products: SubProduct[];
  selectedProductID: string;
  selectedProduct: SubProduct | undefined;
};
