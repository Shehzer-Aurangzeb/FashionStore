"use client";
import React, { Fragment } from "react";
import { MAINCATEGORIES } from "@/temp";
import StaticImage from "@/components/UI/StaticImage";
import CategoryCard from "./components/CategoryCard";
import Hero from "./components/Hero";
import SuperDeal from "./components/SuperDeal";
import Salezone from "./components/Salezone";
import SpotLight from "./components/Spotlight";
import Brands from "./components/Brands";
import Recommend from "./components/Recommend";
import StyleGallery from "./components/StyleGallery";
import { useCategoriesState } from "@/state/categories/hooks";
import { useApp } from "@/context/AppProvider";
import { Skeleton } from "antd";
import Image from "next/image";

function Home() {
  const { categories } = useCategoriesState();
  const { isAppLoading } = useApp();
  return (
    <div className="max-w-[1446px] mx-auto">
      <div className="px-12">
        <Hero />
        <StaticImage imageUrl="https://img.ltwebstatic.com/images3_ccc/2024/02/23/1d/17086760736fa713ce17394de4dbff72bb79bed409.webp" />
        <div className="flex flex-wrap gap-12 px-3 items-start">
          {isAppLoading ? (
            <Fragment>
              {Array.from({ length: 16 }, (_, index) => (
                <div key={index} className="flex flex-col gap-y-2 items-center">
                  <Skeleton.Avatar
                    size="large"
                    style={{
                      height: 80,
                      width: 80,
                    }}
                    active
                  />
                  <Skeleton.Input size="small" active />
                </div>
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {categories?.slice(0, 18).map(({ categoryName, id }) => (
                <CategoryCard
                  key={id}
                  imageUrl={""}
                  url={"/"}
                  name={categoryName}
                />
              ))}
            </Fragment>
          )}
        </div>
        {/* <div className="flex flex-wrap gap-5 px-3 items-center w-full h-full my-8">
          <div className="relative bg-light h-[262px] flex-1">
            <Image alt="" src={""} fill/>
          </div>
          <div className="relative bg-light h-[262px] flex-1">
            <Image alt="" src={""} fill/>
          </div>
        </div> */}
        {/* <SuperDeal /> */}
        {/* <Salezone /> */}
        <SpotLight />
        <Brands />
        <Recommend />
        <StyleGallery />
      </div>
    </div>
  );
}

export default Home;
