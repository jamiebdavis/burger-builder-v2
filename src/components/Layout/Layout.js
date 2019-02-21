import React from "react";
import Aux from "../../hoc/AuxWrap";
import classes from "./Layout.module.css";
import BackDrop from "../UI/Backdrop/Backdrop";

const Layout = props => {
  return (
    <Aux>
      <div>
        <div>toolbar, sidedraw, backdrop</div>
        <main className={classes.Content}>{props.children}</main>
      </div>
    </Aux>
  );
};

export default Layout;
