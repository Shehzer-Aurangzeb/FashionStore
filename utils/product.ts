import { SubProduct } from "@/state/categories/types";

export const calculatePrice = (
  price: string,
  isDiscount: boolean,
  discountPercent: string
) => {
  if (isDiscount) {
    return `CA$${(
      Number(price) -
      Number(price) * (Number(discountPercent) / 100)
    ).toFixed(2)}`;
  } else {
    return `CA$${price}`;
  }
};
