import React, { Component } from "react";

import SkillsSection from "../../Compononts/HomePageSections/SkillsSection";
import Header from "../../Compononts/HomePageSections/Header";

class HomePage extends Component {
  render() {
    return (
      <div className="flex gap-x-2">
        <section className=" w-full">
          <Header />
          <SkillsSection />
        </section>
      </div>
    );
  }
}

export default HomePage;
