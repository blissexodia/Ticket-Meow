import React, { useState, useEffect } from "react";
import axios from "../../api/axios";  // Make sure to import axios instance
import { useAuth } from "../../context/AuthContext";  // Import the AuthContext to manage user state
import styles from "./UserProfile.module.css";  // Importing CSS Module

const UserProfile = () => {
  const { user, logout } = useAuth();  // Using user context to fetch current user data
  const [userData, setUserData] = useState({
    username: user?.name || "",
    email: user?.email || "",
    profilePicture: user?.profilePicture || "https://via.placeholder.com/150",  // Placeholder image
  });

  const [formData, setFormData] = useState({
    username: userData.username,
    email: userData.email,
    profilePicture: userData.profilePicture,
  });

  // Fetch user profile from backend (optional, if needed)
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.name,
        email: user.email,
        profilePicture: user.profilePicture || "https://via.placeholder.com/150",
      });
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (for saving changes)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make API request to update profile on the backend
      const response = await axios.put("/auth/profile", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,  // Pass the JWT token in headers
        },
      });

      setUserData(formData);  // Update user data in the frontend
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    }
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
