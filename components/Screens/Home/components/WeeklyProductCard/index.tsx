import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  img: string;
  price: string;
}

function WeeklyProductCard({ img, price }: IProps) {
  return (
    <Link
      href={"/"}
      className="rounded-[2pt] relative overflow-hidden w-[32%] mt-[1.88%]"
    >
      <div className="relative w-full pb-[133.33%]">
        <Image src={img} alt="" fill />
      </div>
      <div className="bg-prouduct-price-mask text-center absolute bottom-0 w-full h-[29%] flex items-end justify-center">
        <div className="text-center bg-white rounded-[46px] px-1 py-[2px] mb-[9.8%] text-price text-xs font-bold leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap h-[18px] inline-block max-w-[calc(100%_-_8px)] ">
          {price}
        </div>
      </div>
    </Link>
  );
}

export default WeeklyProductCard;
