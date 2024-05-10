import React from "react";
import { Image, Skeleton } from "antd";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative block h-[56px] leading-[56px] px-[25px] py-0 bg-white">
      <Link href={"/"} className="text-3xl text-gray-dark">
        <Image
          width={150}
          alt="logo"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/2/25/Shein-logo.png"
          }
          preview={false}
        />
      </Link>
    </div>
  );
}

export default Logo;
