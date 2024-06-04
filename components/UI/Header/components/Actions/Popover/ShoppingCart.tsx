

import React, { Fragment, useState } from "react";
import Image from "next/image";

import dummyImage from "@/public/assets/images/dummy.jpeg";
import { emptyCartIcon,deleteIcon } from "@/public/assets";
function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 1
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 2
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 3
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 4
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 5
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 6
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 7
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 8
    },
    {
      name: 'LUNE Summer Casual  Sleeve Mini Dress',
      price: 9.44,
      image: dummyImage,
      id: 9
    }
  ]);

  const handleDelete = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Fragment>
    <div className="max-h-[456px] overflow-y-auto">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex max-w-[350px] gap-x-4 gap-y-4 mt-4 border-b pb-2 border-[#E4E5E7] px-2">
            <Image src={item.image} className="max-w-[80px] max-h-[85px]" alt={item.name} />
            <div className="">
              <h2 className="">{item.name}</h2>
              <div className="flex justify-between items-center mt-4">
                <p className="text-tangerine">
                  $<span className="text-lg">{item.price}</span>
                </p>
                <Image src={deleteIcon} alt="delete icon" className="w-5 h-5 cursor-pointer" onClick={() => handleDelete(item.id)} />
              </div>
            </div>
          </div>
        ))
      ) : (
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
      )}
    </div>
    {cartItems.length > 0 && (
      <>
        <div className="mt-4 text-right">
          <p>Total: <span className="text-xl text-tangerine font-bold mb-2">${totalPrice.toFixed(2)}</span></p>
        </div>
        <button className="bg-black text-white w-full px-4 py-4 mt-2">View Cart</button>
      </>
    )}
  </Fragment>
  
  
  );
}

export default ShoppingCart;

