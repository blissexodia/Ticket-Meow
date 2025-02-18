// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";  // Import the useAuth hook
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth();  // Get the logout function

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();  // Call the logout function
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
          <li>
            <button onClick={handleLogout} className={styles.menuItem}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
