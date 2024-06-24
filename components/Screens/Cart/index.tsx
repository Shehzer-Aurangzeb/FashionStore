'use client'
import React, { useState } from "react";
import Breadcrumbs from "./../Checkout/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";
import { PATHS } from "@/constants/paths";
import { TCartProduct } from "@/state/cartSelection/types";
import { useCartState } from "@/state/cartSelection/hooks";
import {
  calculateDiscounts,
  calculatePrice,
  calculateTotalPrice,
} from "@/utils/product";
import { unknownProduct } from "@/public/assets";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import Loader from "@/components/UI/Loader";

type IProps = {};

const CartDetail = ({}: IProps) => {
  const { cartItems, removeItemFromCart, updateCartItemQty } = useCartState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleQtyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: TCartProduct
  ) => {
    const value = e.target.value;
    if (/^-?[1-9]\d*$/.test(value)) {
      updateCartItemQty(item, Number(value));
    }
  };

  return (
    <div className="relative min-h-[calc(100vh_-_68px)] overflow-hidden">
      {cartItems.length > 0 ? (
        <>
          <div className="flex justify-center items-center mt-4">
            <Breadcrumbs />
          </div>
          <div className="w-full mt-6 flex gap-x-5 justify-center h-[calc(100vh_-_135px)]  overflow-hidden lg:flex-row flex-col px-4">
            <div className="max-w-[700px]  h-full w-full mb-5 bg-transparent overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.sku} className="w-full  flex py-4 px-4 bg-white">
                  <div className="relative w-[90px] h-[90px] overflow-hidden mr-[10px]">
                    <Link
                      className="flex items-center relative h-full"
                      href={`/${PATHS.PRODUCTS}/${item.sku}`}
                    >
                      <Image src={item.image} alt={item.name} fill />
                    </Link>
                    {item.isDiscount && (
                      <div className="bg-price absolute leading-[20px] w-[40px] top-[5px] left-0 text-white text-center">
                        <span className="leading-[20px] text-xs">
                          -{item.discountPercent}%
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-full max-w-[550px]  relative flex flex-col ">
                    <h2 className="flex items-center text-black leading-[18px] text-sm overflow-hidden text-ellipsis whitespace-nowrap font-normal">
                      {item.name}
                    </h2>
                    <span className="text-gray-light text-xs">
                      Size: {item.size?.filterOptions}
                    </span>
                    <div className="flex  items-center h-[20px] pb-[6px]"></div>
                    <div className="flex items-center justify-between h-[18px] mt-5 relative leading-[18px]">
                      <div className="max-w-[158px] pr-[6px]">
                        <span
                          className={`mr-[3px] inline-block text-ellipsis overflow-hidden whitespace-nowrap text-sm font-bold leading-[14px] ${
                            item.isDiscount ? "text-price" : "text-gray-dark"
                          }`}
                        >
                          {calculatePrice(
                            item.price,
                            item.isDiscount,
                            item.discountPercent
                          )}
                        </span>
                      </div>
                      <div className="flex gap-x-4">
                        <div className="relative border-[0.5px] border-solid border-gray-light h-[20px] w-[75px] rounded-[10px] flex items-center overflow-hidden">
                          <label
                            className="text-xs leading-[14px] mr-[2px] pl-[6px] "
                            htmlFor={`qty__for-${item.sku}`}
                          >
                            Qty:{" "}
                          </label>
                          <input
                            type="text"
                            className="border-none outline-none shadow-none text-gray-dark text-xs font-medium w-full"
                            value={item.qty}
                            id={`qty__for-${item.sku}`}
                            onChange={(e) => handleQtyChange(e, item)}
                          />
                        </div>
                        <DeleteOutlined
                          onClick={() => removeItemFromCart(item)}
                          style={{
                            width: "16px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-[400px] min-w-[300px] w-full h-[202px] flex-shrink-0">
              <div className="bg-white px-4 py-4">
                <h1 className="text-xl py-2">Order Summary</h1>
                <div className="mb-[6px] text-right text-sm text-gray-dark">
                  <span className="text-2xl font-[900] pl-[2px]">
                    {calculateTotalPrice(cartItems)}
                  </span>
                </div>
                {cartItems.some((item) => item.isDiscount) && (
                  <>
                    <div className="mb-[6px] text-right text-sm text-tangerine">
                      <p>Already Saved: {calculateDiscounts(cartItems)}</p>
                    </div>
                  </>
                )}
                <div className="mt-[13px]">
                  <Button
                    className="goods-btn-add"
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        router.push(PATHS.CHECKOUT);
                      }, 300);
                    }}
                  >
                    {isLoading ? <Loader color="white" /> : "Checkout Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex items-center mx-auto mt-[80px] flex-col max-w-[500px]">
          <Image src={unknownProduct} alt="" width={200} height={200} />
          <p className="text-gray font-normal text-base mt-4 text-center">
            You have no products in your cart. Click below to add something in
            your cart
          </p>

          <button
            onClick={() => router.push(PATHS.PRODUCTS)}
            className="bg-black text-white w-fit px-10 py-4 mt-4 font-medium text-base"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDetail;
