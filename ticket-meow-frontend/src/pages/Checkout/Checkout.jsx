import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useOrderHistory } from '../../context/OrderHistoryContext';  // Import useOrderHistory
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cart, clearCart, getTotalPrice } = useCart();
  const { user } = useAuth();
  const { addOrder } = useOrderHistory();  // Get the addOrder function
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    paymentMethod: '',
  });

  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.paymentMethod) {
      alert('Please fill in all fields');
      return;
    }

    // Simulating payment success or failure
    const paymentSuccess = true; // You can toggle this for testing

    if (paymentSuccess) {
      setPaymentStatus('success');
      clearCart(); // Empty the cart after successful "payment"

      // Add the order to the order history
      const order = {
        user: {
          name: formData.name,
          email: formData.email,
        },
        items: cart,
        total: getTotalPrice(),
        paymentMethod: formData.paymentMethod,
        date: new Date().toLocaleString(),
      };

      addOrder(order); // Add the order to the history

      navigate('/payment/success');
    } else {
      setPaymentStatus('failure');
      navigate('/payment/failure');
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>

      <div className={styles.cartItems}>
        <h3>Your Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - ${item.price}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total: ${getTotalPrice()}</strong>
        </p>
      </div>

      {paymentStatus && (
        <div className={styles.paymentStatus}>
          {paymentStatus === 'success' ? (
            <p className={styles.success}>Payment Successful!</p>
          ) : (
            <p className={styles.failure}>Payment Failed. Please try again.</p>
          )}
        </div>
      )}

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
