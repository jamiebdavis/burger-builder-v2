import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidedraw.module.css";
import Aux from "../../../hoc/AuxWrap";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDraw = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo} onClick={props.clicked}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDraw;
