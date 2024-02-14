import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/Book.css';

const Usercard = ({ boatDetails }) => {
  const { boatName, type, price, rooms, foodType, image, food, acRoom, fromTime, toTime } = boatDetails;

  return (
    <div className="boat-card">
      <img src={image} alt={type} />
      <h2>{type}</h2>
      <b>Boat Name: {boatName}</b>
      <p>Price: ₹{price}</p>
      <p>Rooms: {rooms}</p>
      <p>Food: {food}</p>
      <p>Food Type: {foodType}</p>
      <p>AC Room: {acRoom}</p>
      <p>From Time: {fromTime}</p>
      <p>To Time: {toTime}</p>
      <div className='rev-now'>
      <Link to={`/Reservation`}>
        <button>Book Now</button>
      </Link>
      </div>
    </div>
  );
};

export default Usercard;
