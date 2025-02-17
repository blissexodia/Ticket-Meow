// src/pages/UserProfile/UserProfile.jsx
import React, { useState } from "react";
import styles from "./UserProfile.module.css";  // Importing CSS Module

const UserProfile = () => {
  // Sample data for user profile
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  });

  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: userData.username,
    email: userData.email,
    profilePicture: userData.profilePicture,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (for saving changes)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); // Update user data with form inputs
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.userProfile}>
      <h2>User Profile</h2>
      <div className={styles.profileInfo}>
        <img src={userData.profilePicture} alt="Profile" className={styles.profileImg} />
        <div className={styles.info}>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      </div>

      <h3>Edit Profile</h3>
      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Profile Picture URL:
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
