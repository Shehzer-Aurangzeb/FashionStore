import { object, string } from "yup";
export const shippingSchema = object({
  firstName: string().required("First Name is requried"),
  lastName: string().required("Last Name is Requried"),
  shippingAddress: string().required("Shipping Address is Required"),
  state: string().required("State/Province is required"),
  city: string().required("City is required"),
  phoneNumber: string()
    .matches(/^\+[1-9]\d{1,14}$/, "Phone number must be in E.164 format")
    .required("Phone number is required"),
  postalCode: string().required(),
});