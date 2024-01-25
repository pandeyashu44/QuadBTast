import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css'; 

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
    alert('Booking Movie Ticket Form');

    const userName = prompt('Enter your name:');
    const userEmail = prompt('Enter your email:');

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
          <p className='show-summary' dangerouslySetInnerHTML={{__html:showDetails.summary}}></p>
          <button className="book-ticket-button" onClick={handleBookTicket}>
            Book Movie Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
