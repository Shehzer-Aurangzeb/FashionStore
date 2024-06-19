"use client";
import React from "react";
import Logo from "./components/Logo";
import { useApp } from "@/context/AppProvider";
import Link from "next/link";
import { LockOutlined } from "@ant-design/icons";
import { PATHS } from "@/constants/paths";

function CartHeader() {
  const { isAppLoading } = useApp();
  return (
    <div className="bg-white m-0 px-0">
      <div className="flex flex-row justify-between items-center mx-auto my-0 py-1 px-5 w-full relative">
        <Logo isLoading={isAppLoading} />
        <div className="flex gap-x-4">
          <div className="text-white flex gap-x-2 items-center ">
            <LockOutlined className="bg-[#23865C] text-white rounded-full px-1 py-1" />
            <Link href="" className="text-[#23865C] underline">
              {" "}
              SECURE CHECKOUT
            </Link>
          </div>
          <Link href={PATHS.PRODUCTS} className="underline">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartHeader;
