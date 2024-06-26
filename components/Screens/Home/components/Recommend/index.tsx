"use client";
import React, { Fragment } from "react";
import "./Recommend.sass";
import StaticImage from "@/components/UI/StaticImage";
import Product from "@/components/UI/ProductCard";
import Link from "next/link";
import Image from "next/image";
import ProductDetailModal from "@/components/UI/ProductDetailModal";
import { addToCartIcon } from "@/public/assets";
import { RightOutlined } from "@ant-design/icons";
import { calculatePrice } from "@/utils/product";
import ProductCardSkeleton from "@/components/UI/ProductCard/Skeleton";
import { useApp } from "@/context/AppProvider";
import _ from "lodash";
import { useProducts } from "@/state/products/hooks";
import { useModal } from "@/context/ModalProvider";
import { PATHS } from "@/constants/paths";
import { useRouter } from "next/navigation";
import "./../../../Products/components/ProductListContainer/ProductList.sass";

function Recommend() {
  const { isAppLoading } = useApp();
  const { products } = useProducts();
  const router = useRouter()
  const {
    selectedProduct,
    setSelectedProductID,
    setSelectedProduct,
    selectedProductID,
    viewProductDetail,
  } = useProducts();
  const { handleClose } = useModal();

  const closeProductModal = () => {
    handleClose();
    setSelectedProduct(undefined);
    setSelectedProductID("");
  };
  return (
    <Fragment>
       <h2 className='h-[41px] leading-[41px] text-center text-[36px]  text-gray-dark  capitalize font-extrabold  my-4'>Recommend</h2>
       <div className=" flex flex-wrap gap-x-3 gap-y-1 bg-white product-list-container">
        {isAppLoading ? (
          <>
            {Array.from({ length: 6 }, (_, index) => {
              return <ProductCardSkeleton key={index} />;
            })}
          </>
        ) : (
          <>
            {products.map(
              ({
                imagesJson: images,
                price,
                discountPercent: sale,
                isDiscount: isOnSale,
                productDetails: name,
                productCode: sku,
              }) => (
                <Product
                  key={sku}
                  mainImage={images[0] ?? ""}
                  subMainImage={images[1] ?? ""}
                 className="product-card"
                  isLoading={!selectedProduct && selectedProductID === sku}
                  url={`${PATHS.PRODUCTS}/${sku}`}
                >
                  <div className="pt-[6px] min-h-[24px]">
                    <Link
                      href={`${PATHS.PRODUCTS}/${sku}`}
                      className="product-card-title"
                    >
                      {name}
                    </Link>
                    <div className="flex justify-between items-center w-full mt-1">
                      <div className="flex items-center overflow-hidden h-[21px]">
                        <div
                          className={`min-h-[12px] text-base ${
                            isOnSale ? "text-price" : "text-gray-dark"
                          } font-bold leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap mr-1`}
                        >
                          {calculatePrice(price, isOnSale, sale)}
                        </div>
                        {isOnSale && (
                          <div className="border border-price text-price rounded-sm pl-[3px] pr-[2px] h-[16px] text-xs">
                            {sale}%
                          </div>
                        )}
                      </div>
                      <button
                        className="product-card-cart-btn"
                        onClick={() => viewProductDetail(sku)}
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
              )
            )}
            <div className="w-full text-center mt-2">
              <button className="px-6 btn-common border border-solid border-black min-w-[240px] h-[44px] leading-[42px] text-base" onClick={()=> router.push(PATHS.PRODUCTS)}>
                View All
                <span className="ml-[10px] inline-block">
                  <RightOutlined className="text-xs" />
                </span>
              </button>
            </div>
          </>
        )}
      </div>
      {selectedProduct && (
        <ProductDetailModal
          close={closeProductModal}
          selectedProduct={selectedProduct}
        />
      )}
    </Fragment>
  );
}

export default Recommend;
