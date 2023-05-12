import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./tvshow.css";

const TVShow = () => {
  const [show, setShow] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };
    fetchData();
  }, [id]);

  const handleBooking = () => {
    setIsBookingOpen(true);
  };

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(`booking-${id}`, JSON.stringify(userData));
    setIsBookingOpen(false);
  };

  return (
    <div className="tv-show-container">
      {show ? (
        <>
          <div className="show-image">
            <img src={show.image.medium} alt={show.name} />
          </div>
          <div className="show-summary">
            <h1>{show.name}</h1>
            <p>{show.summary}</p>
            <button onClick={handleBooking}>Book a Ticket</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {isBookingOpen && (
        <div className="booking-form">
          <h2>Book a Ticket</h2>
          <form onSubmit={handleBookingSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TVShow;
