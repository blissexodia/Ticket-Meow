import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fetch user data if the token is present
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/auth/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data); // Set user data if token is valid
        } catch (err) {
          console.error(err);
          setUser(null);
        }
      }
    };

    fetchUser();
  }, []);

  // Login method
  const login = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token); // Save the token to localStorage
    setUser(response.data.user);
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
