
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Providers from './provider'
import Layout from './../components/UI/Layout'
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/styles/globals.css";
import "@/styles/globals.css";
import "@/styles/common.sass";
import 'react-phone-number-input/style.css';
import 'swiper/css';
import 'swiper/css/navigation';



type Props = {
  children: ReactNode
  params: { locale: string }
}




export const metadata: Metadata = {
  title: "Meral Store",
  description: "",
};




export default async function RootLayout({
  children,
  
}: Props) {
  

  return (
  
    <html lang={'en'}>
    <body>
      <AntdRegistry>  
          <Providers>
            <Layout>{children}</Layout>
          </Providers>   
      </AntdRegistry>
    </body>
  </html>
  )
}