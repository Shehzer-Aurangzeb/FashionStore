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
  imagesJson: string[];
  isDiscount: boolean;
  discountPercent: string;
  sizes: TSize[];
};

export type ProductDetail = {
  productCode: string;
  productDetails: string;
  price: string;
  imagesJson: string[];
  isDiscount: boolean;
  discountPercent: string;
  sizes: TSize[];
  reviews:TReview[]
};

export type Product = {
  productId: number;
  productName: string;
  subProducts: SubProduct[];
};

export type TSize = {
  id: number;
  filterOptions: string;
  filterId: number;
};
export type TReview = {
  id: number;
  customerName: string;
  reviewDesc: string;
  review:number
  date:string
};