import React, { Fragment } from "react";

import NavigationItems from "../NavigationItems";
import Logo from "../../../Logo/Logo";
import DropBack from "../../../UI/DropBack/DropBack";

const sideDrawer = (props) => {
  let sideDrawerClasses = [
    "absolute | top-0 -md:-left-100 | bg-white h-screen w-1/2 | py-9 px-2 | duration-300	z-20",
  ];

  if (props.closed) {
    sideDrawerClasses.push("-left-full");
  }

  if (props.open) {
    sideDrawerClasses.push("left-[0px]");
  }

  return (
    <>
      <DropBack show={props.open} clicked={props.closed} />
      <div className={sideDrawerClasses.join(" ")}>
        <Logo classes="mb-10" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
