'use client'
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { emptyCartIcon } from "@/public/assets";
import { DeleteOutlined } from "@ant-design/icons";
import { useCartState } from "@/state/cartSelection/hooks";
import Link from "next/link";
import {
  calculateDiscounts,
  calculatePrice,
  calculateRetailPrice,
  calculateTotalPrice,
} from "@/utils/product";
import { TCartProduct } from "@/state/cartSelection/types";
import { PATHS } from "@/constants/paths";
import { useRouter } from "next/navigation";

function ShoppingCart() {
  const { cartItems, removeItemFromCart, updateCartItemQty } = useCartState();
  const router = useRouter()
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
    <Fragment>
      <div className="max-h-[456px] overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.sku} className="w-[350px] my-[10px] mx-[20px] flex">
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
                      className="border-none outline-none shadow-none text-gray-dark text-xs font-medium w-full"
                      value={item.qty}
                      id={`qty__for-${item.sku}`}
                      onChange={(e) => handleQtyChange(e, item)}
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
                  <DeleteOutlined
                    onClick={() => removeItemFromCart(item)}
                    style={{
                      width: "16px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-y-8 items-center px-3 py-4">
            <Image
              width={40}
              src={emptyCartIcon}
              alt="empty-cart icon"
              className="opacity-50"
            />
            <p className="text-gray-light text-sm font-light">
              Shopping cart is empty.
            </p>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="py-[10px] px-[20px] mt-4 text-right">
            {cartItems.some((item) => item.isDiscount) && (
              <>
                <div className="mb-[6px] text-right text-sm text-gray-dark">
                  <p>Retail Price: {calculateRetailPrice(cartItems)}</p>
                </div>
                <div className="mb-[6px] text-right text-sm text-tangerine">
                  <p>Already Saved: {calculateDiscounts(cartItems)}</p>
                </div>
              </>
            )}

            <div className="mb-[6px] text-right text-sm text-gray-dark">
              <p>
                Total:
                <span className="text-xl font-bold text-price pl-[2px]">
                  {calculateTotalPrice(cartItems)}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push(PATHS.CART)}
            className="bg-black text-white w-full px-4 py-4 mt-2"
          >
            View Cart
          </button>
        </>
      )}
    </Fragment>
  );
}

export default ShoppingCart;
