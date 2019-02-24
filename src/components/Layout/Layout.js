import React, { Component } from "react";
import Aux from "../../hoc/AuxWrap";
import classes from "./Layout.module.css";
import BackDrop from "../UI/Backdrop/Backdrop";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDraw from "../navigation/sidedraw/SideDraw";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  sideDrawTogglehandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawToggleClicked={this.sideDrawTogglehandler} />
        <SideDraw
          open={this.state.showSideDrawer}
          drawToggleClicked={this.sideDrawerClosedHandler}
        />
        <div>
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </Aux>
    );
  }
}

export default Layout;
