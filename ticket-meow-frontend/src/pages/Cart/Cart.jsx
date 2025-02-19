import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css"; // Make sure to create a corresponding CSS module for styling

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Use the Cart context

  const getTotalPrice = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price.replace("$", "")),
        0
      )
      .toFixed(2);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartHeader}>Your Cart</h1>
      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <p className={styles.emptyCartMessage}>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img
                  src={item.image || "/default-image.jpg"} // Default image if item doesn't have an image
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cart.length > 0 && (
        <div className={styles.cartSummary}>
          <p className={styles.totalPrice}>
            <strong>Total: ${getTotalPrice()}</strong>
          </p>
          <Link to="/checkout">
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
