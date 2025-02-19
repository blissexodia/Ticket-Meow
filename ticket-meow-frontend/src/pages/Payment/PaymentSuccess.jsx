import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <Link to="/order-history">View Order History</Link>
    </div>
  );
};

export default PaymentSuccess;
