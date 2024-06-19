"use client";
import React from "react";
import { Button, Divider, Result } from "antd";
import moment from "moment";
import { CheckCircleFilled } from "@ant-design/icons";
import Link from "next/link";

type TProps = {
  orderNumber: string;
  date: string;
  amount: string;
  emptyCart: () => void;
};

function OrderConfirmationMessage({
  orderNumber,
  date,
  amount,
  emptyCart,
}: TProps) {
  return (
    <div className="flex flex-col gap-y-3 items-center justify-center">
      <CheckCircleFilled style={{ color: "#5cb85c", fontSize: 50 }} />
      <p className="font-bold text-lg text-gray-dark">Order Confirmed :&#41;</p>
      <p className="text-[#999] font-regular text-base">
        {moment(date).format("DD/MM/YYYY")}
      </p>
      <Divider dashed style={{ color: "#e4e4e4" }} />
      <div className="flex w-full justify-between max-w-[90%] items-center">
        <p className="font-regular text-base text-gray-dark">Order No.</p>
        <p className="font-regular text-base text-gray-dark">{orderNumber}</p>
      </div>
      <div className="flex w-full justify-between max-w-[90%] items-center">
        <p className="font-regular text-base text-gray-dark">Total Paid</p>
        <p className="font-regular text-base text-gray-dark">{amount}</p>
      </div>
      <Link
        href={"/"}
        onClick={emptyCart}
        className="text-center underline text-gray hover:text-gray text-base"
      >
        Go Home
      </Link>
    </div>
  );
}

export default OrderConfirmationMessage;
