"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/assets";
import { Skeleton } from "antd";

interface IProps {
  isLoading: boolean;
}
function Logo({ isLoading }: IProps) {
  return (
    <div className="relative block h-[56px] leading-[56px] px-[25px] py-0 bg-white">
      {isLoading ? (
        <Skeleton.Avatar active={isLoading} size={40} />
      ) : (
        <Link href={"/"} className="text-3xl text-gray-dark">
          <Image
            width={40}
            alt="logo"
            src={logo}
            className="object-contain h-[40px]"
          />
        </Link>
      )}
    </div>
  );
}

export default Logo;
