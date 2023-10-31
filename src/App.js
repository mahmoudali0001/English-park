import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./Containers/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route
            path="/shap"
            element={
              <p className="text-center text-orange-300 text-6xl">Shap</p>
            }
          />
          <Route
            path="/aboutus"
            element={
              <p className="text-center text-orange-300 text-6xl">About Us</p>
            }
          />
          <Route
            path="/contactus"
            element={
              <p className="text-center text-orange-300 text-6xl">Contact Us</p>
            }
          />
        </Routes>
      </Layout>
    );
  }
}

export default App;
