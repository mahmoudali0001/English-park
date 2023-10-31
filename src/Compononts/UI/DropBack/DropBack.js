import React from "react";

const backdrop = (props) =>
  props.show ? (
    <div
      className="w-full h-full absolute top-0 left-0 bg-[#33333340] z-10"
      onClick={props.clicked}
    ></div>
  ) : null;

export default backdrop;
