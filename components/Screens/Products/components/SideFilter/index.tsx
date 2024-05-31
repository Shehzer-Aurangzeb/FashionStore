import React, { useState } from "react";
import "./SideFilter.sass";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { CATEGORYFILTERS, SIZEFILTER } from "@/temp";
import { Checkbox } from "antd";
function SideFilter() {
  const [openFilterItem, setOpenFilterItems] = useState(false);
  return (
    <div className="side-filter">
      <div className="side-filter__top">
        <div className="header">
          <div className="header__title">Filter</div>
        </div>
      </div>
      <div className="side-filter__inner">
        <div className="side-filter__item">
          <div
            className="side-filter__item__header"
            onClick={() => setOpenFilterItems(!openFilterItem)}
          >
            <h3 className="side-filter__item__header__title">Category</h3>
            {openFilterItem ? (
              <PlusOutlined className="nav-menu__icon" />
            ) : (
              <MinusOutlined className="nav-menu__icon" />
            )}
          </div>
          {openFilterItem && (
            <div className="side-filter__item__content">
              <TreeView
                data={flattenTree(CATEGORYFILTERS)}
                aria-label="Single select"
                multiSelect={false}
                propagateSelectUpwards={false}
                togglableSelect
                nodeAction="check"
                nodeRenderer={({
                  element,
                  isBranch,
                  isExpanded,
                  isSelected,
                  isHalfSelected,
                  getNodeProps,
                  level,
                  handleSelect,
                  handleExpand,
                }) => {
                  return (
                    <div
                      {...getNodeProps({ onClick: handleExpand })}
                      style={{ paddingLeft: 15 * (level - 1) }}
                      className="side-filter__item__content__single-filter"
                    >
                      {/* {isBranch && <ArrowIcon isOpen={isExpanded} />} */}
                      <Checkbox
                        onClick={(e) => {
                          handleSelect(e);
                          e.stopPropagation();
                        }}
                      >
                        {element.name}
                      </Checkbox>
                      {isExpanded ? (
                        <MinusOutlined
                          style={{
                            color: "#aeaeae",
                          }}
                        />
                      ) : (
                        <PlusOutlined
                          style={{
                            color: "#aeaeae",
                          }}
                        />
                      )}
                    </div>
                  );
                }}
              />
            </div>
          )}
        </div>
        <div className="side-filter__item">
          <div
            className="side-filter__item__header"
            onClick={() => setOpenFilterItems(!openFilterItem)}
          >
            <h3 className="side-filter__item__header__title">Size</h3>
            {openFilterItem ? (
              <PlusOutlined className="nav-menu__icon" />
            ) : (
              <MinusOutlined className="nav-menu__icon" />
            )}
          </div>
          {openFilterItem && (
            <div className="side-filter__item__content">
              {SIZEFILTER.map((size) => (
                <div key={size.id} className="side-filter__item__content__each">
                  <Checkbox
                    onClick={(e) => {
                      //   handleSelect(e);
                      //   e.stopPropagation();
                    }}
                  >
                    {size.filterOptions}
                  </Checkbox>
                </div>
              ))}
            </div>
          )}
          
        </div>
        <div className="side-filter__item">
          <div
            className="side-filter__item__header"
            onClick={() => setOpenFilterItems(!openFilterItem)}
          >
            <h3 className="side-filter__item__header__title">Size</h3>
            {openFilterItem ? (
              <PlusOutlined className="nav-menu__icon" />
            ) : (
              <MinusOutlined className="nav-menu__icon" />
            )}
          </div>
          {openFilterItem && (
            <div className="side-filter__item__content">
              {SIZEFILTER.map((size) => (
                <div key={size.id} className="side-filter__item__content__each">
                  <Checkbox
                    onClick={(e) => {
                      //   handleSelect(e);
                      //   e.stopPropagation();
                    }}
                  >
                    {size.filterOptions}
                  </Checkbox>
                </div>
              ))}
            </div>
          )}
          
        </div>
        <div className="side-filter__item">
          <div
            className="side-filter__item__header"
            onClick={() => setOpenFilterItems(!openFilterItem)}
          >
            <h3 className="side-filter__item__header__title">Size</h3>
            {openFilterItem ? (
              <PlusOutlined className="nav-menu__icon" />
            ) : (
              <MinusOutlined className="nav-menu__icon" />
            )}
          </div>
          {openFilterItem && (
            <div className="side-filter__item__content">
              {SIZEFILTER.map((size) => (
                <div key={size.id} className="side-filter__item__content__each">
                  <Checkbox
                    onClick={(e) => {
                      //   handleSelect(e);
                      //   e.stopPropagation();
                    }}
                  >
                    {size.filterOptions}
                  </Checkbox>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default SideFilter;
