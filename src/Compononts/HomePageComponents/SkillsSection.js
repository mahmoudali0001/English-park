import React from "react";

import ImgSrc from "../../assests/Image/ImgSkillsSec1.jpg";
import ImgSrc2 from "../../assests/Image/ImgSkillsSec2.jpg";
import Button from "../UI/Button/Button";
import { BsCheck2 } from "react-icons/bs";

const SkillsSection = () => (
  <section className="flex w-full justify-center items-center gap-x-10 py-24 px-10">
    <article className="flex flex-col w-1/2 justify-center items-center">
      <article className="flex flex-row gap-x-5">
        <img
          src={ImgSrc2}
          className="w-1/2 rounded-xl rotate-[-20deg]"
          alt=""
        />
        <img
          src={ImgSrc}
          className="w-[40%] h-fit rounded-xl rotate-[5deg]"
          alt=""
        />
      </article>
      <div className="flex flex-row gap-x-3 justify-center items-center text-white rounded-lg mt-[-30px] z-10 bg-purple-800 p-1 px-10 outline outline-1 outline-slate-200 border-4  border-white shadow-2xl">
        <span className="text-6xl">8</span>
        <span className="leading-5">
          Years of <br /> Experience
        </span>
      </div>
    </article>
    <article className="flex gap-y-1 flex-col w-1/2">
      <span className="text-sm font-bold text-cyan-500">GET TO KNOW US</span>
      <h1 className="font-medium text-black text-4xl">
        Grow Your skills Learn <br /> with us from anywhere
      </h1>

      <p className="text-xs text-gray-400 w-3/4 mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker includi ng
        versions of Lorem Ipsum.
      </p>

      <article className="flex flex-wrap gap-x-[80px] gap-y-5 mt-5 w-4/5">
        <div className="skillsCard">
          <BsCheck2 className="skillsIcons bg-pink-700" />
          <span className="text-lg text-gray-700">Expert trainers</span>
        </div>
        <div className="skillsCard">
          <BsCheck2 className="skillsIcons bg-purple-700" />
          <span className="text-lg text-gray-700">Online learing</span>
        </div>

        <div className="skillsCard">
          <BsCheck2 className="skillsIcons bg-mainColor" />
          <span className="text-lg text-gray-700">Lifetime access</span>
        </div>

        <div className="skillsCard">
          <BsCheck2 className="skillsIcons bg-cyan-500" />
          <span className="text-lg text-gray-700">Great results</span>
        </div>
      </article>

      <Button buttonClass="bg-black text-white px-10 py-2 text-xs text-white rounded-[30px] mt-5 shadow-lg">
        Discover More
      </Button>
    </article>
  </section>
);

export default SkillsSection;
