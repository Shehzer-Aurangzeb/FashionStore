"use client";
import React, { Fragment, useEffect, useState } from "react";
import {
  CustomerServiceOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Popover, Skeleton } from "antd";
import ShoppingCart from "./Popover/ShoppingCart";
import CustomerService from "./Popover/CustomerService";
import Language from "./Popover/Language";
import { useCartState } from "@/state/cartSelection/hooks";

interface IProps {
  isLoading: boolean;
}

function Actions({ isLoading }: IProps) {
  const [openShoppingCart, setOpenShoppingCart] = useState(false);
  const { cartItems } = useCartState();
  useEffect(() => {
    if (!openShoppingCart) {
      setOpenShoppingCart(true);
      const timeout = setTimeout(() => {
        setOpenShoppingCart(false);
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [cartItems, openShoppingCart]);
  return (
    <div className="flex flex-row gap-x-6 h-[56px] pr-6 whitespace-nowrap header-right-actions text-2xl">
      {isLoading ? (
        <Fragment>
          <Skeleton.Avatar size={30} active />
          <Skeleton.Avatar size={30} active />
          <Skeleton.Avatar size={30} active />
        </Fragment>
      ) : (
        <Fragment>
          <Popover trigger="hover" content={<ShoppingCart />}>
            <div className="flex items-center">
              <ShoppingCartOutlined />
              {cartItems.length > 0 && (
                <span className="inline-flex text-xs pl-[2px] text-gray-light">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Popover>
          <Popover content={<CustomerService />}>
            <CustomerServiceOutlined />
          </Popover>
          <Popover content={<Language />}>
            <GlobalOutlined />
          </Popover>
        </Fragment>
      )}
    </div>
  );
}

export default Actions;
