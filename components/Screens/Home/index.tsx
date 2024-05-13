import React from "react";
import Header from "@/components/UI/Header";
import Image from "next/image";
import Link from "next/link";
import Carousal from "./components/Carousal";
import { CAROUSALIMAGES, MAINCATEGORIES, WEEKLYPRODUCTS } from "@/temp";
import { FireFilled } from "@ant-design/icons";
import WeeklyProductCard from "./components/WeeklyProductCard";
import StaticImageOffer from "./components/StaticImageOffer";
import CategoryCard from "./components/CategoryCard";

function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-[1446px] mx-auto">
        <div className="px-12">
          <div className="my-6 w-full flex justify-center gap-x-3 box-content">
            <div className="max-w-[332px] w-[calc(25%_-_5.5px)] h-auto relative">
              <div className="rounded-md overflow-hidden bg-[#f0f0f0]">
                <Link href={"/"} className="w-full pb-[94.5%] block relative">
                  <Image
                    src={
                      "https://img.ltwebstatic.com/images3_ccc/2024/04/29/d0/171437126794aa23acd2947b8a8697e7c60818103b_thumbnail_832x.webp"
                    }
                    alt="discount"
                    fill
                    className="bg-white object-cover align-top box-border"
                  />
                </Link>
              </div>
            </div>
            <div className="max-w-[664px] w-[calc(50%_-_11px)]">
              <div className="rounded-md overflow-hidden w-full relative">
                <Carousal data={CAROUSALIMAGES} />
              </div>
            </div>
            <div className="max-w-[332px] w-[calc(25%_-_5.5px)] h-auto relative">
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
                    <WeeklyProductCard
                      key={index}
                      img={imageUrl}
                      price={price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <StaticImageOffer imageUrl="https://img.ltwebstatic.com/images3_ccc/2024/02/23/1d/17086760736fa713ce17394de4dbff72bb79bed409.webp" />
          <div className="flex flex-wrap gap-12 px-3 items-center">
            {MAINCATEGORIES.map(({ imageUrl, name, url }, index) => (
              <CategoryCard
                key={index}
                imageUrl={imageUrl}
                url={url}
                name={name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// https://img.ltwebstatic.com/images3_ccc/2024/05/06/20/1714962720d3f2856e1271e3881c00a76291fb0391_thumbnail_2000x.webp
