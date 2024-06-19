"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./SideFilter.sass";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Checkbox, Skeleton } from "antd";
import { useFetchFilters } from "@/hooks/useFilters";
import { useSearchParams } from "next/navigation";
import { parseParam } from "@/utils/paths";
import { useCategoriesState } from "@/state/categories/hooks";

function SideFilter() {
  const { categories } = useCategoriesState();
  const [openFilterItem, setOpenFilterItems] = useState<{
    [id: number]: boolean;
  }>({});
  const searchParams = useSearchParams();
  const categoryId = useMemo(() => {
    const params = Array.from(searchParams.entries()).map((item) =>
      parseParam(item[1])
    );
    const categoryName = params.length===0 ? "Men Clothing" : params[0];
    const categoryId = categories?.find(
      (ctg) => ctg.categoryName.toLowerCase() === categoryName.toLowerCase()
    )?.id;

    return categoryId ?? 1;
  }, [searchParams, categories]);
  const { filters, isLoading } = useFetchFilters({
    categoryId: categoryId,
  });

  useEffect(() => {
    setOpenFilterItems(() =>
      filters.reduce((obj: { [id: number]: boolean }, item) => {
        obj[item.filterId] = false;
        return obj;
      }, {})
    );
  }, [filters]);
  return (
    <div className="side-filter">
      <div className="side-filter__top">
        <div className="header">
          <div className="header__title">Filter</div>
        </div>
      </div>
      <Skeleton active={isLoading} loading={isLoading}>
        <div className="side-filter__inner">
          {filters.map((filter) => (
            <div className="side-filter__item" key={filter.filterId}>
              <div
                className="side-filter__item__header"
                onClick={() =>
                  setOpenFilterItems((prev) => ({
                    ...prev,
                    [filter.filterId]: !prev[filter.filterId],
                  }))
                }
              >
                <h3 className="side-filter__item__header__title">
                  {filter.filter}
                </h3>
                {openFilterItem[filter.filterId] ? (
                  <PlusOutlined className="nav-menu__icon" />
                ) : (
                  <MinusOutlined className="nav-menu__icon" />
                )}
              </div>
              {openFilterItem[filter.filterId] && (
                <div className="side-filter__item__content">
                  {filter.options.map(({ filterOptionId, filterOption }) => (
                    <div
                      key={filterOptionId}
                      className="side-filter__item__content__each"
                    >
                      <Checkbox
                        onClick={(e) => {
                          //   handleSelect(e);
                          //   e.stopPropagation();
                        }}
                      >
                        {filterOption}
                      </Checkbox>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Skeleton>
    </div>
  );
}

export default SideFilter;
