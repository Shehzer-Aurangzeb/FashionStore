"use client";
import React, { useRef, useState } from "react";
import CustomModal from "../Modal";
import Image from "next/image";
import Slider from "../Slider";
import { SwiperRef, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button, Popover, Rate } from "antd";
import { Pagination } from "swiper/modules";
import "./ProductDetailModal.sass";
import { twMerge } from "tailwind-merge";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Loader from "../Loader";
import { SubProduct } from "@/state/categories/types";
import { calculatePrice } from "@/utils/product";
import { useModal } from "@/context/ModalProvider";
interface IProps {
  close: () => void;
  selectedProduct: SubProduct;
}

function ProductDetailModal({ selectedProduct, close }: IProps) {
  const swiper = useRef<SwiperRef | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen } = useModal();

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

  const addToCart = () => {
    // console.log("product", selectedProduct, selectedSize);
  };

  return (
    <CustomModal
      centered
      open={isOpen}
      onCancel={close}
      className="p-0"
      width={1000}
    >
      <div className="px-12 w-full">
        <div className="flex relative text-gray-dark quick-view">
          <div className="pr-12 relative quick-view-gallery w-[54.5%]">
            {/* <div className="absolute left-0 top-0 w-[50px] h-full overflow-hidden quick-view-thumbs">
              <div className="overflow-y-auto overflow-x-hidden h-full align-top quick-view-thumbs-wrap">
                {selectedProduct.imagesJson.map((img, key) => (
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
            </div> */}
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
                {selectedProduct.imagesJson.map((img, key) => (
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
                {selectedProduct.productDetails}
              </Link>
              <div className="goods-name__summary">
                <span className="goods-sku">
                  SKU :{selectedProduct.productCode}
                </span>
              </div>
              <div className="goods-reviews">
                <div className="mr-[5px] inline-block">
                  <Rate value={4.5} allowHalf disabled />
                </div>
                <span className="text-[#999]">&#40;1000 Reviews&#41;</span>
              </div>
              <div className="goods-price">
                <div className="goods-price__container">
                  <span
                    className={[
                      "goods-price__sale",
                      selectedProduct?.isDiscount ? "text-price" : "text-black",
                    ].join(" ")}
                  >
                    {calculatePrice(
                      selectedProduct.price,
                      selectedProduct.isDiscount,
                      selectedProduct.discountPercent
                    )}
                  </span>
                  {selectedProduct?.isDiscount && (
                    <del className="mr-[5px] text-[#999] text-xs line-through">
                      CA${selectedProduct.price}
                    </del>
                  )}
                  {selectedProduct?.isDiscount && (
                    <span className="bg-gray-dark text-white h-[18px] leading-[18px] inline-block text-xs mr-[5px] px-2">
                      {selectedProduct.discountPercent} %
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
                    {/* <span className="font-normal text-gray-dark pl-[9px]">
                      : White
                    </span> */}
                  </div>
                  {/* <Button className="link-box">Large Image</Button> */}
                </div>
                {selectedProduct.imagesJson.length > 0 && (
                  <div className="pt-[3px] relative overflow-hidden block product-intro__color-choose">
                    {selectedProduct.imagesJson.map((img, key) => (
                      <div
                        className={`quick-view-thumbs-item inline-block ${
                          key === swiper.current?.swiper.activeIndex && "active"
                        } mr-2 cursor-pointer w-[50px]`}
                        key={key}
                        onClick={() => {
                          setSelectedImage(key);
                          swiper.current?.swiper.slideTo(key);
                        }}
                      >
                        <div className="relative w-full overflow-hidden pb-[133%]">
                          <Image src={img} alt="" fill objectFit="contain" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="product-intro__size mt-3">
                  {selectedProduct.sizes && (
                    <>
                      <p className="mb-[15px] text-base font-bold text-gray-dark">
                        Size
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.sizes?.map((size) => (
                          <Popover
                            content={<p></p>}
                            title="Product Measurement"
                            trigger="hover"
                            key={size.id}
                            mouseEnterDelay={0.5}
                          >
                            <div
                              className={twMerge(
                                "py-2 px-1 border border-solid border-light rounded-[48px] text-center cursor-pointer relative min-w-[66px] min-h-[32px] leading-[16px] inline-block max-w-full",
                                size.filterOptions === selectedSize &&
                                  "border-[2px] border-gray-dark"
                              )}
                              onClick={() =>
                                setSelectedSize(size.filterOptions)
                              }
                            >
                              {size.filterOptions}
                            </div>
                          </Popover>
                        ))}
                      </div>
                    </>
                  )}

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
                    <Button
                      className="goods-btn-add"
                      disabled={isLoading}
                      onClick={addToCart}
                    >
                      {isLoading ? <Loader color="white" /> : "Add to Cart"}
                    </Button>
                  </div>
                  <div className="mt-[13px]">
                    <Link
                      href="/"
                      className="inline-block text-[#3379cb] text-sm whitespace-nowrap"
                    >
                      View full Details
                    </Link>
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
