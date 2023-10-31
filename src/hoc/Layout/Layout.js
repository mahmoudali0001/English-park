import React, { Component, Fragment } from "react";

import NavigationItems from "../../Compononts/Navigation/NavigationItems/NavigationItems";
import Toolbar from "../../Compononts/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Compononts/Navigation/NavigationItems/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawerToggle: false,
  };

  SideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.SideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerHandler}
        />
        <main className="">{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
