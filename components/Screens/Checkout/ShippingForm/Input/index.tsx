import React, { useState } from "react";
import {  Input } from "antd";
import { twMerge } from "tailwind-merge";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  title?: string;
}

const InputField: React.FC<IProps> = ({
  placeholder,
  onChange,
  error,
  type,
  style,
  className,
  value,
  name,
  readOnly,
  title,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(value !== "");
  };

  return (
    <div className="relative z-0 w-full mb-6">
      <Input
        autoComplete="off"
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        readOnly={readOnly}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={twMerge(className, `input-field ${error && "error"}`)}
        style={{ padding: "14px 14px", borderRadius: "0PX" }}
      />
      {error && (
        <p className="text-sm mb-2 font-helvetica text-[#bf4123]">{error}</p>
      )}
    </div>
  );
};

export default InputField