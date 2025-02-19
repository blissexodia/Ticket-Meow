import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useAuth } from "../../context/AuthContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();  // Call the logout function
    navigate("/login");  // Redirect to login page after logout
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "×" : "☰"}
      </button>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          {/* Replace Dashboard link with a title */}
          <li className={styles.menuItemTitle}>
            Dashboard
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
            <button onClick={handleLogout} className={`${styles.menuItem} ${styles.logoutButton}`}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
