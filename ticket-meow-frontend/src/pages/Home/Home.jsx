// src/pages/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.catImageWrapper}>
        <img
          src="https://www.shutterstock.com/image-vector/white-cat-holding-movie-tickets-600nw-2389417423.jpg"
          alt="Cozy Cat"
          className={styles.catImage}
        />
      </div>
      <h1 className={styles.homeTitle}>Welcome to Ticket Meow!</h1>
      <div className={styles.homeButtons}>
        <Link to="/login" className={`${styles.homeButton} ${styles.loginButton}`}>
          Login
        </Link>
        <Link to="/register" className={`${styles.homeButton} ${styles.registerButton}`}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
