import React from "react";

import { HiOutlineLightBulb } from "react-icons/hi";

const Icons = (props) => (
  <HiOutlineLightBulb
    className={[
      "text-8xl p-1 text-white bg-purple-500 rounded-full border-8 border-white",
      props.class,
    ].join(" ")}
  />
);

export default Icons;
