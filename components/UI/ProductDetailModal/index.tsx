"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomModal from "../Modal";
import Image from "next/image";
import Slider from "../Slider";
import { SwiperRef, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button, Popover, Rate } from "antd";
import "./ProductDetailModal.sass";
import { twMerge } from "tailwind-merge";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Loader from "../Loader";
import { SubProduct } from "@/state/categories/types";
import { calculatePrice } from "@/utils/product";
import { useModal } from "@/context/ModalProvider";
import _ from "lodash";
import { useCartState } from "@/state/cartSelection/hooks";
import { TCartProduct } from "@/state/cartSelection/types";
interface IProps {
  close: () => void;
  selectedProduct: SubProduct;
}

function ProductDetailModal({ selectedProduct, close }: IProps) {
  const swiper = useRef<SwiperRef | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState("");
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    size: false,
  });
  const { isOpen, handleClose } = useModal();
  const { addItemToCart } = useCartState();

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
  const handleImageClick = (index: number) => {
    const swiperInstance = swiper.current?.swiper;
    if (!swiperInstance) return;
    swiperInstance.slideTo(index);
  };

  const addToCart = () => {
    if (
      selectedProduct.sizes &&
      selectedProduct.sizes.length > 1 &&
      !selectedSize
    ) {
      setIsError((prev) => ({
        ...prev,
        size: true,
      }));
    } else {
      setIsLoading(true);
      const product: TCartProduct = {
        sku: selectedProduct.productCode,
        name: selectedProduct.productDetails,
        price: selectedProduct.price,
        image: selectedColor,
        size: selectedSize
          ? selectedSize
          : selectedProduct.sizes
          ? selectedProduct.sizes[0].filterOptions
          : "",
        qty,
        isDiscount: selectedProduct.isDiscount,
        discountPercent: selectedProduct.discountPercent,
      };
      addItemToCart(product);
      setTimeout(() => {
        handleClose();
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    const initializeSwiper = () => {
      const swiperInstance = swiper.current?.swiper;
      if (swiperInstance) {
        const handleSlideChange = () => {
          const swiperInstance = swiper.current?.swiper;
          const activeIndex = swiperInstance?.activeIndex;
          if (activeIndex === undefined) return;
          const activeImage =
            swiperInstance?.slides[activeIndex]?.querySelector("img")?.src;
          if (!activeImage) return;
          setSelectedColor(activeImage);
        };
        swiperInstance.on("slideChange", handleSlideChange);

        return () => {
          swiperInstance.off("slideChange", handleSlideChange);
        };
      } else {
        setTimeout(initializeSwiper, 100);
      }
    };
    if (selectedProduct) initializeSwiper();
  }, [selectedProduct]);

  useEffect(() => {
    setSelectedColor(selectedProduct.imagesJson[0]);
  }, [selectedProduct]);

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
                <div className="pt-[3px] relative overflow-hidden block product-intro__color-choose">
                  {selectedProduct.imagesJson.map((img, index) => (
                    <div
                      className={`quick-view-thumbs-item inline-block ${
                        _.isEqual(img, selectedColor) && "active"
                      } mr-2 cursor-pointer w-[50px]`}
                      key={index}
                      onClick={() => handleImageClick(index)}
                    >
                      <div className="relative w-full overflow-hidden pb-[133%]">
                        <Image src={img} alt="" fill objectFit="contain" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="product-intro__size mt-3">
                  {selectedProduct.sizes && (
                    <>
                      <div className="flex gap-x-5 items-center mb-[15px]">
                        <p className=" text-base font-bold text-gray-dark">
                          Size
                        </p>
                        {isError.size && (
                          <p className="text-error text-sm">
                            Please choose Size
                          </p>
                        )}
                      </div>
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
                              onClick={() => {
                                if (isError.size)
                                  setIsError((prev) => ({
                                    ...prev,
                                    size: false,
                                  }));
                                setSelectedSize(size.filterOptions);
                              }}
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
