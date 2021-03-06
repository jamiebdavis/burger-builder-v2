import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="your Name"
          />
          <input
            className={classes.Input}
            type="text"
            name="email"
            placeholder="your Email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="your Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Post Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
