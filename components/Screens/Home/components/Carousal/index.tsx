import React from "react";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import { CAROUSALIMAGES } from "@/temp";
import { LeftOutlined } from "@ant-design/icons";

interface IProps {
  data: string[];
}

function Carousal({ data }: IProps) {
  return (
    <Carousel arrows infinite autoplay autoplaySpeed={1500}>
      {CAROUSALIMAGES.map((img, index) => (
        <div className="relative w-full h-full" key={index}>
          <Link href={"/"} className="w-full block relative pb-[47%]">
            <Image
              src={img}
              alt=""
              fill
              className="bg-white object-cover align-top box-border"
            />
          </Link>
        </div>
      ))}
    </Carousel>
  );
}

export default Carousal;
