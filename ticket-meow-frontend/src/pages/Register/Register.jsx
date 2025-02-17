// src/pages/Register/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation Functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const lengthRequirement = /.{8,}/;
    const uppercaseRequirement = /[A-Z]/;
    const numberRequirement = /[0-9]/;

    return (
      lengthRequirement.test(password) &&
      uppercaseRequirement.test(password) &&
      numberRequirement.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Email Validation
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email. Must contain @ and .com.";
    }

    // Password Validation
    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters, contain an uppercase letter and a number.";
    }

    // Confirm Password
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      console.log("Email:", email, "Password:", password);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Create Your Account 😺</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <p className={styles.error}>{errors.password}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}

          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
