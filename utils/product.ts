import { TCartProduct } from "@/state/cartSelection/types";
import { SubProduct } from "@/state/categories/types";
import _ from "lodash";

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

export const compareProducts = (
  product1: TCartProduct,
  product2: TCartProduct
) => {
  const keys1 = Object.keys(product1).filter(
    (key) => key != "qty"
  ) as (keyof TCartProduct)[];

  for (const key of keys1) {
    if (!_.isEqual(product1[key], product2[key])) {
      return false;
    }
  }

  return true;
};

export const calculateRetailPrice = (items: TCartProduct[]) => {
  let price = 0;
  items.forEach((product) => {
    price += Number(product.price) * product.qty;
  });
  return `CA$${price.toFixed(2)}`;
};

export const calculateDiscounts = (items: TCartProduct[]) => {
  let discounts = 0;
  items.forEach(({ price, discountPercent, qty }) => {
    discounts += Number(price) * (Number(discountPercent) / 100) * qty;
  });
  return `CA$${discounts.toFixed(2)}`;
};
export const calculateTotalPrice = (items: TCartProduct[]) => {
  let totalPrice = 0;
  items.forEach(({ price, discountPercent, qty }) => {
    const retailPrice = Number(price) * qty;
    const discounts = Number(price) * (Number(discountPercent) / 100) * qty;
    totalPrice += retailPrice - discounts;
  });
  return `CA$${totalPrice.toFixed(2)}`;
};