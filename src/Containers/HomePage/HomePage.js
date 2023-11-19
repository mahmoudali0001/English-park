import React, { Component } from "react";

import ProductsCards from "../../Compononts/ProductsCards/ProductsCards";
import HeaderCardComponent from "../../Compononts/HeaderCard/HeaderCard";
import Header from "../../Compononts/HomePageSections/Header";

class HomePage extends Component {
  render() {
    return (
      <div className="flex gap-x-2">
        <section className=" w-full">
          <Header />

          <div> Test</div>
        </section>
      </div>
    );
  }
}

export default HomePage;
