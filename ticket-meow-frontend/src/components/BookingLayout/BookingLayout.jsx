import React from "react";
import styles from "./BookingLayout.module.css";

const BookingLayout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BookingLayout;
