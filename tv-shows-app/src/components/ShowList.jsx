// src/components/ShowList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://api.tvmaze.com/search/shows?q=all";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="mb-4">TV Shows</h1>
      <ul className="list-group">
        {shows.map((show) => (
          <li key={show.show.id} className="list-group-item mb-3">
            <div className="show-box d-flex justify-content-between align-items-center">
              <div>
                <h3 className="mb-1">{show.show.name}</h3>
                <p className="mb-1">{show.show.genres.join(", ")}</p>
              </div>
              <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
