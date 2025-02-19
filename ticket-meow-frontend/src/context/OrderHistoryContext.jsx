import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const OrderHistoryContext = createContext();

// Custom hook to use OrderHistoryContext
export const useOrderHistory = () => {
  return useContext(OrderHistoryContext);
};

// Order History Provider Component
export const OrderHistoryProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  // Load order history from local storage (or backend in the future)
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(savedOrders);
  }, []);

  // Save order history to local storage
  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }, [orderHistory]);

  // Function to add a new order
  const addOrder = (order) => {
    setOrderHistory((prevOrders) => [...prevOrders, order]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orderHistory, addOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};
