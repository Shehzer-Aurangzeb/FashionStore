"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "@/components/UI/Slider";
import { SwiperRef, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button, Popover, Rate } from "antd";
import { Pagination } from "swiper/modules";
// import "./ProductDetailModal.sass";
import { twMerge } from "tailwind-merge";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Loader from "@/components/UI/Loader";
import { ProductDetail, TReview } from "@/state/categories/types";
import { calculatePrice } from "@/utils/product";
import CustomPagination from "./Pagination";


interface IProps {
  selectedProduct: ProductDetail
}

function ProductDetailPage({selectedProduct}: IProps) {
  const [openFilterItem, setOpenFilterItems] = useState(false);
  const swiper = useRef<SwiperRef | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = selectedProduct.reviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(
    selectedProduct.reviews.length / reviewsPerPage
  );
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
            <div className=" w-[80%] float-right">
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
                  <SwiperSlide key={key} className="">
                    <div className="relative overflow-hidden h-0 w-full pb-[110%]">
                      <Image src={img} alt="" fill objectFit="contain" />
                    </div>
                  </SwiperSlide>
                ))}
              </Slider>
              <div > 
              <h1 className="text-2xl">Customer Review's</h1>
              <div className="flex items-center gap-x-2 bg-[#F7F8FA] py-4 mx-4">
              <h1 className="text-3xl">4.92</h1>
              <Rate value={4.92} allowHalf disabled />
              </div>
            
            </div>
          
           
            </div>
         
          </div>
          <div className="quick-view-des pt-[2%]">
            <div className="goods-summary__container">
              <Link href={"/"} className="goods-name__title text-lg">
                {selectedProduct.productDetails}
              </Link>
              <div className="flex gap-x-4">
              <div className="goods-name__summary">
                <span className="goods-sku">
                  SKU :{selectedProduct.productCode}
                </span>
              </div>
              <div className="goods-reviews">
                <div className="mr-[5px] inline-block">
                  <Rate value={4.5} allowHalf disabled />
                </div>
                <span className="text-[#FACF19] -mt-4">&#40;1000+ Reviews&#41;</span>
              </div>
              </div>
              
              <div className="goods-price">
                <div className="goods-price__container my-4 gap-x-4">
                  <span
                    className={[
                      "goods-price__sale text-lg font-bold pr-2",
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

                  <div className="mt-[13px]">
                  <button className="bg-black text-white w-full min-w-[390px] max-w-[395px] px-6 py-4 mt-2 text-lg uppercase font-bold" disabled={isLoading}
                      onClick={addToCart}> {isLoading ? <Loader color="white" /> : "Add to Cart"}</button>
                    {/* <Button
                      className="bg-black text-white uppercase w-full max-w-[350px] px-4 py-4 "
                      disabled={isLoading}
                      onClick={addToCart}
                      
                    >
                     
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="side-filter__item mt-10">
          <div
            className="side-filter__item__header flex w-full justify-between max-w-[385px]"
            onClick={() => setOpenFilterItems(!openFilterItem)}
          >
            <h3 className=" capitalize text-[16px] font-bold my-2">Description</h3>
            {openFilterItem ? (
              <MinusOutlined className="nav-menu__icon" />
            ) : (
             
              <PlusOutlined className="nav-menu__icon" />
            )}
          </div>
          {openFilterItem && (
            <div className="side-filter__item__content max-w-[385px] w-full">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim pariatur fuga voluptatibus consectetur impedit? Perferendis, quae repellendus similique iure excepturi minus laboriosam dicta cum distinctio quidem sit praesentium itaque voluptate.</p>
            </div>
          )}
          
        </div>
        <div className="side-filter__item gap-y-4">
          <div
            className="side-filter__item__header flex w-full justify-between max-w-[385px]"
            onClick={() => setOpenFilterItems(!openFilterItem)}
          >
            <h3 className=" capitalize text-[16px] font-bold my-2">Size & Fit</h3>
            {openFilterItem ? (
              <MinusOutlined className="nav-menu__icon" />
            ) : (
             
              <PlusOutlined className="nav-menu__icon" />
            )}
          </div>
          {openFilterItem && (
            <div className="side-filter__item__content max-w-[385px] w-full">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim pariatur fuga voluptatibus consectetur impedit? Perferendis, quae repellendus similique iure excepturi minus laboriosam dicta cum distinctio quidem sit praesentium itaque voluptate.</p>
            </div>
          )}
          
        </div>
       
          </div>
          <div>
        
          </div>
        </div>
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
            <div className=" w-[80%] float-right">
              <div > 
              <h1 className="text-2xl">Customer Review's</h1>
              <div className="flex items-center gap-x-2 bg-[#F7F8FA] py-4 mx-4">
              <h1 className="text-3xl">4.92</h1>
              <Rate value={4.92} allowHalf disabled />
              </div>
            
            </div>
            <div className="my-4"> 
            <h1 >All Reviews</h1>
            <div className="bg-black h-[2px] w-14 rounded-full"/>
            
            </div>
            {currentReviews.map((item: TReview) => (
              <div key={item.id} className="review-item my-4 p-4 bg-[#F7F8FA]">
                <div className="flex  gap-x-4 items-center">

                  <h3 className="text-lg font-bold">{item.customerName}</h3>

                <p className="text-xs text-gray-500">{item.date}</p>
                  
                </div>
                <Rate value={item.review} allowHalf disabled />
                <p className="text-sm mt-4">{item.reviewDesc}</p>

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
   
          <div>
        
          </div>
        </div>
      </div>
  );
}

export default ProductDetailPage
