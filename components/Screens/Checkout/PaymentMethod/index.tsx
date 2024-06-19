"use client";
import React, { useState } from "react";
import Image from "next/image";
const paymentMethods = [
  {
    id: 1,
    title: "Pay with PayPal",
    value: "paypal",
    icon: "https://sheinsz.ltwebstatic.com/she_dist/images/seal-43f93aaef6.png",
  },
  {
    id: 2,
    title: "Credit/Debit Card",
    value: "card",
    icon: "https://sheinsz.ltwebstatic.com/she_dist/images/seal-43f93aaef6.png",
  },
  {
    id: 3,
    title: "4 interest-free payments with Klarna",
    value: "klarna",
    icon: "https://sheinsz.ltwebstatic.com/she_dist/images/seal-43f93aaef6.png",
  },
  {
    id: 4,
    title: "4 interest-free payments with Afterpay",
    value: "afterpay",
    icon: "https://sheinsz.ltwebstatic.com/she_dist/images/seal-43f93aaef6.png",
  },
  {
    id: 5,
    title: "Pay over time with Affirm",
    value: "affirm",
    icon: "https://sheinsz.ltwebstatic.com/she_dist/images/seal-43f93aaef6.png",
  },
];

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <div className="flex-col gap-y-3">
      <div className="flex-col max-w-[380px] gap-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="inline-flex items-center my-4">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor={method.value}
            >
              <input
                name="paymentMethod"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id={method.value}
                value={method.value}
                checked={selectedMethod === method.value}
                onChange={() => setSelectedMethod(method.value)}
              />
              <Image
                src={method.icon}
                alt={method.title}
                height={24}
                width={24}
                style={{ marginLeft: "10px" }}
                className="mr-2"
              />
              <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label
              className="mt-px font-light text-gray-700 cursor-pointer select-none"
              htmlFor={method.value}
            >
              {method.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
