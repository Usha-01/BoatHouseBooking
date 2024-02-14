import React, { useState, useEffect } from 'react';
import Usercard from './Usercard';
import axios from 'axios';
import '../assets/css/Book.css'
import UserDashboard from './UserDashboard';

const Book = () => {
  const [boats, setBoats] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const apiUrl = 'http://localhost:8081/boat';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBoats(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="viewer">
      <UserDashboard />
      <h2>Boat Booking Page</h2>
      {error && <div>Error: {error}</div>}

      <div className='adjust'>
        {boats.map((boat, index) => (
          <div key={index} className='boat-card-container'>
            <Usercard boatDetails={boat} />
          </div>
        ))}
      </div>  
    </div>
    // <div className="book-boat-user">
    //   <UserDashboard />
    //   {error && <div>Error: {error}</div>}

    //   <div className='boat-adjust-user'>
    //     {boats.map((boat, index) => (
    //       <div key={index} className='boat-card-container-user'>
    //         <Usercard boatDetails={boat} />
    //       </div>
    //     ))}
    //   </div>  
    // </div>
  );
};

export default Book;
