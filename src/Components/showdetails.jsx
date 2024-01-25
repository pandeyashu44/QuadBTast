// ShowDetails.css
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css'; // Import the CSS file

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = () => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setShowDetails(data);
        })
        .catch(error => {
          console.error('Error fetching show details:', error);
        });
    };

    fetchDetails();
  }, [id]);

  const handleBookTicket = () => {
    // Open a modal or use some UI framework to display the booking form
    // For simplicity, we'll use a basic alert here
    alert('Booking Movie Ticket Form');

    // Store user details in local storage
    const userName = prompt('Enter your name:');
    const userEmail = prompt('Enter your email:');

    // You can also store the show details in local storage
    localStorage.setItem('showDetails', JSON.stringify(showDetails));

    // Store user details
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
  };

  return (
    <div className="show-details-container">
      {showDetails && (
        <div>
          <h1>{showDetails.name}</h1>
          {/* <p className="show-summary"></p> */}
          <p dangerouslySetInnerHTML={{__html:showDetails.summary}}></p>
          <button className="book-ticket-button" onClick={handleBookTicket}>
            Book Movie Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
