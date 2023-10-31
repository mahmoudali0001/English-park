import React from "react";

import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
  <li className={"p-3 " + props.className}>
    <NavLink to={props.path} clicked={props.clicked}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
