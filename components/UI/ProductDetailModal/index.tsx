"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomModal from "../Modal";
import { TProduct } from "@/types";
import Image from "next/image";
import Slider from "../Slider";
import { SwiperRef, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button, Popover, Rate, Skeleton } from "antd";
import { PRODUCTCHOOSE } from "@/temp";
import StaticImage from "../StaticImage";
import { Pagination } from "swiper/modules";
import "./ProductDetailModal.sass";
import { twMerge } from "tailwind-merge";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Loader from "../Loader";
interface IProps {
  open: boolean;
  close: () => void;
  selectedProduct: TProduct;
}

function ProductDetailModal({ selectedProduct, open, close }: IProps) {
  const swiper = useRef<SwiperRef | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleQtyActions = (type: "add" | "reduce") => {
    if (type === "add") {
      setQty((qty) => ++qty);
    }
    if (type === "reduce" && qty > 1) {
      setQty((qty) => --qty);
    }
  };
  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^-?[1-9]\d*$/.test(value)) {
      setQty(Number(value));
    }
  };

  return (
    <CustomModal
      centered
      open={open}
      onCancel={close}
      className="p-0"
      width={1000}
    >
      <div className="px-12 w-full">
        <div className="flex relative text-gray-dark quick-view">
          <div className="pl-[60px] pr-12 relative quick-view-gallery w-[54.5%]">
            <div className="absolute left-0 top-0 w-[50px] h-full overflow-hidden quick-view-thumbs">
              <div className="overflow-y-auto overflow-x-hidden h-full align-top quick-view-thumbs-wrap">
                {selectedProduct?.images.map((img, key) => (
                  <div
                    className={`quick-view-thumbs-item ${
                      key === selectedImage && "active"
                    } mb-[5px] cursor-pointer w-[50px]`}
                    key={key}
                    onClick={() => setSelectedImage(key)}
                  >
                    <div className="relative w-full overflow-hidden pb-[133%]">
                      <Image src={img} alt="" fill objectFit="contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="align-top relative overflow-hidden">
              <Slider
                slidesPerView={1}
                ref={swiper}
                wrapperClassName="p-0"
                breakpoints={{
                  1024: {
                    slidesPerView: 1,
                  },
                }}
                pagination={true}
                modules={[Pagination]}
                loop={true}
              >
                {selectedProduct?.images.map((img, key) => (
                  <SwiperSlide key={key}>
                    <div className="relative overflow-hidden h-0 w-full pb-[133%]">
                      <Image src={img} alt="" fill objectFit="contain" />
                    </div>
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>
          <div className="quick-view-des">
            <div className="goods-summary__container">
              <Link href={"/"} className="goods-name__title">
                {selectedProduct?.name}
              </Link>
              <div className="goods-name__summary">
                <span className="goods-sku">SKU :swear18200323976</span>
              </div>
              <div className="goods-reviews">
                <div className="mr-[5px] inline-block">
                  <Rate value={4.5} allowHalf />
                </div>
                <span className="text-[#999]">&#40;1000 Reviews&#41;</span>
              </div>
              <div className="goods-price">
                <div className="goods-price__container">
                  <span
                    className={[
                      "goods-price__sale",
                      selectedProduct?.isOnSale ? "text-price" : "text-black",
                    ].join(" ")}
                  >
                    {selectedProduct?.price}
                  </span>
                  {selectedProduct?.isOnSale && (
                    <del className="mr-[5px] text-[#999] text-xs line-through">
                      {selectedProduct.price}
                    </del>
                  )}
                  {selectedProduct?.isOnSale && (
                    <span className="bg-gray-dark text-white h-[18px] leading-[18px] inline-block text-xs mr-[5px] px-2">
                      {selectedProduct.sale} %
                    </span>
                  )}
                </div>
              </div>
              <div className="product-intro">
                <div className="product-intro__color-title">
                  <div className="color">
                    <span className="text-gray-dark font-bold text-base">
                      Color
                    </span>
                    <span className="font-normal text-gray-dark pl-[9px]">
                      : White
                    </span>
                  </div>
                  <Button className="link-box">Large Image</Button>
                </div>
                <div className="pt-[3px] relative overflow-hidden block product-intro__color-choose">
                  {PRODUCTCHOOSE.map((product, index) => (
                    <span
                      onClick={() => {}}
                      className="relative inline-block"
                      key={index}
                    >
                      <div className="product-intro__color-block">
                        <StaticImage
                          imageUrl={product.images[0]}
                          className="pb-[133%]"
                        />
                      </div>
                    </span>
                  ))}
                </div>
                <div className="product-intro__size">
                  <p className="mb-[15px] text-base font-bold text-gray-dark">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProduct?.sizes.map(({ size }) => (
                      <Popover
                        content={<p></p>}
                        title="Product Measurement"
                        trigger="hover"
                        key={size}
                        mouseEnterDelay={0.5}
                      >
                        <div
                          className={twMerge(
                            "py-2 px-1 border border-solid border-light rounded-[48px] text-center cursor-pointer relative min-w-[66px] min-h-[32px] leading-[16px] inline-block max-w-full",
                            size === selectedSize &&
                              "border-[2px] border-gray-dark"
                          )}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </div>
                      </Popover>
                    ))}
                  </div>
                  <div className="quick-view__quantity">
                    <p className="text-sm text-gray-dark">Qty:</p>
                    <div className="mx-[15px] border border-[#f6f6f6] ">
                      <span className={`reduce ${qty === 1 ? "disabled" : ""}`}>
                        <MinusOutlined
                          onClick={() => handleQtyActions("reduce")}
                          size={10}
                          disabled={qty === 1}
                        />
                      </span>
                      <input
                        type="text"
                        value={qty}
                        onChange={handleQtyChange}
                      />
                      <span className="add">
                        <PlusOutlined
                          size={10}
                          onClick={() => handleQtyActions("add")}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mt-[13px]">
                    <Button className="goods-btn-add" disabled={isLoading}>
                      {isLoading ? <Loader color="white" /> : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}

export default ProductDetailModal;
