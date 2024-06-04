import { emptyCartIcon } from "@/public/assets";
import Image from "next/image";
import React from "react";

function ShoppingCart() {
  
  return (
    <div className="flex flex-col gap-y-8 items-center px-3 py-4">
      <Image
        width={40}
        src={emptyCartIcon}
        alt="empty-cart icon"
        className="opacity-50"
      />
      <p className="text-gray-light text-sm font-light">
        Shopping cart is empty.
      </p>
    </div>
  );
}

export default ShoppingCart;
