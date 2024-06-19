"use client";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Actions from "./components/Actions";
import Navbar from "./components/Navbar";
import { useApp } from "@/context/AppProvider";
import "./Header.sass";

function Header() {
  const { isAppLoading } = useApp();
  const [visible, setVisible] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState("400px");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const showDrawer = () => {
    setVisible(true);
  };
  
  const closeDrawer = () => {
    setVisible(false);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setDrawerWidth("620px");
      } else if (window.innerWidth < 568) {
        setDrawerWidth("100%");
      } else {
        setDrawerWidth("600px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`h-[94px] bg-white m-0 px-0 `}>
      <div className={`fixed left-0 z-[500] w-full transition-transform duration-300 ${isMobile ? 'border-b-[0.5px] border-[#e5e5e5] shadow-header' : ''}`}>
        <div className="flex flex-row justify-between mx-auto my-0 px-5 pt-3 bg-white h-[56px] w-full relative overflow-hidden">
          <Logo isLoading={isAppLoading} />
          <div className="flex-1">
            <Searchbar isLoading={isAppLoading}  />
          </div>
          <div className="flex items-center justify-center">
            <Actions isLoading={isAppLoading} />
            <Button
              className="md:hidden"
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              style={{
                backgroundColor: "#8A162A",
              }}
            />
          </div>
        </div>
        <div className={`hidden md:block w-full ${visible && isMobile ? 'navbar-with-border' : ''}`}>
          <Navbar isLoading={isAppLoading} />
        </div>
      </div>
      <Drawer
     
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
        width={drawerWidth}
      
      >
        <div className="p-4 " style={{marginTop:"-38px"}}>
          <Searchbar isLoading={isAppLoading} isShow />
          <div className="mt-4">
            <Navbar isLoading={isAppLoading} isDrawer closeDrawer={closeDrawer} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
