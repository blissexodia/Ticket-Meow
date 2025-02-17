import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookTickets.module.css";

const BookTickets = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What type of ticket would you like to book?</h1>
      <div className={styles.options}>
        <div
          className={styles.option}
          onClick={() => handleNavigation("/book-tickets/movies")}
        >
          Movie Tickets
        </div>
        <div
          className={styles.option}
          onClick={() => handleNavigation("/book-tickets/events")}
        >
          Event Tickets
        </div>
        <div
          className={styles.option}
          onClick={() => handleNavigation("/book-tickets/concerts")}
        >
          Concert Tickets
        </div>
      </div>
    </div>
  );
};

export default BookTickets;
