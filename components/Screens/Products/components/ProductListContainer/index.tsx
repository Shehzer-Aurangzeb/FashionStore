"use client";
import React from "react";
import "./ProductList.sass";
import { useApp } from "@/context/AppProvider";
import _ from "lodash";
import { Skeleton } from "antd";
import Product from "@/components/UI/ProductCard";
import Link from "next/link";
import { calculatePrice } from "@/utils/product";
import Image from "next/image";
import { addToCartIcon } from "@/public/assets";
import ProductDetailModal from "@/components/UI/ProductDetailModal";
import { useProducts } from "@/state/products/hooks";
import { useModal } from "@/context/ModalProvider";

function ProductListContainer() {
  const { isAppLoading } = useApp();
  const {
    selectedProduct,
    setSelectedProduct,
    setSelectedProductID,
    viewProductDetail,
  } = useProducts();
  const { products } = useProducts();
  const { handleClose } = useModal();

  const closeProductModal = () => {
    handleClose();
    setSelectedProduct(undefined);
    setSelectedProductID("");
  };
  return (
    <div className="product-list-container">
      <div className="view-new"></div>
      <div className="relative flex flex-wrap gap-x-3 gap-y-1 bg-white">
        <Skeleton active={isAppLoading} loading={isAppLoading}>
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
                url={`/products/${sku}`}
                // isLoading={!selectedProduct && selectedProductID === sku}
              >
                <div className="pt-[6px] min-h-[24px]">
                  <Link
                    href={`/products/${sku}`}
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
        </Skeleton>
        {selectedProduct && (
          <ProductDetailModal
            close={closeProductModal}
            selectedProduct={selectedProduct}
          />
        )}
      </div>
    </div>
  );
}

export default ProductListContainer;
