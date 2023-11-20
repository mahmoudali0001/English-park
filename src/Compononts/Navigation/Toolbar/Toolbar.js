import React from "react";

import { BsSearch, BsFillTelephoneFill, BsPerson } from "react-icons/bs";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import Button from "../../UI/Button/Button";

const Toolbar = (props) => {
  return (
    <header className="flex items-center justify-between z-30 | lg:px-3 md:px-2 px-1 | min-h-[48px] box-border shadow-md">
      <DrawerToggle clicked={props.drawerToggleClicked} />

      <div className="flex gap-x-16">
        <Logo />

        <nav className="md:inline-block hidden">
          <NavigationItems />
        </nav>
      </div>

      <div className="flex gap-x-5 justify-center items-center cursor-pointer">
        <div className="md:inline-block hidden">login</div>
        <BsPerson className="md:hidden inline-block" />
        <BsSearch className="text-mainColor" />
        <Button buttonClass="bg-black px-3 py-2 text-[12px] text-white">
          <BsFillTelephoneFill className="inline-block mr-2" />
          Call Us
        </Button>
      </div>
    </header>
  );
};

export default Toolbar;
