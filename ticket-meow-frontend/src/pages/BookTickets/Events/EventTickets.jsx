import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventTickets.module.css";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext"; // Import Wishlist Context

const eventsData = [
  {
    id: "1",
    title: "Cat Festival",
    date: "March 25, 2025",
    venue: "Cat Park, Cozy Town",
    image: "https://placekitten.com/800/400",
    price: "$15",
  },
  {
    id: "2",
    title: "Music Night",
    date: "April 10, 2025",
    venue: "Meow Hall, Downtown",
    image: "https://placekitten.com/801/400",
    price: "$20",
  },
];

const EventTickets = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Use Wishlist context

  return (
    <div className={styles.eventTickets}>
      <h1 className={styles.heading}>Events</h1>
      <div className={styles.eventsContainer}>
        {eventsData.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <p className={styles.eventDate}>{event.date}</p>
            <p className={styles.eventVenue}>{event.venue}</p>
            <p className={styles.eventPrice}>{event.price}</p>
            <button className={styles.bookButton} onClick={() => addToCart(event)}>
              Book Now
            </button>
            <button className={styles.wishlistButton} onClick={() => addToWishlist(event)}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTickets;
