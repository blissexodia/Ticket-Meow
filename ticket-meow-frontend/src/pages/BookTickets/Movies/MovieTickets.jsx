import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieTickets.module.css";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext"; // Import Wishlist Context

const movies = [
  {
    id: 1,
    title: "The Cat's Adventure",
    poster: "https://example.com/cat-adventure-poster.jpg",
    price: "$20",
  },
  {
    id: 2,
    title: "Meow Wars",
    poster: "https://example.com/meow-wars-poster.jpg",
    price: "$25",
  },
  {
    id: 3,
    title: "Whiskers in Wonderland",
    poster: "https://example.com/whiskers-wonderland-poster.jpg",
    price: "$18",
  },
];

const MovieTickets = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Use Wishlist context

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Select a Movie</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img src={movie.poster} alt={movie.title} className={styles.poster} />
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.price}>{movie.price}</p>
            <button className={styles.button} onClick={() => addToCart(movie)}>
              Book Now
            </button>
            <button className={styles.wishlistButton} onClick={() => addToWishlist(movie)}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieTickets;
