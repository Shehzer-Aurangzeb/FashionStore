export type CategoriesSliceType = {
  categories: Category[] | undefined;
};

export type Category = {
  id: number;
  categoryName: string;
  subCategories: SubCategory[];
};

export type SubCategory = {
  subCategoryName: string;
  products: Product[];
};

export type SubProduct = {
  productCode: string;
  productDetails: string;
  price: string;
  imageJson: string[];
  isDiscount: boolean;
  discountPercent: string;
};
export type Product = {
  productId: number;
  productName: string;
  subProducts: SubProduct[];
};
