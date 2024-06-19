import React from "react";
import { TSelectItem } from "@/types";
import { Select } from "antd";
import "./Select.sass";
interface IProps {
  options: TSelectItem[];
  onChange:
    | ((value: TSelectItem, option: TSelectItem | TSelectItem[]) => void)
    | undefined;
  value: TSelectItem;
}

function CustomSelect({ options, onChange, value }: IProps) {
  return (
    <Select
      onChange={onChange}
      options={options}
      value={value}
      className="select-ctn"
    />
  );
}

export default CustomSelect;
