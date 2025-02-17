// src/pages/OrderHistory/OrderHistory.jsx
import React from "react";
import styles from "./OrderHistory.module.css";

const OrderHistory = () => {
  // Dummy Data for now
  const orders = [
    {
      id: 1,
      eventName: "Cat Concert",
      date: "2025-02-01",
      tickets: 2,
      totalPrice: "$50",
      status: "Confirmed",
    },
    {
      id: 2,
      eventName: "Kitten Comedy Show",
      date: "2025-01-25",
      tickets: 1,
      totalPrice: "$30",
      status: "Canceled",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className={styles.orderItem}>
          <h3>{order.eventName}</h3>
          <div className={styles.orderDetails}>
            <p>Date of Purchase: {order.date}</p>
            <p>Number of Tickets: {order.tickets}</p>
            <p>Total Price: {order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <a href="#" className={styles.viewDetails}>
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
