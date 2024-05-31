import { CustomerServiceOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

function CustomerService() {
  return (
    <div className="p-2">
      <Link href={"/"} className="flex flex-row gap-x-2 text-xl">
        <CustomerServiceOutlined />
        <div>
          <h2 className="font-bold text-zinc-950 text-sm">Customer Service</h2>
          <p className="text-gray-light text-xs font-light">
            What can we do for you?
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CustomerService;
