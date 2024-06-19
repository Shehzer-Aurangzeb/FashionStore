
"use client";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useRouter,useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { categoriesIcon } from "@/public/assets";
import { DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";
import "./Navbar.sass";
import CategoryItem from "./CategoryItem";
import { Skeleton } from "antd";
import { useCategoriesState } from "@/state/categories/hooks";
import _ from "lodash";
import { PATHS } from "@/constants/paths";
import { formatName } from "@/utils/paths";

interface IProps {
  isLoading: boolean;
  isDrawer?: boolean;
  closeDrawer?: () => void;
}

function Navbar({ isLoading: isDataLoading, isDrawer = false,closeDrawer }: IProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [activeNavItemId, setActiveNavItemId] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const { categories } = useCategoriesState();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = useMemo(() => {
    return categories?.find((ctg) => ctg.id === activeCategoryId);
  }, [activeCategoryId, categories]);

  const subCategories = useMemo(() => {
    if (!categories) return [];
    if (!activeCategory) return [];
    return activeCategory.subCategories;
  }, [categories, activeCategory]);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  const resetHeaderState = () => {
    setShowMenu(false);
    setActiveCategoryId(null);
    setActiveNavItemId(null);
  };
  const navigateTo = (
    categoryName: string,
    subCategory?: string,
    product?: string
  ) => {
    let url = `${PATHS.PRODUCTS}?ctg=${formatName(categoryName)}`;
    if (subCategory) url += `&subCtg=${formatName(subCategory)}`;
    if (product) url += `&product=${formatName(product)}`;
    router.push(url);
if (isDrawer &&closeDrawer) closeDrawer();
  };
  const categoryHoverHandler = (index: number, key: "enter" | "leave") => {
    if (key == "enter") {
      setActiveCategoryId(index);
      if (!showMenu) setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const navItemHover = (id: number, key: "enter" | "leave") => {
    if (key == "enter") {
      timerRef.current = window.setTimeout(() => {
        setActiveNavItemId(id);
        setShowMenu(true);
      }, 300);
    } else if (key === "leave" && id != 0) {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
      }
      setActiveNavItemId(null);
      setShowMenu(false);
    } else {
      setShowMenu(false);
    }
  };

  const toggleCategory = (id: number) => {
    if (expandedCategories.includes(id)) {
      setExpandedCategories(expandedCategories.filter((cid) => cid !== id));
    } else {
      setExpandedCategories([...expandedCategories, id]);
    }
  };

  useEffect(() => {
    if (!showMenu && categories && categories.length > 1) {
      setActiveCategoryId(categories[0].id);
      setActiveNavItemId(null);
    }
  }, [showMenu, categories]);

  useEffect(() => {
    if (activeNavItemId != 0 && showMenu) setActiveCategoryId(activeNavItemId);
  }, [activeNavItemId, showMenu]);

  useEffect(() => {
    resetHeaderState();
  }, [pathname, searchParams]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (isDrawer) {
    return (
      <div className="drawer-navbar">
        {isDataLoading ? (
          <Skeleton.Input active size="small" block className="mt-1" />
        ) : (
          <>
            <ul className="w-[232px]">
               
            </ul>
            {categories ? (
              <div className="flex flex-col">
                {categories.map(({ categoryName, id, subCategories }) => (
                  <div key={id} className="">
                    <div
                      className="py-2 px-4 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleCategory(id)}
                      
                    >
                      {categoryName}
                      {expandedCategories.includes(id) ? <UpOutlined /> : <DownOutlined />}
                    </div>
                    {expandedCategories.includes(id) && (
                            <div className="flex" onClick={() => navigateTo(categoryName)}>
                       <div className=" h-full px-4 max-w-[60%]">
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
                          Shop By Category
                        </h6>
                      </div>
                      <div className="flex flex-wrap mb-[10px]">
                        <CategoryItem
                          title="View All"
                          image="https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png"
                          onClick={() => {
                            if (!activeCategory) return;
                            navigateTo(activeCategory.categoryName, "View All");
                          }}
                        />
                        {subCategories.map(({ subCategoryName }, index) => (
                        
                          <CategoryItem
                            onClick={() => {
                              if (!activeCategory) return;
                              navigateTo(
                                activeCategory.categoryName,
                                subCategoryName
                              );
                            }}
                            image={""}
                            title={subCategoryName}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                     <div className="grow shrink basis-[0%] h-full overflow-y-auto desktop:max-w-[54vw] desktop:px-[calc(calc((100vw_-_1080px)_/_16))] ">
                     {subCategories.map(({ subCategoryName, products }, index) => (
                       <Fragment key={index}>
                         <div className="mb-[10px] pt-5 desktop:pl-[calc(100vw_*_20_/_1600)]">
                           <h6 className="mb-[10px] text-sm leading-[16px] text-black ">
                             {subCategoryName}
                           </h6>
                         </div>
                         <div className="flex flex-wrap mb-[10px]">
                           {products.length == 0 && (
                             <p className="text-xs text-gray-dark text-center w-full">
                               No Products
                             </p>
                           )}
                           {products.length > 0 &&
                             products.map(({ productId, productName }) => (
                               <CategoryItem
                                 onClick={() => {
                                   if (!activeCategory) return;
                                   navigateTo(
                                     activeCategory.categoryName,
                                     subCategoryName,
                                     productName
                                   );
                                 }}
                                 title={productName}
                                 image={""}
                                 key={productId}
                               />
                             ))}
                         </div>
                       </Fragment>
                     ))}
                   </div>
                      </div>
                     
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-dark text-xs">
                No Categories
              </p>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <nav className="flex flex-row overflow-x-hidden pl-[45px] pr-[100px] relative h-[40px] border-b-[0.5px] border-[#e5e5e5] shadow-header overflow-hidden bg-white">
        {isDataLoading ? (
          <Skeleton.Input active size="small" block className="mt-1" />
        ) : (
          <>
            {categories ? (
              <Fragment>
                <div
                  className={`flex flex-row gap-x-1 text-[13px] leading-[40px] h-[42px] text-black px-[10px] items-center ${
                    activeNavItemId == 0 ? "bg-active-nav" : "bg-transparent"
                  }`}
                  onMouseEnter={() => navItemHover(0, "enter")}
                  onMouseLeave={() => navItemHover(0, "leave")}
                >
                  <p className="text-black font-light">Categories</p>
                  <DownOutlined
                    className={`text-[9px] transition ${
                      activeNavItemId == 0 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <div
                  className="relative overflow-x-scroll overflow-y-hidden grow shrink basis-[0%]"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="transform-none transition-none absolute whitespace-nowrap">
                    {categories.map(({ categoryName, id }) => (
                      <p
                        onClick={() => navigateTo(categoryName)}
                        key={id}
                        onMouseEnter={() => navItemHover(id, "enter")}
                        onMouseLeave={() => navItemHover(id, "leave")}
                        className={`text-black h-[42px] inline-block px-[10px] leading-[40px] font-light text-[13px] cursor-pointer
                      ${activeNavItemId === id ? "bg-light" : "bg-transparent"}
                      `}
                      >
                        {categoryName}
                      </p>
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
              </Fragment>
            ) : (
              <p className="text-center text-gray-dark text-[10px]">
                No Categories
              </p>
            )}
          </>
        )}
      </nav>
      {showMenu && (
        <div
          className="absolute w-full top-full left-0 right-0 m-0 p-0 bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center px-10 min-h-[200px] max-h-[66vh] no-scrollbar">
            <div className="pt-5 overflow-y-scroll pr-[calc((100%_-_1080px)/16)] no-scrollbar">
              <ul className="w-[232px]">
                {categories?.map(({ categoryName, id }) => (
                  <li
                    className={`relative py-[2px] pl-[10px] pr-[26px] h-[38px] leading-[38px] break-words text-ellipsis overflow-hidden line-clamp-1  ${
                      activeCategoryId === id ? "bg-light" : "bg-transparent"
                    }`}
                    key={id}
                    onMouseEnter={() => categoryHoverHandler(id, "enter")}
                  >
                    {categoryName}
                    <RightOutlined className="nav_list_icon" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex grow shrink basis-[0%]">
              <div className="w-[1px] h-[calc(100%_-_40px)] mt-5 bg-light" />
              <div className="w-[35%] h-full overflow-y-scroll max-w-[26vw] desktop:px-[calc(calc(100vw_-_1080px)/16)] laptop:min-w-[295px] laptop:max-w-[24vw] laptop:px-5 no-scrollbar">
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
                    Shop By Category
                  </h6>
                </div>
                <div className="flex flex-wrap mb-[10px]">
                  <CategoryItem
                    title="View All"
                    image="https://img.ltwebstatic.com/images3_ccc/2023/12/12/92/17023521447c1e3dc62e98bc38b64afae4b83f1771.png"
                    onClick={() => {
                      if (!activeCategory) return;
                      navigateTo(activeCategory.categoryName, "View All");
                    }}
                  />
                  {subCategories.map(({ subCategoryName }, index) => (
                    <CategoryItem
                      onClick={() => {
                        if (!activeCategory) return;
                        navigateTo(
                          activeCategory.categoryName,
                          subCategoryName
                        );
                      }}
                      image={""}
                      title={subCategoryName}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[1px] h-[calc(100%_-_40px)] mt-5 bg-light" />
              <div className="grow shrink basis-[0%] h-full overflow-y-auto desktop:max-w-[54vw] desktop:px-[calc(calc((100vw_-_1080px)_/_16))] laptop:max-w-[54vw] laptop:px-5 no-scrollbar">
                {subCategories.map(({ subCategoryName, products }, index) => (
                  <Fragment key={index}>
                    <div className="mb-[10px] pt-5 desktop:pl-[calc(100vw_*_20_/_1600)]">
                      <h6 className="mb-[10px] text-sm leading-[16px] text-black ">
                        {subCategoryName}
                      </h6>
                    </div>
                    <div className="flex flex-wrap mb-[10px]">
                      {products.length == 0 && (
                        <p className="text-xs text-gray-dark text-center w-full">
                          No Products
                        </p>
                      )}
                      {products.length > 0 &&
                        products.map(({ productId, productName }) => (
                          <CategoryItem
                            onClick={() => {
                              if (!activeCategory) return;
                              navigateTo(
                                activeCategory.categoryName,
                                subCategoryName,
                                productName
                              );
                            }}
                            title={productName}
                            image={""}
                            key={productId}
                          />
                        ))}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* mask */}
      <div
        className={`inset-0 fixed bg-[rgba(0,0,0,.5)] z-[-1] ${
          showMenu ? "block" : "hidden"
        }`}
      />
    </div>

    
  );
}

export default Navbar;

