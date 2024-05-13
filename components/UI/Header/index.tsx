import React from "react";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Actions from "./components/Actions";
import Navbar from "./components/Navbar";

function Header() {
  return (
    <div className="h-[94px] bg-white m-0 px-0">
      <div className="fixed left-0 z-[500] w-full transition-transform duration-300">
        <div className="flex flex-row justify-between mx-auto my-0 px-5 pt-3 bg-white h-[56px] w-full relative">
          <Logo />
          <Searchbar />
          <Actions />
        </div>
        <div className="w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
