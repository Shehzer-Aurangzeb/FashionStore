import React from "react";
import Modal from "@/components/UI/Modal";
import { useCartState } from "@/state/cartSelection/hooks";
import Image from "next/image";
import { calculatePrice, calculateTotalPrice } from "@/utils/product";
import { Button } from "antd";
import { useCheckout } from "@/hooks/useCheckout";
import Loader from "@/components/UI/Loader";
import { TCustomerInfo } from "@/types";
import OrderConfirmationMessage from "../OrderConfirmation";

type TProps = {
  isOpen: boolean;
  onCancel: () => void;
  customerInfo: TCustomerInfo;
};

function ConfirmationModal({ isOpen, onCancel, customerInfo }: TProps) {
  const { cartItems, emptyCart } = useCartState();
  const { checkoutCustomer, isLoading, isSuccess, orderInfo } = useCheckout();
  const placeOrder = () => {
    checkoutCustomer(customerInfo);
  };
  return (
    <Modal open={isOpen} onCancel={onCancel} closable={!isSuccess}>
      {isSuccess ? (
        <OrderConfirmationMessage
          orderNumber={orderInfo.orderId}
          amount={calculateTotalPrice(cartItems)}
          date={orderInfo.date}
          emptyCart={emptyCart}
        />
      ) : (
        <>
          <div className="max-h-[456px] overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.sku}
                className="w-[350px] my-[10px] mx-[20px] flex"
              >
                <div className="relative w-[90px] h-[90px] overflow-hidden mr-[10px]">
                  <div className="flex items-center relative h-full">
                    <Image src={item.image} alt={item.name} fill />
                  </div>
                  {item.isDiscount && (
                    <div className="bg-price absolute leading-[20px] w-[40px] top-[5px] left-0 text-white text-center">
                      <span className="leading-[20px] text-xs">
                        -{item.discountPercent}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="w-[222px] relative flex flex-col justify-between">
                  <h2 className="flex items-center text-black leading-[18px] text-sm overflow-hidden text-ellipsis whitespace-nowrap mb-[6px] font-normal">
                    {item.name}
                  </h2>
                  <div className="flex justify-between items-center h-[20px] pb-[6px]">
                    <span className="text-gray-light text-xs">
                      Size: {item.size?.filterOptions}
                    </span>
                    <div className="relative border-[0.5px] border-solid border-gray-light h-[20px] w-[75px] rounded-[10px] flex items-center overflow-hidden">
                      <label
                        className="text-xs leading-[14px] mr-[2px] pl-[6px] "
                        htmlFor={`qty__for-${item.sku}`}
                      >
                        Qty:{" "}
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="border-none outline-none shadow-none text-gray-dark text-xs font-medium w-full"
                        value={item.qty}
                        id={`qty__for-${item.sku}`}
                        //   onChange={(e) => handleQtyChange(e, item)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center h-[18px] relative leading-[18px]">
                    <div className="max-w-[158px] pr-[6px]">
                      <span
                        className={`mr-[3px] inline-block text-ellipsis overflow-hidden whitespace-nowrap text-sm font-bold
                      leading-[14px] ${
                        item.isDiscount ? "text-price" : "text-gray-dark"
                      } 
                      `}
                      >
                        {calculatePrice(
                          item.price,
                          item.isDiscount,
                          item.discountPercent
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-[10px] px-[20px] mt-4 text-right">
            <div className="mb-[6px] text-right text-sm text-gray-dark">
              <p>
                Total:
                <span className="text-xl font-bold text-price pl-[2px]">
                  {calculateTotalPrice(cartItems)}
                </span>
              </p>
            </div>
          </div>
          <Button
            className="goods-btn-add max-w-[350px] mx-auto"
            disabled={isLoading}
            onClick={placeOrder}
            style={{
              display: "block",
            }}
          >
            {isLoading ? <Loader color="white" /> : "Place Order"}
          </Button>
        </>
      )}
    </Modal>
  );
}

export default ConfirmationModal;
