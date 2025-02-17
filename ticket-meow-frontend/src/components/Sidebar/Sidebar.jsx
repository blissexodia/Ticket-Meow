// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "×" : "☰"}
      </button>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li>
            <Link to="/dashboard" className={styles.menuItem}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/user-profile" className={styles.menuItem}>
              User Profile
            </Link>
          </li>
          <li>
            <Link to="/order-history" className={styles.menuItem}>
              Order History
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className={styles.menuItem}>
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
