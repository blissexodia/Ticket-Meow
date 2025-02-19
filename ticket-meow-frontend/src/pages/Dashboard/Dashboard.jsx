import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const decodedToken = jwt.decode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          setError('Session expired. Please log in again.');
          setLoading(false);
          return;
        }

        const response = await fetch("http://localhost:5000/api/auth/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setError("Failed to load dashboard data.");
        }
      } catch (err) {
        console.error("Error fetching dashboard:", err);
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome, {userData?.name}!</h1>
      <div className={styles.stats}>
        <div className={styles.card}>
          <h2>Total Bookings</h2>
          <p>{userData?.totalBookings || 0}</p>
        </div>
        <div className={styles.card}>
          <h2>Wishlist Items</h2>
          <p>{userData?.wishlistCount || 0}</p>
        </div>
        <div className={styles.card}>
          <h2>Order History</h2>
          <p>{userData?.orderHistoryCount || 0}</p>
        </div>
      </div>
      <h2 className={styles.subTitle}>Recent Activities</h2>
      <ul className={styles.activities}>
        {userData?.recentActivities?.length > 0 ? (
          userData.recentActivities.map((activity, index) => (
            <li key={index} className={styles.activityItem}>
              {activity}
            </li>
          ))
        ) : (
          <li className={styles.activityItem}>No recent activities</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
