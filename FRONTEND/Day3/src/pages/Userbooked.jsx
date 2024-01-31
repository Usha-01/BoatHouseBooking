import React, { useState } from 'react';
import StarRating from './Star_Rating'; 
import '../assets/css/Userbooked.css';
import AdminDashboard from '../components/AdminDashboard';
import boat from '../assets/images/img.jpg';
import boat1 from '../assets/images/ex1.jpg';

const BookedBoatsPage = () => {
  const [bookedBoats, setBookedBoats] = useState([
    { id: 1, image: boat, name: 'Luxury Boat', capacity: 7, ratings: 4.5, availability: false },
    { id: 2, image: boat1, name: 'Wooden Boat', capacity: 4, ratings: 3, availability: false },
 
  ]);

  return (
    <>
    <div id="explor">
    <AdminDashboard/>
    <div id="im">
      {/* <h2>  Booked boats</h2> */}
     </div>
      
      {bookedBoats.map((bookedBoat) => (
        <div key={bookedBoat.id} className="booked-boat-card">
          <img className="boat-image" src={bookedBoat.image} alt={`Boat ${bookedBoat.id}`} />
          <div className="boat-details">
            <h3>{bookedBoat.name}</h3>
            <p>Capacity: {bookedBoat.capacity}</p>
            <p>Ratings: <StarRating rating={bookedBoat.ratings} /></p>
            <p>
              Availability:
              <span className={`available-status ${bookedBoat.availability ? 'available' : 'not-available'}`}>
                {bookedBoat.availability ? 'Available' : 'Not Available'}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};

export default BookedBoatsPage;
