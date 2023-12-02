import React, { Component, Fragment } from "react";

import Card from "./CoursesCard/CoursesCard";
import Button from "../../UI/Button/Button";

class CoursesCard extends Component {
  render() {
    return (
      <section className="py-10 w-3/4">
        <span className="text-cyan-500 text-sm">English Courses</span>
        <p className="text-4xl font-bold text-gray-800 pb-6">
          Pick a course to <br /> get Started your Study
        </p>
        <article className="flex justify-center items-center flex-col gap-y-5">
          <section className="flex flex-row  gap-x-4">
            <Card limited={true} />
            <Card />
            <Card />
            <Card limited={true} />
          </section>

          <Button buttonClass="bg-black text-white px-10 py-2 text-xs text-white rounded-[30px] mt-5 shadow-lg">
            Show More
          </Button>
        </article>
      </section>
    );
  }
}

export default CoursesCard;
