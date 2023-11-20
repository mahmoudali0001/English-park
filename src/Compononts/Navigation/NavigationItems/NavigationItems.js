import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="flex justify-between md:flex-row flex-col">
    <NavigationItem
      path="/"
      className="text-mainColor border border-t-0 border-r-0 border-l-0 border-b-2 border-mainColor bg-gray-50BsFillTelephoneFill font-bold"
    >
      Home
    </NavigationItem>
    <NavigationItem path="/shap" className="text-gray-500">
      Shop
    </NavigationItem>
    <NavigationItem path="/aboutus" className="text-gray-500">
      About Us
    </NavigationItem>
    <NavigationItem path="/contactus" className="text-gray-500">
      Contact Us
    </NavigationItem>
  </ul>
);

export default navigationItems;
