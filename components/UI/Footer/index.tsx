'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FOOTERAPPS, FOOTERLINKS, FOOTERPAGESLINKS, FOOTERSOCIALS, PAYMENTOPTIONS } from "@/temp";
import {
  AndroidFilled,
  AppleFilled,
  FacebookFilled,
  InstagramOutlined,
  PinterestFilled,
  TikTokOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Button, Col, Image, Input, Row } from "antd";
import "./Footer.sass"
import PhoneInput from 'react-phone-number-input'


function Footer() {
  const [email,setEmail]= useState("")
  const [phoneNumber,setPhoneNumber]= useState<any>()
  const getSocialIcon = (name: string) => {
    if (name.toLowerCase() === "facebook") {
      return <FacebookFilled />;
    } else if (name.toLowerCase() === "instagram") {
      return <InstagramOutlined />;
    } else if (name.toLowerCase() === "twitter") {
      return <TwitterOutlined />;
    } else if (name.toLowerCase() === "youtube") {
      return <YoutubeFilled />;
    } else if (name.toLowerCase() === "pinterest") {
      return <PinterestFilled />;
    } else if (name.toLowerCase() === "tiktok") {
      return <TikTokOutlined />;
    } else if (name.toLowerCase() === "apple") {
      return <AppleFilled />;
    } else if (name.toLowerCase() === "android") {
      return <AndroidFilled />;
    }
  };
  return (
    <footer className="absolute left-0 right-0 bottom-0 min-h-[378px] pt-[60px] pb-5 bg-[#fafafa] px-[10px] mx-auto">
      <div className="mx-auto px-[10px] max-w-[1220px] ">
        <Row>
          <Col span={12} className="float-left">
            <Row>
              <>
                {Object.entries(FOOTERLINKS).map(([key, value], index) => (
                  <Col
                    className="text-left float-left"
                    key={index}
                    span={24 / Object.entries(FOOTERLINKS).length}
                  >
                    <h6 className="text-gray-dark text-uppercase font-bold text-xs">
                      {key}
                    </h6>
                    <ul className="mt-2">
                      {value.map(({ title, url }, index) => (
                        <li className="leading-[23px] text-xs" key={index}>
                          <Link
                            href={url}
                            className="text-gray-light hover:text-gray-dark"
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </>
            </Row>
          </Col>
          <Col span={12} className="float-right">
            <Row>
              <Col span={16}>
                <h6 className="text-gray-dark text-uppercase font-bold text-xs">
                  Find us on
                </h6>
                <ul className="mt-4 mb-5 float-left flex flex-row gap-x-4">
                  {FOOTERSOCIALS.map(({ title, url }, index) => (
                    <li
                      className="w-[36px] h-[36px] leading-[32px] relative"
                      key={index}
                    >
                      <Link
                        href={url}
                        className="text-[30px] text-gray-dark hover:text-gray-dark"
                      >
                        {getSocialIcon(title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col span={8}>
                <h6 className="text-gray-dark text-uppercase font-bold text-xs">
                  APP
                </h6>
                <ul className="mt-4 mb-5 float-left flex flex-row gap-x-4">
                  {FOOTERAPPS.map(({ title, url }, index) => (
                    <li
                      className="w-[36px] h-[36px] leading-[32px] relative"
                      key={index}
                    >
                      <Link
                        href={url}
                        className="text-[30px] text-gray-dark hover:text-gray-dark"
                      >
                        {getSocialIcon(title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <div className="float-right w-full">
              <h6 className="uppercase font-bold text-xs leading-[14px] mb-[10px] text-gray-dark">
                Sign up for Shein style news
              </h6>
              <div className="flex mb-[6px]">
                <div className="relative w-full">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    status=""
                    className="w-full h-[36px] input-container"
                  />
                  <div className="mb-1 relative h-[20px]">
                    {/* <p className="text-gray-dark text-xs leading-5 font-light">
                      Thank you for subscribing
                    </p> */}
                  </div>
                </div>
                <Button type="primary" className="input-submit-button btn-common">Subscribe</Button>
              </div>
              <div className="flex mb-6">
              <div className="relative w-full">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  defaultCountry="YE"
                  className="input-container phone h-[36px] w-full"
                />
                <div className="mb-1 relative h-[20px]">
                    {/* <p className="text-gray-dark text-xs leading-5 font-light">
                      Thank you for subscribing
                    </p> */}
                </div>
              </div>
              <Button type="primary" className="input-submit-button btn-common">Subscribe</Button>
              </div>
            </div>
            <div className="float-right w-full">
              <h6 className="uppercase font-bold text-xs leading-[14px] mb-[15px] text-gray-dark">
                  We accept
                </h6>
                <div className="w-full">
                  {PAYMENTOPTIONS.map((paymentOption,index)=>
                    <Image key={index} className="inline-block payment-option-image" alt="" src={paymentOption}/>
                  )}
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12} className="mt-5 pr-[10px] w-full">
           <span className="pl-[10px] text-xs text-gray-light">&copy;2009-2024 SHEIN All Rights Reserved</span>
            <ul className="mt-[5px] max-w-[520px]">
              {FOOTERPAGESLINKS.map(({title,url},index)=>(
                <li className="border-r border-r-solid border-r-gray-light px-[10px] mb-[10px] inline-block last:border-r-0" key={index}>
                  <Link href={url} className="text-xs text-gray-light hover:text-gray-light hover:underline underline">
                   {title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col span={12} className="mt-5 pr-[10px] w-full text-xs text-gray-light">
            <Link href={"/"} className="mr-3 inline-block">
              <Image src="https://sheinsz.ltwebstatic.com/she_dist/images/seal-43f93aaef6.png" alt=" " style={{height:"24px"}}/>
            </Link>
            <Link href={"/"} className="inline-block">
              <Image src="https://sheinsz.ltwebstatic.com/she_dist/images/DMCA-53fc2e1a50.png" alt="" style={{height:"24px"}}/>
            </Link>
          </Col>
         
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
