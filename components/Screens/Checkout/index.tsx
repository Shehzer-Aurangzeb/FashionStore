"use client";
import React from "react";
import Breadcrumbs from "./BreadCrumb";
import ShippingForm from "./ShippingForm";
import { Button, Input } from "antd";
import Image from "next/image";
import { logo } from "@/public/assets";
import RadioButton from "./PaymentMethod";
import {
  calculatePrice,
  calculateRetailPrice,
  calculateTotalPrice,
} from "@/utils/product";
import { useCartState } from "@/state/cartSelection/hooks";
import Link from "next/link";
import { PATHS } from "@/constants/paths";
import { useTranslations } from "next-intl";
import ScrollToTop from "@/hooks/useScrollTop";
interface CheckoutProps {
  dictionary: Record<string, any>;
}

const CheckoutDetail =()  => {
  const { cartItems, emptyCart } = useCartState();
  
  ScrollToTop()
  return (
    <div className="relative min-h-[calc(100vh_-_68px)]">
      <div className="flex justify-center items-center my-5">
        <Breadcrumbs />
      </div>
      <div className="w-full mt-6 flex gap-x-5 justify-center ">
        <div className="min-w-[700px] max-w-[1000px] h-full w-full mb-5">
          <ShippingForm />
          <div className="bg-white h-full w-full px-4 py-4 my-4">
            <h1 className="text-xl py-4">Order Details</h1>
            <div className="flex gap-x-4">
              {cartItems.map((item) => (
                <div
                  key={item.sku}
                  className="flex-col gap-y-4 items-center mb-4 "
                >
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
                  <div className="max-w-[158px] pr-[6px] mt-1">
                    <span
                      className={`mr-[3px] inline-block text-ellipsis overflow-hidden whitespace-nowrap text-xs font-bold ${
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
                  {item.isDiscount && (
                    <del className="block mr-[5px] text-[#999] text-xs line-through mt-[-5px]">
                      CA${item.price}
                    </del>
                  )}
                  <div className="relative border-[0.5px] mt-1 border-solid border-gray-light h-[20px] w-[75px] rounded-[10px] flex items-center overflow-hidden">
                    <label
                      className="text-xs leading-[14px] mr-[2px] pl-[6px] "
                      htmlFor={`qty__for-${item.sku}`}
                    >
                      Qty:{" "}
                    </label>
                    {item.qty}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className='bg-white h-full w-full px-4 py-4'>
      <h1 className="text-xl py-4">Payment Method</h1>
      <RadioButton/>
     
    </div> */}
        </div>

        <div className="max-w-[400px] min-w-[300px] w-full  h-full">
          <div className="bg-white px-4 py-4">
            <h1 className="text-xl py-2">{("Order Summary")}</h1>
            <div className="flex justify-between">
              <p>{("Retail Price")}</p>
              <p className="">
                <s className="text-[#999] text-xs line-through">
                  {calculateRetailPrice(cartItems)}
                </s>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>{("Subtotal")}:</p>
              <p className="text-lg font-extrabold">
                {calculateTotalPrice(cartItems)}
              </p>
            </div>
          </div>
          <div className="my-4 h-full bg-white px-4 py-4">
            <h1 className="text-xl py-2">{("Coupon Code")}</h1>
            <div className="flex justify-between items-center gap-x-3">
              <Input
                className="py-6"
                value={""}
                placeholder={("Enter the Code")}
                disabled
                style={{ padding: "6px 6px", borderRadius: 0 }}
              />

              <Button
                type="primary"
                className="input-submit-button btn-common"
                disabled
              >
               {("Apply")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetail;
