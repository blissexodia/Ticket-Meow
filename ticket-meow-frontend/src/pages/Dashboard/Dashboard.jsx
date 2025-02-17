import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  // Dummy data for demonstration
  const recentActivities = [
    { id: 1, activity: "Booked Cat Comedy Night tickets" },
    { id: 2, activity: "Added Whisker Music Fest to wishlist" },
    { id: 3, activity: "Checked order history" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, Cat Lover!</h1>
      <div className={styles.stats}>
        <div className={styles.card}>
          <h2>Total Bookings</h2>
          <p>3</p>
        </div>
        <div className={styles.card}>
          <h2>Wishlist Items</h2>
          <p>2</p>
        </div>
        <div className={styles.card}>
          <h2>Order History</h2>
          <p>5</p>
        </div>
      </div>
      <h2 className={styles.subTitle}>Recent Activities</h2>
      <ul className={styles.activities}>
        {recentActivities.map((activity) => (
          <li key={activity.id} className={styles.activityItem}>
            {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
