import React from "react";
import { useOrderHistory } from "../../context/OrderHistoryContext";
import styles from "./OrderHistory.module.css";

const OrderHistory = () => {
  const { orderHistory } = useOrderHistory();

  return (
    <div className={styles.orderHistoryContainer}>
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <ul className={styles.orderList}>
          {orderHistory.map((order, index) => (
            <li key={index} className={styles.orderItem}>
              <h3>Order #{index + 1}</h3>
              <p><strong>Date:</strong> {order.date}</p>
              <ul className={styles.itemList}>
                {order.items.map((item, idx) => (
                  <li key={idx} className={styles.item}>
                    <img src={item.image || "/default-image.jpg"} alt={item.title} className={styles.itemImage} />
                    <div>
                      <p><strong>{item.title}</strong></p>
                      <p>{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
