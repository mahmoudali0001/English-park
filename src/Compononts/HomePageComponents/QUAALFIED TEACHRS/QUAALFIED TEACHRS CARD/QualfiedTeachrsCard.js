import React from "react";

import ImgSrc from "../../../../assests/Image/HeaderImg.png";
import { BsShare } from "react-icons/bs";

const QualfiedTeachrsCard = (props) => (
  <article className="flex flex-col gap-y-16 justify-center items-center">
    <div className="relative rounded-full w-36 h-36">
      <span
        className="
      absolute top-[-10px] left-[-23px] w-[130%] h-[130%] bg-transparent
       border-b-4 border-l-4 border-b-transparent border-l-transparent rounded-full rotate-[136deg] border-[#dfdfdf] border-r-4 border-t-4
        z-0
        "
      ></span>
      <img
        src={ImgSrc}
        alt=""
        className="relative z-10 rounded-full bg-[#eee] w-36 h-36"
      />
      <div className="absolute top-0 left-0 z-20 text-lg flex justify-center items-center rounded-full text-white bg-cyan-500 w-8 h-8">
        <BsShare className="relative z-20 rotate-180" />
      </div>
    </div>

    <div className="relative z-10 text-black text-center">
      <h4 className="font-bold">Aya Ziedan</h4>
      <h6 className="text-sm text-gray-500">Founder</h6>
    </div>
  </article>
);

export default QualfiedTeachrsCard;
