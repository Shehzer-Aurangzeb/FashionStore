import React from 'react'
import Link from "next/link";
import NextImage from "next/image"
import "./Product.sass"
import { curvedArrowDown } from "@/public/assets";
import { twMerge } from "tailwind-merge";
import Loader from "../Loader";

interface IProps {
  mainImage: string;
  subMainImage: string;
  label?: string;
  isSuperDealProduct?: boolean;
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  url: string;
}

function Product({
  mainImage,
  subMainImage,
  label,
  isSuperDealProduct = false,
  children,
  className,
  isLoading = false,
  url,
}: IProps) {
  return (
    <div className={twMerge("relative h-full block", className)}>
      <Link
        href={url}
        className="inline-block w-full relative product-image bg-white"
      >
        <div className="relative overflow-hidden block">
          <Link href={url} className="relative inline-block w-full">
            <div className="relative overflow-hidden pb-[100%]">
              <span
                className="bg-contain absolute block w-full h-full top-0 left-0"
                style={{
                  backgroundImage: mainImage,
                }}
              >
                <NextImage src={mainImage} alt="" fill />
              </span>
              <div className="product-image-mask" />
            </div>
            {subMainImage.length > 0 && (
              <div className="product-item-submain">
                <div className="relative overflow-hidden pb-[100%]">
                  <span
                    className="bg-contain absolute block w-full h-full top-0 left-0"
                    style={{
                      backgroundImage: subMainImage,
                    }}
                  >
                    <NextImage src={subMainImage} alt="" fill />
                  </span>
                  <div className="product-image-mask" />
                </div>
              </div>
            )}
          </Link>
        </div>

        {isSuperDealProduct && (
          <div className="absolute bottom-0 left-0 right-0 w-full block">
            <div className="flex items-center justify-center bg-super-product-price-bg py-1 text-base font-normal leading-[18px] ">
              <NextImage
                src={curvedArrowDown}
                alt="arrow-down"
                width={16}
                height={16}
                className="object-contain"
              />
              <span className="text-white whitespace-nowrap text-ellipsis overflow-hidden ">
                {label}
              </span>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex items-center justify-center absolute h-full w-full left-0 right-0 top-0 bottom-0 bg-[#00000061]">
            <Loader />
          </div>
        )}
      </Link>

      {children}
    </div>
  );
}

export default Product