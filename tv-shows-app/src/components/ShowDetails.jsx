// src/components/ShowDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
      });
  }, [id]);

  const handleBookTicket = () => {
    // Implement your logic to open a form with the movie details and book a ticket
    // You can use local/session storage for storing user details
    const movieDetails = {
      name: show.name,
      // Add more details as needed
    };
    localStorage.setItem("movieDetails", JSON.stringify(movieDetails));
    // Open the form or navigate to the booking page
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="mb-4">{show.name}</h2>
      <p className="mb-4">{show.summary}</p>
      <button className="btn btn-success mr-2" onClick={handleBookTicket}>
        Book Ticket
      </button>
      <Link to="/" className="btn btn-primary">
        Back to Show List
      </Link>
    </div>
  );
}

export default ShowDetails;
