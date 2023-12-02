import React from "react";

import ImgSrc from "../../../../assests/Image/ImgSkillsSec2.jpg";
import { BsCheck2 } from "react-icons/bs";
import Button from "../../../UI/Button/Button";

const card = (props) => {
  return (
    <article className="flex flex-col gap-y-2 relative border shadow-lg rounded-lg over overflow-hidden pb-3">
      <div className="relative">
        <img src={ImgSrc} alt=""></img>
        <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-lg w-fit absolute bottom-3 left-2">
          Hot offer
        </span>
        <span
          className={[
            "text-xs bg-red-500 text-white px-3 py-1 rounded-lg w-fit absolute top-3 right-0",
            props.limited ? "inline-block" : "hidden",
          ].join(" ")}
        >
          Limited
        </span>
      </div>
      <div className="flex flex-row justify-evenly items-center gap-x-2 text-cyan-500">
        <span className="flex flex-row text-xs items-center gap-x-1">
          <BsCheck2 className="bg-cyan-500 text-white rounded-full text-sx" />
          Everyday
        </span>
        <span className="flex flex-row text-xs items-center gap-x-1">
          <BsCheck2 className="bg-cyan-500 text-white rounded-full text-sx" />
          24/7 Speaking English
        </span>
      </div>
      <p className="capitalize font-bold text-xs ml-2">
        There is a system called (Speak Every Day), a daily conversation system
        with our distinguished team 🧡💪💪 We practice English with our children
        on a daily basis!!
      </p>

      <span className="text-xs text-gray-600 ">Start Date: 1/1/2024</span>
      <span className="text-right">
        <span className="mr-2 w-fit text-sm text-gray-600  whitespace-nowrap relative line-through-center">
          600
        </span>
        400 EGP / Month
      </span>

      <div>
        <div class="flex items-center">
          <input
            type="radio"
            id="star5"
            name="rating"
            class="hidden"
            value="5"
          />
          <label for="star5" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
            >
              <path d="M12 2L15.09 8.37L22 9.27L17 13.14L18.18 20L12 17.77L5.82 20L7 13.14L2 9.27L8.91 8.37L12 2Z" />
            </svg>
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            class="hidden"
            value="4"
          />
          <label for="star4" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
            >
              <path d="M12 2L15.09 8.37L22 9.27L17 13.14L18.18 20L12 17.77L5.82 20L7 13.14L2 9.27L8.91 8.37L12 2Z" />
            </svg>
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            class="hidden"
            value="3"
          />
          <label for="star3" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
            >
              <path d="M12 2L15.09 8.37L22 9.27L17 13.14L18.18 20L12 17.77L5.82 20L7 13.14L2 9.27L8.91 8.37L12 2Z" />
            </svg>
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            class="hidden"
            value="2"
          />
          <label for="star2" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
            >
              <path d="M12 2L15.09 8.37L22 9.27L17 13.14L18.18 20L12 17.77L5.82 20L7 13.14L2 9.27L8.91 8.37L12 2Z" />
            </svg>
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            class="hidden"
            value="1"
          />
          <label for="star1" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
            >
              <path d="M12 2L15.09 8.37L22 9.27L17 13.14L18.18 20L12 17.77L5.82 20L7 13.14L2 9.27L8.91 8.37L12 2Z" />
            </svg>
          </label>
        </div>
      </div>

      <Button buttonClass="text-sm text-gray-700 text-center w-full">
        Get Course
      </Button>
    </article>
  );
};

export default card;
