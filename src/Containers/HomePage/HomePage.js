import React, { Component } from "react";

import SkillsSection from "../../Compononts/HomePageComponents/SkillsSection";
import Header from "../../Compononts/HomePageComponents/Header";
import CoursesSection from "../../Compononts/HomePageComponents/CoursesSection";
import AboutUsElements from "../../Compononts/HomePageComponents/AboutUsComponents/AboutUsELements";

class HomePage extends Component {
  render() {
    return (
      <div className="flex gap-x-2">
        <section className=" w-full">
          <Header />
          <SkillsSection />
          <CoursesSection />
          <AboutUsElements />
        </section>
      </div>
    );
  }
}

export default HomePage;
