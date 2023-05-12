import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./allshows.css";

const AllShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setShows(data);
    };
    fetchData();
  }, []);

  return (
    <div className="all-shows-container">
    
      <div className="all-shows-grid">
        {shows.map((show) => (
          <Link style={{textDecoration:"none", color:"black"}} key={show.id} to={`/tvshows/${show.id}`}>
            <div className="show-card">
              <div className="show-image">
                <img src={show.image.medium} alt={show.name} />
              </div>
              <div className="show-details">
                <h2>{show.name}</h2>
                <p>Genres: {show.genres.join(", ")}</p>
                <p>Language: {show.language}</p>
                <p>Status: {show.status}</p>
                <p>Average Rating: {show.rating.average}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllShows;
