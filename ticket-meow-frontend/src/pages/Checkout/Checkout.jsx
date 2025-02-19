import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';  // Assuming user info is needed
import styles from './Checkout.module.css'; // Use Checkout.module.css for styles

const Checkout = () => {
  const { cartItems, totalAmount, clearCart } = useCart(); // Get cart items and total
  const { user } = useAuth(); // Get user info (e.g., for pre-filling form)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    paymentMethod: ''
  });

  const [paymentStatus, setPaymentStatus] = useState(null); // Success or failure state

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart'); // If no items, redirect to cart page
    }
  }, [cartItems, navigate]);

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission (and payment logic here)
  const handleCheckout = (e) => {
    e.preventDefault();
    
    // Simple validation (e.g., check if all fields are filled)
    if (!formData.name || !formData.email || !formData.paymentMethod) {
      alert('Please fill in all fields');
      return;
    }

    // Simulate a payment process (can be replaced with Stripe/PayPal logic)
    const paymentSuccess = true; // Simulated payment result

    if (paymentSuccess) {
      setPaymentStatus('success');
      clearCart(); // Clear cart on successful payment
      navigate('/payment/success');
    } else {
      setPaymentStatus('failure');
      navigate('/payment/failure');
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>

      {/* Display Cart Items */}
      <div className={styles.cartItems}>
        <h3>Your Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
        <p><strong>Total: ${totalAmount}</strong></p>
      </div>

      {/* Payment Status Message */}
      {paymentStatus && (
        <div className={styles.paymentStatus}>
          {paymentStatus === 'success' ? (
            <p className={styles.success}>Payment Successful!</p>
          ) : (
            <p className={styles.failure}>Payment Failed. Please try again.</p>
          )}
        </div>
      )}

      {/* Billing Information Form */}
      <form onSubmit={handleCheckout} className={styles.checkoutForm}>
        <h3>Billing Information</h3>
        
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
        />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="">Select a payment method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
