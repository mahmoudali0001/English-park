import React from "react";

const BgCricle = (props) => (
  <div className={["rounded-full", props.class].join(" ")}>
    {props.children}
  </div>
);

export default BgCricle;
