// src/pages/BookTickets/Events/EventTickets.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventTickets.module.css";

// Dummy event data
const eventsData = [
  {
    id: "1",
    title: "Cat Festival",
    date: "March 25, 2025",
    venue: "Cat Park, Cozy Town",
    image: "https://placekitten.com/800/400",
  },
  {
    id: "2",
    title: "Music Night",
    date: "April 10, 2025",
    venue: "Meow Hall, Downtown",
    image: "https://placekitten.com/801/400",
  },
];

const EventTickets = () => {
  return (
    <div className={styles.eventTickets}>
      <h1 className={styles.heading}>Events</h1>
      <div className={styles.eventsContainer}>
        {eventsData.map((event) => (
          <Link
            to={`/book-tickets/events/${event.id}`} // Link to event details page
            key={event.id}
            className={styles.eventCard}
          >
            <img
              src={event.image}
              alt={event.title}
              className={styles.eventImage}
            />
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <p className={styles.eventDate}>{event.date}</p>
            <p className={styles.eventVenue}>{event.venue}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventTickets;
