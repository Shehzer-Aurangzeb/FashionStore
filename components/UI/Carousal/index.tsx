import React from "react";
import { Carousel, CarouselProps } from "antd";
import Link from "next/link";
import Image from "next/image";
import { CAROUSALIMAGES } from "@/temp";
import { LeftOutlined } from "@ant-design/icons";

interface IProps {
  children:React.ReactNode
}

function Carousal(props:IProps & CarouselProps) {
  const {children,...restProps}= props
  return (
    <Carousel {...restProps}>
     {children}
    </Carousel>
  );
}

export default Carousal;
