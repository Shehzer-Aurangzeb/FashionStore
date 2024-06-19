import React, { useEffect, useMemo, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { format, parse } from "libphonenumber-js";
import { useTranslations } from "next-intl";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean | undefined;
  edit?: boolean;
  setValue?: any;
  defaultValue?: string;
  label?: string;
}

function PhoneNumber({
  setValue,
  name,
  error,
  className,
  readOnly,
  defaultValue,
  label = "",
  disabled,
}: IProps) {
  const defValue = useMemo(
    () => (defaultValue ? format(parse(defaultValue), "E.164") : undefined),
    [defaultValue]
  );
  const [phoneNumber, setPhoneNumber] = useState<any | undefined>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!phoneNumber) return;
      if (!name) return;
      if (!setValue) return;
      setValue(name, phoneNumber);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [phoneNumber, name, setValue]);

  useEffect(() => {
    setPhoneNumber(defValue);
  }, [defValue]);

  return (
    <div className={["", className].join(" ")}>
      <PhoneInput
        placeholder={("Enter Your PhoneNumber")}
        defaultCountry="YE"
        className={`input-container input-field ${
          error && "error"
        } phone h-[50px] rounded-md w-full mx-2`}
        style={{
          marginLeft: "0px",
          paddingLeft: "0px",
        }}
        readOnly={readOnly}
        value={phoneNumber}
        name={name}
        disabled={disabled}
        onChange={setPhoneNumber}
      />
      {error && typeof error == "string" && (
        <p className="text-sm mb-2 font-helvetica text-[#bf4123]">{error}</p>
      )}
    </div>
  );
}

export default PhoneNumber;
