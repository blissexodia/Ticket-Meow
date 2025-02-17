// src/pages/BookTickets/Concerts/ConcertTickets.jsx
import React from "react";
import styles from "./ConcertTickets.module.css";

const ConcertTickets = () => {
  // Dummy Concert Data
  const concerts = [
    {
      id: 1,
      title: "Rock Night 2025",
      image: "/assets/images/concert1.jpg",
      price: "$70",
    },
    {
      id: 2,
      title: "Jazz & Blues Evening",
      image: "/assets/images/concert2.jpg",
      price: "$60",
    },
    {
      id: 3,
      title: "Pop Music Fest",
      image: "/assets/images/concert3.jpg",
      price: "$80",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Concert Tickets</h1>
      <div className={styles.grid}>
        {concerts.map((concert) => (
          <div className={styles.card} key={concert.id}>
            <img
              src={concert.image}
              alt={concert.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{concert.title}</h3>
            <p className={styles.price}>{concert.price}</p>
            <button className={styles.button}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertTickets;
