import Raect from "react";

import ImgSrc from "../../assests/Image/HeaderImg.png";
import Cricle from "../UI/BgCircle/Circle";
import Icon from "../UI/BgCircle/Icon";
import Button from "../UI/Button/Button";

const Header = () => (
  <header className="w-full overflow-hidden">
    <section className="flex gap-x-5 flex-col md:flex-row justify-center items-center">
      <article className="bg-white w-1/2 flex justify-center flex-col items-center gap-y-5 font-medium">
        <span className="text-gray-600 text-xs">START A NEW JOURNEY</span>

        <p className="text-7xl">
          Best{" "}
          <span className="text-Primary font-medium font-headerSpecialFont">
            Online
          </span>{" "}
          <br />
          courses from <br /> English Park
        </p>

        <p className="w-1/2 mt-2 text-gray-600 text-center">
          World-class traning and development programs <br />
          development by Top Teachers
        </p>

        <Button buttonClass="bg-black text-white px-16 py-2 text-lg text-white rounded-3xl">
          Find courses
        </Button>
      </article>

      <article className="w-1/2 relative">
        <img src={ImgSrc} className="w-4/5 z-10 relative" alt="" />

        <Cricle class="absolute z-[0] bg-mainColor bottom-[-5px] left-4 w-[70%] h-[80%]" />

        <Icon class="absolute top-[40%] left-2/3" />

        <Cricle class="bg-transparent w-24 h-24 border-[35px] border-Primary absolute top-16 left-[20%]" />
      </article>
    </section>
  </header>
);
export default Header;
