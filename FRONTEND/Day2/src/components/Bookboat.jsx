
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/View.css';
import boat1 from '../assets/images/Ad_dash.jpg';
import boat5 from '../assets/images/photo.jpg';
import boat6 from '../assets/images/view.avif';

import UserDashboard from '../components/UserDashboard';

const initialBoats = [
  { id: 1, image: boat1, category: 'Explore', description: 'Wooden boat', price: '14,000', rating: 4.5, capacity: 4, available: true },
  { id: 5, image: boat5, category: 'Explore',  description: 'Wooden boat', price: '12,000', rating: 4.8, capacity: 6, available: false },
  { id: 6, image: boat6, category: 'Explore', description: 'Wooden boat', price: '17,000', rating: 4.2, capacity: 8, available: true },
];

const Book = () => {
  const [boats, setBoats] = useState(initialBoats);

  const handleAdd = () => {
    console.log("Performing some logic before navigating to Reservation");
  };

  // Function to generate star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
          &#9733; {/* Unicode character for a star */}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="view">
      <UserDashboard />
      <div id="im">
        <h2>Different kind of boats</h2>
      </div>
      <div className="image-container">
        {boats.map((boat) => (
          <div key={boat.id} className="boat-card">
            <img className="image" src={boat.image} alt={`Boat ${boat.id}`} />
            <p>{boat.name}</p>
            <p>{boat.description}</p>
            <p>Price: {boat.price}</p>
            <p>Rating: {renderStars(boat.rating)}</p>
            <p>Capacity: {boat.capacity}</p>
            <p style={{ color: boat.available ? 'green' : 'red' }}>{boat.available ? 'Available' : 'Not Available'}</p>
            <div id='addd'>
              <Link to="/Reservation">
                <button onClick={handleAdd} disabled={!boat.available}>Add</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
