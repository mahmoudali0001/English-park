import React from "react";

import ImgSrc from "../../assests/Image/Logo.png";

const logo = (props) => (
  <div className={`md:mt-1 text-2xl w-[70px] ${props.classes}`}>
    <img src={ImgSrc} alt="Logo" />
  </div>
);

export default logo;
