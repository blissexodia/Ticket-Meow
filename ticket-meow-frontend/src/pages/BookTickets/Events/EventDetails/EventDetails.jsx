// src/pages/BookTickets/Events/EventDetails/EventDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./EventDetails.module.css";

// Dummy event data
const eventsData = [
  {
    id: "1",
    title: "Cat Festival",
    description: "Join us for a purr-fect day of fun and festivities!",
    date: "March 25, 2025",
    time: "2:00 PM - 8:00 PM",
    venue: "Cat Park, Cozy Town",
    image: "https://placekitten.com/800/400",
  },
  {
    id: "2",
    title: "Music Night",
    description: "Enjoy live music with a cozy vibe!",
    date: "April 10, 2025",
    time: "6:00 PM - 11:00 PM",
    venue: "Meow Hall, Downtown",
    image: "https://placekitten.com/801/400",
  },
];

const EventDetails = () => {
  const { eventId } = useParams(); // Get the event ID from the URL
  const event = eventsData.find((event) => event.id === eventId); // Find event by ID

  if (!event) {
    return <p>Event not found!</p>;
  }

  return (
    <div className={styles.eventDetails}>
      <img src={event.image} alt={event.title} className={styles.eventImage} />
      <h1 className={styles.eventTitle}>{event.title}</h1>
      <p className={styles.eventDescription}>{event.description}</p>
      <p className={styles.eventDate}>
        <strong>Date:</strong> {event.date}
      </p>
      <p className={styles.eventTime}>
        <strong>Time:</strong> {event.time}
      </p>
      <p className={styles.eventVenue}>
        <strong>Venue:</strong> {event.venue}
      </p>
      <Link to="/book-tickets/events" className={styles.backButton}>
        ← Back to Events
      </Link>
      <button className={styles.bookButton}>Book Now</button>
    </div>
  );
};

export default EventDetails;
