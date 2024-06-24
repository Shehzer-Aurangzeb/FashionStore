import { api } from "@/config/api";
import { useCartState } from "@/state/cartSelection/hooks";
import { TCustomerInfo } from "@/types";
import { fakeFetch as fakeCheckout } from "@/utils";
import { calculatePrice } from "@/utils/product";
import { useCallback, useState } from "react";

export const useCheckout = () => {
  const { cartItems } = useCartState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    orderId: "",
    date: "",
  });

  const checkoutCustomer = useCallback(
    async (payload: TCustomerInfo) => {
      if (process.env.NEXT_PUBLIC_REACT_APP_NODE_ENV === "development") {
        setIsLoading(true);
        await fakeCheckout();
        setIsLoading(false);
        setIsSuccess(true);
        setOrderInfo({
          orderId: "MRL000008",
          date: "2024-06-06T11:56:19",
        });
      } else {
        setIsLoading(true);
        const payload = cartItems.map((item) => ({
          productCode: item.sku,
          productImage: item.image,
          size: item.size ? item.size.id : 0,
          quantity: item.qty,
          price: Number(
            calculatePrice(
              item.price,
              item.isDiscount,
              item.discountPercent
            ).slice(3)
          ),
        }));
        try {
          const { data } = await api.post("CheckOut", {
            order: payload,
          });
          if (data.status.isSuccess) {
            setIsLoading(false);
            setIsSuccess(true);
            setOrderInfo({
              orderId: data.content.orderId,
              date: data.requestDateTime,
            });
          } else {
            setIsSuccess(false);
          }
        } catch (e) {
          console.log("e :>> ", e);
        }
      }
    },
    [cartItems]
  );

  return {
    isSuccess,
    isLoading,
    checkoutCustomer,
    orderInfo,
  };
};
