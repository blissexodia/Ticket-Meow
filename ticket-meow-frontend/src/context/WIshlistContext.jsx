import React, { createContext, useContext, useState } from "react";

// Create the Wishlist context
const WishlistContext = createContext();

// WishlistProvider component to wrap your app
export const WishlistProvider = ({ children }) => {
  // Wishlist state
  const [wishlist, setWishlist] = useState([]);

  // Add to Wishlist function
  const addToWishlist = (item) => {
    // Check if the item is already in the wishlist
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }
  };

  // Remove from Wishlist function
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
