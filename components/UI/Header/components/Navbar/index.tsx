"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoriesIcon } from "@/public/assets";
import { CATEGORIES, DUMMYCATEGORIESDATA, NEWINCATEGORIES } from "@/temp";
import { DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Navbar.sass";
import CategoryItem from "./CategoryItem";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeNavItemId, setActiveNavItemId] = useState<string | null>(null);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  const categoryHoverHandler = (index: string, key: "enter" | "leave") => {
    if (key == "enter") {
      setActiveCategoryId(index);
      if (!showMenu) setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const navItemHover = (id: string, key: "enter" | "leave") => {
    if (key == "enter") {
      setActiveNavItemId(id);
      setShowMenu(true);
    } else if (key === "leave" && id != CATEGORIES[0].uid) {
      setActiveNavItemId(null);
      setShowMenu(false);
    } else {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    if (!showMenu) {
      setActiveCategoryId(CATEGORIES[1].uid);
      setActiveNavItemId(null);
    }
  }, [showMenu]);
  return (
    <div>
      <nav className="flex flex-row overflow-x-hidden pl-[45px] pr-[100px] relative h-[40px] border-b-[0.5px] border-[#e5e5e5] shadow-header overflow-hidden bg-white">
        <div
          className={`flex flex-row gap-x-1 text-[13px] leading-[40px] h-[42px] text-black px-[10px] items-center ${
            activeNavItemId == CATEGORIES[0].uid
              ? "bg-active-nav"
              : "bg-transparent"
          }`}
          onMouseEnter={() => navItemHover(CATEGORIES[0].uid, "enter")}
          onMouseLeave={() => navItemHover(CATEGORIES[0].uid, "leave")}
        >
          <p className="text-black font-light">{CATEGORIES[0].title}</p>
          <DownOutlined
            className={`text-[9px] transition ${
              activeNavItemId == CATEGORIES[0].uid ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className="relative overflow-x-scroll overflow-y-hidden grow shrink basis-[0%]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="transform-none transition-none absolute whitespace-nowrap">
            {CATEGORIES.map(({ title, uid }, index) => (
              <Link
                href={"/"}
                key={uid}
                onMouseEnter={() => navItemHover(uid, "enter")}
                onMouseLeave={() => navItemHover(uid, "leave")}
                className={`text-black h-[42px] inline-block px-[10px] leading-[40px] font-light text-[13px]
                ${index === 0 && "hidden"}
                ${activeNavItemId === uid ? "bg-light" : "bg-transparent"}
                `}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="inline-flex absolute top-0 right-0 h-full w-[50px] leading-[40px] text-center whitespace-nowrap mr-8 text-[rgba(0,0,0,0.15)] bg-white"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.08) -2px 0px 3px 0px",
          }}
        >
          <LeftOutlined className="text-xs mx-[5px]" />
          <RightOutlined className="text-xs mx-[5px]" />
        </div>
      </nav>
      {showMenu && (
        <div
          className="absolute w-full top-full left-0 right-0 m-0 p-0 bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center px-10 min-h-[200px] max-h-[66vh]">
            <div className="pt-5 overflow-y-scroll pr-[calc((100vw_-_1080px)/16)]">
              <ul className="w-[232px]">
                {CATEGORIES.map(({ title, uid }, index) => (
                  <li
                    className={`relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1 ${
                      index === 0 && "hidden"
                    } ${
                      activeCategoryId === uid ? "bg-light" : "bg-transparent"
                    }`}
                    key={uid}
                    onMouseEnter={() => categoryHoverHandler(uid, "enter")}
                  >
                    {title}
                    <RightOutlined className="nav_list_icon" />
                  </li>
                ))}
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
                    <CategoryItem
                      url={url}
                      image={img}
                      title={title}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[1px] h-[calc(100%_-_40px)] mt-5 bg-light" />
              <div className="grow shrink basis-[0%] h-full overflow-y-auto desktop:max-w-[54vw] desktop:px-[calc(calc((100vw_-_1080px)_/_16))] ">
                {Object.entries(DUMMYCATEGORIESDATA).map(
                  ([categoryTitle, value], index) => (
                    <Fragment key={index}>
                      <div className="mb-[10px] pt-5 desktop:pl-[calc(100vw_*_20_/_1600)]">
                        <h6 className="mb-[10px] text-sm leading-[16px] text-black ">
                          {categoryTitle}
                        </h6>
                      </div>
                      <div className="flex flex-wrap mb-[10px]">
                        {value.map(({ url, title, img }, index) => (
                          <CategoryItem
                            url={url}
                            title={title}
                            image={img}
                            key={index}
                          />
                        ))}
                      </div>
                    </Fragment>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* mask */}

      {/* <div
        className={`inset-0 fixed bg-[rgba(0,0,0,.5)] z-[-1] ${
          showMenu ? "block" : "hidden"
        }`}
      /> */}
    </div>
  );
}

export default Navbar;
