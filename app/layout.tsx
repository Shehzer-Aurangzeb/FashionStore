import type { Metadata } from "next";
import "@/styles/globals.css";
import 'react-phone-number-input/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Provider from "./provider";
import Layout from "@/components/UI/Layout";

export const metadata: Metadata = {
  title: "EStore",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Provider>
            <Layout>{children}</Layout>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
