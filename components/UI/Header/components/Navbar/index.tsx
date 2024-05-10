"use client";
import React, { useState } from "react";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import "./Navbar.css";
import Image from "next/image";
import { Image as AntImage } from "antd";
import { categoriesIcon } from "@/public/assets";
import Link from "next/link";
import { NEWINCATEGORIES, NEWINCURVECATEGORIES } from "@/temp";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const onHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowMenu(true);
  };

  return (
    <div>
      <nav className="flex flex-row overflow-x-hidden px-[45px] relative h-[40px] border-b-[0.5px] border-[#e5e5e5] shadow-header">
        <div
          className="flex flex-row gap-x-1 text-[10px] items-center"
          onMouseEnter={onHover}
        >
          <p className="text-black font-light text-sm">Categories</p>
          <DownOutlined
            className={`transition ${showMenu ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </nav>
      {showMenu && (
        <div className="absolute w-full top-full left-0 right-0 m-0 p-0 bg-white">
          <div className="flex justify-center px-10 min-h-[200px] max-h-[66vh]">
            <div className="pt-5 overflow-y-scroll pr-[calc((100vw_-_1080px)/16)]">
              <ul className="w-[232px]">
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
                <li className="relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ">
                  Lorem Ipsum
                  <RightOutlined className="nav_list_icon" />
                </li>
              </ul>
            </div>
            <div className="flex grow shrink basis-[0%]">
              <div className="w-[1px] h-[calc(100%_-_40px)] mt-5 bg-light" />
              <div className="w-[35%] h-full overflow-y-scroll max-w-[26vw] desktop:px-[calc(calc(100vw_-_1080px)/16)]">
                <div
                  className="flex text-tangerine pt-5 mb-[10px] 
                desktop:pl-[calc(100vw_*_20/1600)]"
                >
                  <Image
                    src={categoriesIcon}
                    width={20}
                    height={20}
                    alt="categories-icon"
                  />
                  <h6 className="inline-block mx-[6px] align-top text-tangerine text-sm leading-[20px] font-bold uppercase">
                    new in categories
                  </h6>
                </div>
                <div className="flex flex-wrap mb-[10px]">
                  {NEWINCATEGORIES.map(({ url, img, title }, index) => (
                    <Link
                      href={url}
                      key={index}
                      className="grow-0 shrink-0 
                      basis-[calc(100%_/_3)] text-center mb-2 inline-block w-[88px] align-top text-gray-light nav_type_img_link"
                    >
                      <span className="inline-block desktop:w-[calc(82px_-_(1920px_-_100vw)/26.67)] desktop:h-[calc(82px_-_(1920px_-_100vw)/26.67)] w-[64px] h-[64px] overflow-hidden rounded-[50%] bg-light tansition-all duration-200 nav_type_img">
                        <AntImage
                          src={img}
                          alt={title}
                          className="w-full "
                          preview={false}
                        />
                      </span>
                      <span
                        className="w-[82px] mx-auto leading-[14px] text-black break-word text-ellipsis inline-block line-clamp-3"
                        style={{
                          wordBreak: "break-word",
                        }}
                      >
                        {title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-[1px] h-[calc(100%_-_40px)] mt-5 bg-light" />
              <div className="grow shrink basis-[0%] h-full overflow-y-auto desktop:max-w-[54vw] desktop:px-[calc(calc((100vw_-_1080px)_/_16))] ">
                <div className="mb-[10px] pt-5 desktop:pl-[calc(100vw_*_20_/_1600)]">
                  <h6 className="mb-[10px] text-sm leading-[16px] text-black ">
                    New in curve clothing
                  </h6>
                </div>
                <div className="flex flex-wrap mb-[10px]">
                  {NEWINCURVECATEGORIES.map(({ url, img, title }, index) => (
                    <Link
                      href={url}
                      key={index}
                      className="grow-0 shrink-0 basis-[calc(100%_/_7)] py-[5px] pr-[2px] pl-0 text-center mb-2 inline-block w-[88px] align-top text-gray-light nav_type_img_link"
                    >
                      <span className="desktop:w-[calc(82px_-_(1920px_-_100vw)/26.67)] desktop:h-[calc(82px_-_(1920px_-_100vw)/26.67)] w-[64px] h-[64px] rounded-[50%] bg-light inline-block overflow-hidden transition-all duration-200 nav_type_img">
                        <AntImage
                          src={img}
                          alt={title}
                          className="w-full"
                          preview={false}
                        />
                      </span>
                      <span
                        className="inline-block text-black w-[82px] mx-auto leading-[14px] text-ellipsis line-clamp-3"
                        style={{
                          wordBreak: "break-word",
                        }}
                      >
                        {title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* mask */}
      {/* <div
        className={`inset-0 fixed bg-[rgba(0,0,0,.5)] z-[399] ${
          showMenu ? "block" : "hidden"
        }`}
      /> */}
    </div>
  );
}

export default Navbar;
