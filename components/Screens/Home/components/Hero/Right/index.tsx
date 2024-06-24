import { WEEKLYPRODUCTS } from "@/temp";
import React from "react";
import Link from "next/link";
import { FireFilled } from "@ant-design/icons";
import WeeklyProductCard from "../../WeeklyProductCard";

function Right() {
  return (
    <div className="max-w-[432px]  w-[calc(50%_-_5.5px)] md:w-[calc(50%_-_11px)] md:max-w-[332px] h-auto relative">
      <div className="rounded-md overflow-hidden bg-[#FFDCDA] p-[2%]">
        <Link
          href={"/"}
          className="flex cursor-pointer leading-[17px] h-[17px] text-base text-maroon font-bold"
        >
          <FireFilled className="text-xs text-[#FF5882]" />
          <span className="mx-[6px] grow shrink basis-0  overflow-hidden text-ellipsis whitespace-nowrap">
            #weeklywonders
          </span>
        </Link>
        <div className="flex flex-wrap gap-[1.88%]">
          {WEEKLYPRODUCTS.map(({ imageUrl, price }, index) => (
            <WeeklyProductCard key={index} img={imageUrl} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Right;
