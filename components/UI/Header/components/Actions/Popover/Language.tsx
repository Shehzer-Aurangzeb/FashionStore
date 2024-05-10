"use client";
import React from "react";
import { Divider } from "antd";
import Link from "next/link";

function Language() {
  //fetch from url
  const selectedLangugage = "english";
  return (
    <div className="flex flex-col gap-y-2 p-2 w-[150px]">
      <h2 className="text-zinc-950 text-sm font-bold">Languages</h2>
      <Divider className="my-0" />
      <div className="flex flex-row gap-x-6">
        <Link
          href={"/"}
          className={`text-zinc-950 ${
            selectedLangugage === "english"
              ? "font-medium"
              : "font-light opacity-75"
          }`}
        >
          English
        </Link>
        <Link
          href={"/"}
          className={`text-zinc-950 ${
            selectedLangugage != "english"
              ? "font-medium"
              : "font-light opacity-75"
          }`}
        >
          Arabic
        </Link>
      </div>
    </div>
  );
}

export default Language;
