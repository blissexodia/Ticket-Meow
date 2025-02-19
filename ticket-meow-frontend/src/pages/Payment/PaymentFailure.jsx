import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div>
      <h1>Payment Failed. Please try again.</h1>
      <Link to="/cart">Go back to Cart</Link>
    </div>
  );
};

export default PaymentFailure;
