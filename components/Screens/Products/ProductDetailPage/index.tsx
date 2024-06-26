"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "@/components/UI/Slider";
import { SwiperRef, SwiperSlide } from "swiper/react";
import { Button, Popover, Rate, Skeleton, message } from "antd";
import { twMerge } from "tailwind-merge";
import { CopyOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Loader from "@/components/UI/Loader";
import { SubProduct, TReview } from "@/state/categories/types";
import { calculatePrice } from "@/utils/product";
import CustomPagination from "@/components/Screens/Products/components/Pagination";
import { useCartState } from "@/state/cartSelection/hooks";
import { TCartProduct } from "@/state/cartSelection/types";
import "./ProductDetailPage.sass";
import _ from "lodash";
import Select from "@/components/UI/Select";
import { RATINGOPTIONS, REVIEWSSORTBYOPTIONS } from "@/constants/paths";
import { TSelectItem } from "@/types";
import { TSize } from "@/state/categories/types";
import { PRODUCTREVIEWS } from "@/temp";
interface IProps {
  selectedProduct: SubProduct;
}

function ProductDetailPage({ selectedProduct }: IProps) {
  const swiper = useRef<SwiperRef | null>(null);
  const [selectedSize, setSelectedSize] = useState<TSize | undefined>();
  const [selectedColor, setSelectedColor] = useState("");
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState({
    size: false,
  });
  const [selectedRating, setSelectedRating] = useState<TSelectItem>(
    RATINGOPTIONS[0]
  );
  const [sortByOption, setsortByOption] = useState<TSelectItem>(
    REVIEWSSORTBYOPTIONS[0]
  );
  const [openProductDetailsAccordion, setOpenProductDetailsAccordion] =
    useState({
      size: false,
      description: false,
    });
  const [currentPage, setCurrentPage] = useState(1);
  const { addItemToCart } = useCartState();
  const [messageApi, contextHolder] = message.useMessage();

  const reviewsPerPage = 4;
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = PRODUCTREVIEWS.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(PRODUCTREVIEWS.length / reviewsPerPage);
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
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
          : selectedProduct.sizes && selectedProduct.sizes.length > 1
          ? selectedProduct.sizes[0]
          : undefined,
        qty,
        isDiscount: selectedProduct.isDiscount,
        discountPercent: selectedProduct.discountPercent,
      };
      addItemToCart(product);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const handleRatingChange = (option: TSelectItem) => {
    setSelectedRating(option);
  };
  const handleSortByOptionChange = (option: TSelectItem) => {
    setsortByOption(option);
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
    <div className="px-12 w-full">
      {/* for popup message */}
      {contextHolder}
      <div className="flex relative text-gray-dark justify-center product-intro">
        <div className="pr-12 relative product-intro__galleryWrap">
          <Slider
            slidesPerView={1}
            ref={swiper}
            wrapperClassName="p-0 align-top relative overflow-hidden"
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
            }}
            pagination={true}
            loop={true}
          >
            {selectedProduct.imagesJson.map((img, key) => (
              <SwiperSlide key={key} className="">
                <div className="relative overflow-hidden h-0 w-full pb-[110%]">
                  <Image src={img} alt="" fill objectFit="contain" />
                </div>
              </SwiperSlide>
            ))}
          </Slider>
          <div className="relative w-full overflow-hidden">
            <h1 className="text-2xl font-bold pt-[30px] pb-[16px] capitalize">
              Customer Reviews
            </h1>
            <div className="flex items-center bg-[#F7F8FA] px-[18px] py-3">
              <h1 className="text-4xl leading-[46px] font-bold text-black mr-2">
                4.00
              </h1>
              <Rate value={4} allowHalf disabled style={{ fontSize: 20 }} />
            </div>
            <div className="product-intro__reviews">
              <span className="title">All Reviews</span>
              <div className="py-[11px] relative w-full">
                <div className="inline-block mr-[15px] whitespace-nowrap">
                  <span className="text-sm text-gray-dark">Rating</span>
                  <Select
                    options={RATINGOPTIONS}
                    onChange={handleRatingChange}
                    value={selectedRating}
                  />
                </div>
                <div className="inline-block mr-[15px] whitespace-nowrap">
                  <span className="text-sm text-gray-dark">Rating</span>
                  <Select
                    options={REVIEWSSORTBYOPTIONS}
                    onChange={handleSortByOptionChange}
                    value={sortByOption}
                  />
                </div>
              </div>
            </div>
            {currentReviews.map((item: TReview) => (
              <div
                key={item.id}
                className="review-item py-4 border-b-[1px] border-dashed border-light"
              >
                <div className="flex items-center mb-2">
                  <h3 className="text-xs overflow-hidden text-ellipsis leading-[2] whitespace-normal text-gray-dark font-bold mr-1">
                    {item.customerName}
                  </h3>
                  <p className="text-[13px] text-gray whitespace-nowrap">
                    {item.date}
                  </p>
                </div>
                <Rate
                  value={item.review}
                  style={{ fontSize: "12px", marginBottom: "8px" }}
                  allowHalf
                  disabled
                />
                <p className="text-base break-words leading-[21px] text-gray-dark mb-[10px]">
                  {item.reviewDesc}
                </p>
              </div>
            ))}
            <div className=" float-right">
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
        <div className="quick-view-des product-intro__info pt-[2%]">
          <div className="sticky top-[100px] z-[1]">
            <div className="relative mb-[25px] product-intro__head">
              <h1 className="product-intro__head-name">
                {selectedProduct.productDetails}
              </h1>
              <div className="product-intro__head-sku-ctn">
                <div className="product-intro__head-sku">
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden flex-1 text-gray">
                    SKU :{selectedProduct.productCode}
                  </span>
                  <CopyOutlined
                    style={{
                      color: "#767676",
                    }}
                    size={10}
                    className="ml-[2px] mr-[12px]"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        selectedProduct.productCode
                      );
                      messageApi.open({
                        type: "success",
                        content: "Copied Succesfully",
                      });
                    }}
                  />
                </div>
                <div className="flex-1 whitespace-nowrap">
                  <Rate
                    value={4}
                    allowHalf
                    disabled
                    style={{
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  />
                  <span className="text-xs text-[#facf19]">
                    &#40;8 Reviews&#41;
                  </span>
                </div>
              </div>
              <div className="flex items-center flex-wrap leading-[1.2]">
                <span
                  className={`leading-[1.2] text-2xl font-bold mr-[4px] flex items-center ${
                    selectedProduct?.isDiscount
                      ? "text-price"
                      : "text-gray-dark"
                  }`}
                >
                  <span className="text-base font-bold mr-[2px]">From</span>
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
              </div>
            </div>
            <div className="product-intro__select-box">
              <div className="goods-color">
                <div className="goods-color__title">
                  <span className="title">Color</span>
                  {/* <Button className="link-box">Large Image</Button> */}
                </div>
                {selectedProduct.imagesJson.length > 0 && (
                  <div className="goods-color__radio-container">
                    {selectedProduct.imagesJson.map((img, index) => (
                      <div
                        className={`goods-color__radio ${
                          _.isEqual(img, selectedColor) && "active"
                        }`}
                        key={index}
                        onClick={() => handleImageClick(index)}
                      >
                        <div className="relative w-full overflow-hidden pb-[133%]">
                          <Image src={img} alt="" fill objectFit="contain" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="product-intro__size">
                {selectedProduct.sizes && (
                  <>
                    <div className="flex gap-x-5 items-center mb-[15px]">
                      <p className=" text-base font-bold text-gray-dark">
                        Size
                      </p>
                      {isError.size && (
                        <p className="text-error text-sm">Please choose Size</p>
                      )}
                    </div>
                    <div className="flex flex-wrap">
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
                              "py-2 px-1 mr-[12px] mb-[12px] border border-solid border-light rounded-[48px] text-center cursor-pointer relative min-w-[66px] min-h-[32px] leading-[16px] inline-block max-w-full",
                              size.id === selectedSize?.id &&
                                "border-[2px] border-gray-dark"
                            )}
                            onClick={() => {
                              if (isError.size)
                                setIsError((prev) => ({
                                  ...prev,
                                  size: false,
                                }));
                              setSelectedSize(size);
                            }}
                          >
                            <p className="px-3 text-sm overflow-hidden text-ellipsis whitespace-nowrap leading-[16px]">
                              {size.filterOptions}
                            </p>
                          </div>
                        </Popover>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="product-intro__qty">
                <p className="text-sm text-gray-dark">Qty:</p>
                <div className="mx-[15px] border border-[#f6f6f6]">
                  <span className={`reduce ${qty === 1 ? "disabled" : ""}`}>
                    <MinusOutlined
                      onClick={() => handleQtyActions("reduce")}
                      size={10}
                      disabled={qty === 1}
                    />
                  </span>
                  <input type="text" value={qty} onChange={handleQtyChange} />
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
            </div>
            <div className="side-filter__item mt-10">
              <div
                className="side-filter__item__header flex w-full justify-between max-w-[385px] cursor-pointer"
                key="description"
                onClick={() =>
                  setOpenProductDetailsAccordion((prev) => ({
                    ...prev,
                    description: !prev.description,
                  }))
                }
              >
                <h3 className=" capitalize text-[16px] font-bold my-2">
                  Description
                </h3>
                {openProductDetailsAccordion.description ? (
                  <MinusOutlined className="nav-menu__icon" />
                ) : (
                  <PlusOutlined className="nav-menu__icon" />
                )}
              </div>
              {openProductDetailsAccordion.description && (
                <div className="side-filter__item__content max-w-[385px] w-full">
                  <p>Description of Product</p>
                </div>
              )}
            </div>
            <div className="side-filter__item gap-y-4">
              <div
                className="side-filter__item__header flex w-full justify-between max-w-[385px] cursor-pointer"
                key="size"
                onClick={() =>
                  setOpenProductDetailsAccordion((prev) => ({
                    ...prev,
                    size: !prev.size,
                  }))
                }
              >
                <h3 className=" capitalize text-[16px] font-bold my-2">
                  Size & Fit
                </h3>
                {openProductDetailsAccordion.size ? (
                  <MinusOutlined className="nav-menu__icon" />
                ) : (
                  <PlusOutlined className="nav-menu__icon" />
                )}
              </div>
              {openProductDetailsAccordion.size && (
                <div className="side-filter__item__content max-w-[385px] w-full">
                  <p>Product Sizes</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
