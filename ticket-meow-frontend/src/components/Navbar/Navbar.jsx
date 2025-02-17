import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="src/assets/images/logo-cat.png" alt="Ticket Meow Logo" />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/book-tickets">Book Tickets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
