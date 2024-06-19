import { TCustomerInfo } from "@/types";
import { TSelectItem } from "@/types";


export const PATHS = {
  PRODUCTS: "/products",
  CART: "/cart",
  CHECKOUT: "/checkout",
};
export const SHIPPINGADDRESSINITIALVALUES: TCustomerInfo = {
  firstName: "",
  lastName: "",
  shippingAddress: "",
  postalCode: "",
  phoneNumber: "",
  city: "",
  state: "",
};

export const RATINGOPTIONS: TSelectItem[] = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "5 Star",
    value: "5 stars",
  },
  {
    label: "4 Star",
    value: "4 Star",
  },
  {
    label: "3 Star",
    value: "3 Star",
  },
  {
    label: "2 Star",
    value: "2 Star",
  },
  {
    label: "1 Star",
    value: "1 Star",
  },
];
export const REVIEWSSORTBYOPTIONS: TSelectItem[] = [
  {
    label: "Recommended",
    value: "Recommended",
  },
  {
    label: "Most Recent to Oldest",
    value: "Most Recent to Oldest",
  },
];
