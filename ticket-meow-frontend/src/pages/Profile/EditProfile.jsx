import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch user profile data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage
        const response = await axios.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData({ name: response.data.name, email: response.data.email });
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        '/api/auth/profile',
        { name: userData.name, email: userData.email },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSuccessMessage('Profile updated successfully!');
      setUserData(response.data.user);
    } catch (err) {
      setError('Error updating profile');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>

      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
