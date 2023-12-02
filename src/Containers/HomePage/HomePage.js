import React, { Component } from "react";

import SkillsSection from "../../Compononts/HomePageSections/SkillsSection";
import Header from "../../Compononts/HomePageSections/Header";
import CoursesSection from "../../Compononts/HomePageComponents/CoursesSection";

class HomePage extends Component {
  render() {
    return (
      <div className="flex gap-x-2">
        <section className=" w-full">
          <Header />
          <SkillsSection />
          <CoursesSection />
        </section>
      </div>
    );
  }
}

export default HomePage;
