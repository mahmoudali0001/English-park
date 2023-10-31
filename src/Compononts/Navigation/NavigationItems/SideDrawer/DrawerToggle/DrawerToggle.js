import React from "react";

import "../../../../../index.css";

const drawerToggle = (props) => (
  <div className="flex flex-col	gap-y-[5px] md:hidden " onClick={props.clicked}>
    <div className="drawerIcons"></div>
    <div className="drawerIcons"></div>
    <div className="drawerIcons"></div>
  </div>
);

export default drawerToggle;
