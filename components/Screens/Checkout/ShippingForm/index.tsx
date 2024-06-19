"use client";
import React, { useState } from "react";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SHIPPINGADDRESSINITIALVALUES } from "@/constants/paths";
import { shippingSchema } from "@/utils/schema";
import { useFormik } from "formik";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import ConfirmationModal from "../ConfirmationModal";

const ShippingForm = () => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const handleClose = () => {
    setOpenConfirmationModal(false);
  };
  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } =
    useFormik({
      initialValues: SHIPPINGADDRESSINITIALVALUES,
      validationSchema: shippingSchema,
      onSubmit: (values) => {
        setOpenConfirmationModal(true);
      },
    });

  return (
    <form className="px-6 mb-7 pb-4 py-2 bg-white" onSubmit={handleSubmit}>
      <h1 className="text-xl py-4">SHIPPING ADDRESS</h1>
      <div className="flex gap-x-3">
        <Input
          className="py-6"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First Name"
          name="firstName"
          error={touched.firstName && errors.firstName}
        />
        <br />
        <Input
          className="py-6"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          name="lastName"
          error={touched.lastName && errors.lastName}
        />
      </div>
      <br />
      <PhoneInput
        setValue={setFieldValue}
        name="phoneNumber"
        className="w-full"
        error={touched.phoneNumber && errors.phoneNumber}
      />
      <br />
      <br />
      <Input
        className="py-6"
        value={values.shippingAddress}
        onChange={handleChange}
        name="shippingAddress"
        placeholder="Shipping Address"
        error={touched.shippingAddress && errors.shippingAddress}
      />
      <br />
      <div className="flex gap-x-3">
        <Input
          className="py-6"
          value={values.state}
          onChange={handleChange}
          placeholder="State/Province"
          name="state"
          error={touched.state && errors.state}
        />

        <br />
        <Input
          className="py-6"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
          name="city"
          error={touched.city && errors.city}
        />
      </div>
      <br />
      <Input
        className="py-4"
        value={values.postalCode}
        onChange={handleChange}
        placeholder="Zip Code"
        name="postalCode"
        error={touched.postalCode && errors.postalCode}
      />
      <div className=" float-right gap-x-4 flex mb-5 mt-1">
        <Link href="/" className="underline">
          General Address Tips
        </Link>
        <Link href="/" className="underline">
          Privacy & Cookie Policy
        </Link>
      </div>
      <br />
      <div className="text-[#23865C] flex gap-x-2 items-center mt-6">
        <LockOutlined />
        <p>Security & Privacy</p>
      </div>
      <p className="my-2">
        We maintain industry-standard physical, technical, and administrative
        measures to safeguard your personal information.
      </p>
      <div className="items-center justify-center flex">
        <button
          type="submit"
          className="input-submit-button btn-common w-[250px] h-[50px] my-5 text-white"
        >
          Save
        </button>
      </div>
      <ConfirmationModal
        isOpen={openConfirmationModal}
        onCancel={handleClose}
        customerInfo={values}
      />
    </form>
  );
};

export default ShippingForm;


