import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios"; // Updated path to match your setup
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email:", email, "Password:", password);  // Log for debugging

    try {
      // Sending login request to the server
      const response = await axios.post("/auth/login", { email, password });

      // Store the token in localStorage
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Set the token in Authorization header for subsequent requests
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;

      // Redirect to the dashboard after successful login
      navigate("/dashboard");

    } catch (err) {
      console.error("Login Error:", err.response ? err.response.data : err);

      if (err.response && err.response.data) {
        setError(err.response.data.message || "An error occurred. Please try again.");
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Welcome Back! 😺</h2>

        {error && <p className={styles.error}>{error}</p>} {/* Display the error message */}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>

        <p>
          New to Ticket Meow? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
