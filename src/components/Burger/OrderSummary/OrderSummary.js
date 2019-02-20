import React from "react";
import Aux from "../../../hoc/AuxWrap";

const orderSummary = props => {
  const ingredientSummary = props.ingredients;
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul />
    </Aux>
  );
};

export default orderSummary;
