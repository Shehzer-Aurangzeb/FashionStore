"use client";
import React from "react";
import { AutoComplete, Input } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import "./Searchbar.css";
function Searchbar() {
  const renderTitle = (title: string) => (
    <span>
      {title}
      {/* <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a> */}
    </span>
  );

  const renderItem = (title: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        {/* <span>
          <UserOutlined /> {count}
        </span> */}
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle("Libraries"),
      options: [renderItem("AntDesign"), renderItem("AntDesign UI")],
    },
    {
      label: renderTitle("Solutions"),
      options: [renderItem("AntDesign UI FAQ"), renderItem("AntDesign FAQ")],
    },
    {
      label: renderTitle("Articles"),
      options: [renderItem("AntDesign design language")],
    },
  ];
  return (
    <div className="flex-1">
      <div className="flex-basis-[530px] w-auto max-w-[530px] relative mx-auto">
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={500}
          style={{ width: "100%" }}
          options={options}
          size="large"
          className="autocomplete"
          onSelect={(selected) => console.log("selected :>> ", selected)}
          onSearch={(value) => console.log("value :>> ", value)}
        >
          <Input.Search
            size="large"
            placeholder="Search here"
            allowClear={{ clearIcon: <CloseCircleFilled /> }}
            onChange={(e) => console.log("text :>> ", e.target.value)}
          />
        </AutoComplete>
      </div>
    </div>
  );
}

export default Searchbar;
