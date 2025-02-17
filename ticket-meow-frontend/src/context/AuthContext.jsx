// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user will be null if not logged in

  const login = (userData) => {
    setUser(userData); // Set user when logging in
  };

  const logout = () => {
    setUser(null); // Reset user to null when logging out
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
