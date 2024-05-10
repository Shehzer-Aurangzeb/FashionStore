import React from "react";
import {
  CustomerServiceOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
import ShoppingCart from "./Popover/ShoppingCart";
import CustomerService from "./Popover/CustomerService";
import Language from "./Popover/Language";

function Actions() {
  return (
    <div className="flex flex-row gap-x-6 h-[56px] pr-6 whitespace-nowrap header-right-actions text-2xl">
      <Popover content={<ShoppingCart />}>
        <ShoppingCartOutlined />
        {/* <span>0</span> */}
      </Popover>
      <Popover content={<CustomerService />}>
        <CustomerServiceOutlined />
      </Popover>
      <Popover content={<Language />}>
        <GlobalOutlined />
      </Popover>
    </div>
  );
}

export default Actions;
