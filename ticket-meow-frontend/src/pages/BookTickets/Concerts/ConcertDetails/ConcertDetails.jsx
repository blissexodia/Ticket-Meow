import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ConcertDetails.module.css";

const ConcertDetails = () => {
  const { concertId } = useParams(); // Get the concert ID from the URL
  const [concert, setConcert] = useState(null);

  // Mock data fetching (replace with real API call later)
  useEffect(() => {
    const fetchConcertDetails = async () => {
      // Mock data for demo purposes
      const mockConcerts = [
        {
          id: "1",
          title: "Cat Jams Live",
          date: "March 25, 2025",
          location: "Meow Arena",
          description: "Join us for a night of purr-fect music!",
          lineup: ["DJ Whiskers", "Paw-some Band", "Catnip Crew"],
          ticketOptions: [
            { type: "General Admission", price: "$50" },
            { type: "VIP", price: "$150" },
          ],
        },
        {
          id: "2",
          title: "Meow Mix Festival",
          date: "April 15, 2025",
          location: "Catnip Park",
          description: "The ultimate cat-themed music festival!",
          lineup: ["Fur-tastic Beats", "Meow Melody", "Claw-some DJs"],
          ticketOptions: [
            { type: "General Admission", price: "$70" },
            { type: "VIP", price: "$200" },
          ],
        },
      ];

      // Find the concert with the matching concertId
      const concertDetails = mockConcerts.find(
        (c) => c.id === concertId
      );
      setConcert(concertDetails);
    };

    fetchConcertDetails();
  }, [concertId]);

  if (!concert) return <div>Loading...</div>;

  return (
    <div className={styles.concertDetails}>
      <h1>{concert.title}</h1>
      <p>Date: {concert.date}</p>
      <p>Location: {concert.location}</p>
      <p>{concert.description}</p>

      <h2>Lineup:</h2>
      <ul>
        {concert.lineup.map((artist, index) => (
          <li key={index}>{artist}</li>
        ))}
      </ul>

      <h2>Ticket Options:</h2>
      <ul>
        {concert.ticketOptions.map((ticket, index) => (
          <li key={index}>
            {ticket.type} - {ticket.price}
          </li>
        ))}
      </ul>

      <button className={styles.bookNowButton}>Book Now</button>
    </div>
  );
};

export default ConcertDetails;
