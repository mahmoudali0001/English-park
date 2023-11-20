import React from "react";

import ImgSrc from "../../assests/Image/Logo.png";

const SkillsSection = () => (
  <section className="flex w-full justify-center items-center gap-x-10">
    <article className="w-1/2">
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
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
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <article className="flex w-full">
        <div className="w-1/2">test</div>
        <div className="w-1/2">test</div>
        <div className="w-1/2">test</div>
        <div className="w-1/2">test</div>
      </article>
    </article>
  </section>
);

export default SkillsSection;
