import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className={styles.wishlistContainer}>
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <ul className={styles.wishlistItems}>
          {wishlist.map((item, index) => (
            <li key={index} className={styles.wishlistItem}>
              <img src={item.image || "/default-image.jpg"} alt={item.title} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
              <button onClick={() => removeFromWishlist(item.id)} className={styles.removeButton}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
