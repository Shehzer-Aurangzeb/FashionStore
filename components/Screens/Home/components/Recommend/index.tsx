"use client";
import React, { Fragment, useState } from "react";
import StaticImage from "@/components/UI/StaticImage";
import { RECOMMENDED } from "@/temp";
import Product from "@/components/UI/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { addToCartIcon } from "@/public/assets";
import { RightOutlined } from "@ant-design/icons";
import { TProduct } from "@/types";
import "./Recommend.sass";
import ProductDetailModal from "@/components/UI/ProductDetailModal";

function Recommend() {
  const [selectedProduct, setSelectedProduct] = useState<TProduct | undefined>(
    undefined
  );
  const [openProductModal, setOpenProductModal] = useState(false);
  const addToCardHandler = (sku: string) => {
    setOpenProductModal(true);
    const product = RECOMMENDED.find((product) => product.sku === sku);
    setTimeout(() => {
      if (product) setSelectedProduct(product);
    }, 3000);
  };

  const handleClose = () => {
    setOpenProductModal(false);
  };
  return (
    <Fragment>
      <StaticImage
        imageUrl="https://img.ltwebstatic.com/images3_ccc/2023/11/11/0d/169968524316855f6cc26fc677aed787a5303bbb3b.webp"
        className="pb-[5.95%]"
      />
      <div className="flex flex-wrap px-1 pb-5 pt-2">
        {RECOMMENDED.map(({ images, price, sale, isOnSale, name, sku }) => (
          <Product
            key={sku}
            mainImage={images[0]}
            subMainImage={images[1] ?? ""}
            className="mx-2 mb-4 max-w-none w-[calc(20%_-_16px)]"
            isLoading={openProductModal && !selectedProduct}
          >
            <div className="pt-[6px] min-h-[24px]">
              <Link href="/" className="product-card-title">
                {name}
              </Link>
              <div className="flex justify-between items-center w-full mt-1">
                <div className="flex items-center overflow-hidden h-[21px]">
                  <div
                    className={`min-h-[12px] text-base ${
                      isOnSale ? "text-price" : "text-gray-dark"
                    } font-bold leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap mr-1`}
                  >
                    {price}
                  </div>
                  {isOnSale && (
                    <div className="border border-price text-price rounded-sm pl-[3px] pr-[2px] h-[16px] text-xs">
                      {sale}%
                    </div>
                  )}
                </div>
                <button
                  className="product-card-cart-btn"
                  onClick={() => addToCardHandler(sku)}
                >
                  <Image
                    src={addToCartIcon}
                    alt="add-to-cart"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </Product>
        ))}
        <div className="w-full text-center mt-2">
          <button className="px-6 btn-common border border-solid border-black min-w-[240px] h-[44px] leading-[42px] text-base">
            View All
            <span className="ml-[10px] inline-block">
              <RightOutlined className="text-xs" />
            </span>
          </button>
        </div>
      </div>
      {selectedProduct && (
        <ProductDetailModal
          open={openProductModal}
          close={handleClose}
          selectedProduct={selectedProduct}
        />
      )}
    </Fragment>
  );
}

export default Recommend;
