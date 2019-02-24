import React from "react";
import classes from "./DrawToggle.module.css";

const DrawToggle = props => {
  return (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawToggle;
