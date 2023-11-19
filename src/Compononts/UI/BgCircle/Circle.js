import React from "react";

const BgCricle = (props) => (
  <div className={["bg-mainColor  rounded-full z-[0]", props.class].join(" ")}>
    {props.children}
  </div>
);

export default BgCricle;
