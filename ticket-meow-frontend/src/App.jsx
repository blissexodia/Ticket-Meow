import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import BookTickets from "./pages/BookTickets/BookTickets";
import MovieTickets from "./pages/BookTickets/Movies/MovieTickets";
import MovieDetails from "./pages/BookTickets/Movies/MovieDetails/MovieDetails";
import EventTickets from "./pages/BookTickets/Events/EventTickets";
import EventDetails from "./pages/BookTickets/Events/EventDetails/EventDetails";
import ConcertTickets from "./pages/BookTickets/Concerts/ConcertTickets";
import ConcertDetails from "./pages/BookTickets/Concerts/ConcertDetails/ConcertDetails";
import UserProfile from "./pages/Profile/UserProfile";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Wishlist from "./pages/Wishlist/Wishlist";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";
import PaymentFailure from "./pages/Payment/PaymentFailure";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { OrderHistoryProvider } from "./context/OrderHistoryContext"; // Added OrderHistoryProvider

// Scroll Restoration Hook
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Protected Route wrapper to ensure only logged-in users can access certain pages
const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <OrderHistoryProvider> {/* Wrap with OrderHistoryProvider */}
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
              <Navbar />
              <div style={{ display: "flex", flex: 1 }}>
                <Sidebar />
                <div style={{ flex: 1 }}>
                  <ScrollToTop />
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      {/* Public Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />

                      {/* Book Tickets Flow */}
                      <Route path="/book-tickets" element={<BookTickets />} />
                      <Route path="/book-tickets/movies" element={<MovieTickets />} />
                      <Route path="/book-tickets/movies/:movieId" element={<MovieDetails />} />
                      <Route path="/book-tickets/events" element={<EventTickets />} />
                      <Route path="/book-tickets/events/:eventId" element={<EventDetails />} />
                      <Route path="/book-tickets/concerts" element={<ConcertTickets />} />
                      <Route path="/book-tickets/concerts/:concertId" element={<ConcertDetails />} />

                      {/* Cart & Checkout */}
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />

                      {/* Payment Status */}
                      <Route path="/payment/success" element={<PaymentSuccess />} />
                      <Route path="/payment/failure" element={<PaymentFailure />} />

                      {/* Protected Routes */}
                      <Route path="/user-profile" element={<ProtectedRoute element={<UserProfile />} />} />
                      <Route path="/order-history" element={<ProtectedRoute element={<OrderHistory />} />} />
                      <Route path="/wishlist" element={<ProtectedRoute element={<Wishlist />} />} />
                      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

                      {/* 404 Not Found */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </div>
              </div>
            </div>
          </OrderHistoryProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
