import React from "react";
import Header from "@/components/UI/Header";
import Image from "next/image";
import {MAINCATEGORIES } from "@/temp";
import StaticImage from "@/components/UI/StaticImage";
import CategoryCard from "./components/CategoryCard";
import Footer from "@/components/UI/Footer";
import Hero from "./components/Hero";
import SuperDeal from "./components/SuperDeal";
import Salezone from "./components/Salezone";
import SpotLight from "./components/Spotlight";
import Brands from "./components/Brands";
import Recommend from "./components/Recommend";

function Home() {
  return (
    <div className="relative min-h-full pb-[523px]">
      <Header />
      <div className="max-w-[1446px] mx-auto">
        <div className="px-12">
          <Hero/>
          <StaticImage imageUrl="https://img.ltwebstatic.com/images3_ccc/2024/02/23/1d/17086760736fa713ce17394de4dbff72bb79bed409.webp" />
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
          <div className="flex flex-wrap gap-5 px-3 items-center w-full h-full my-8">
            <div className="relative bg-light h-[262px] flex-1">
              {/* <Image alt="" src={""} fill/> */}
            </div>
            <div className="relative bg-light h-[262px] flex-1">
              {/* <Image alt="" src={""} fill/> */}
            </div>
          </div>
          <SuperDeal/>
          <Salezone/>
          <SpotLight/>
          <Brands/>
          <Recommend/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
