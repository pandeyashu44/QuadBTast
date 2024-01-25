import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching show list:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="show-list-container">
      {shows.map(show => (
        <div key={show.id} className="show-card">
          <h2 className="show-title">{show.name}</h2>
          {/* <p className="show-description">{show.summary}</p>
           */}
           {/* <p className="show-description" dangerouslySetInnerHTML={{__html:show.summary}}></p> */}
          <Link to={`/show/${show.id}`} className="show-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
