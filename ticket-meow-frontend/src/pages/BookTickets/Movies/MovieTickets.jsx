import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieTickets.module.css";

const movies = [
  {
    id: 1,
    title: "The Cat's Adventure",
    poster:
      "https://example.com/cat-adventure-poster.jpg",
  },
  {
    id: 2,
    title: "Meow Wars",
    poster:
      "https://example.com/meow-wars-poster.jpg",
  },
  {
    id: 3,
    title: "Whiskers in Wonderland",
    poster:
      "https://example.com/whiskers-wonderland-poster.jpg",
  },
];

const MovieTickets = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Select a Movie</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img
              src={movie.poster}
              alt={movie.title}
              className={styles.poster}
            />
            <h2 className={styles.title}>{movie.title}</h2>
            <Link to={`/book-tickets/movies/${movie.id}`}>
              <button className={styles.button}>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieTickets;
