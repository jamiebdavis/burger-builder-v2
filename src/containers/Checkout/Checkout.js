import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class CheckOut extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  CheckoutCancelled = () => {
    this.props.history.goBack();
  };

  CheckoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancelled={this.CheckoutCancelled}
          checkoutContinued={this.CheckoutContinued}
        />
      </div>
    );
  }
}

export default CheckOut;
