import React from "react";
import Aux from "../../hoc/AuxWrap";
import classes from "./Layout.module.css";
import BackDrop from "../UI/Backdrop/Backdrop";
import Toolbar from "../navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <div>
        <div>toolbar, sidedraw, backdrop</div>
        <main className={classes.Content}>{props.children}</main>
      </div>
    </Aux>
  );
};

export default Layout;
