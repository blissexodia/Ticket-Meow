import React from "react";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  // Dummy data for now
  const favoriteTickets = [
    {
      id: 1,
      eventName: "Cat Concert",
      date: "March 25, 2025",
      location: "Meow Arena",
      price: "$50",
    },
    {
      id: 2,
      eventName: "Purrfect Play",
      date: "April 10, 2025",
      location: "Whisker Theater",
      price: "$30",
    },
  ];

  return (
    <div className={styles.wishlistContainer}>
      <h2>My Wishlist</h2>
      {favoriteTickets.length > 0 ? (
        <ul className={styles.ticketList}>
          {favoriteTickets.map((ticket) => (
            <li key={ticket.id} className={styles.ticketItem}>
              <h3>{ticket.eventName}</h3>
              <p>Date: {ticket.date}</p>
              <p>Location: {ticket.location}</p>
              <p>Price: {ticket.price}</p>
              <button className={styles.removeButton}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in your wishlist yet!</p>
      )}
    </div>
  );
};

export default Wishlist;
