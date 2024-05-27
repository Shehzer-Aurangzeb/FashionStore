import React, { Fragment } from "react";
import {
  CustomerServiceOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Popover, Skeleton } from "antd";
import ShoppingCart from "./Popover/ShoppingCart";
import CustomerService from "./Popover/CustomerService";
import Language from "./Popover/Language";

interface IProps {
  isLoading: boolean;
}

function Actions({ isLoading }: IProps) {
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
        </Fragment>
      )}
    </div>
  );
}

export default Actions;
