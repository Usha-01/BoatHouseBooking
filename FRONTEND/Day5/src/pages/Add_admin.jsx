import React, { useState } from 'react';
import '../assets/css/Add_admin.css';
import AdminDashboard from '../components/AdminDashboard';
import boat from '../assets/images/img.jpg';
import boat1 from '../assets/images/img1.avif';
import boat2 from '../assets/images/home.jpg';
import { Link } from 'react-router-dom';
import StarRating from './Star_Rating';
import AddBoat from './Addboat';

const Bookboat = () => {
  const initialBoats = [
    { id: 1, image: boat, name: 'Luxury boat', capacity: 7, ratings: 4.5, availability: true },
    { id: 2, image: boat1, name: 'Premium boat', capacity: 4, ratings: 3.5, availability: false },
    // { id: 3, image: boat2, name: 'Wooden boat', capacity: 5, ratings: 3, availability: true },
  ];

  const [boats, setBoats] = useState(initialBoats);
  const [showModal, setShowModal] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState(null);

  const handleAddNewBoat = (newBoat) => {
    const updatedBoats = [...boats, { id: Date.now(), ...newBoat }];
    setBoats(updatedBoats);
    setShowModal(false);
  };

  const handleUpdateBoat = (updatedBoat) => {
    const updatedBoats = boats.map((boat) => (boat.id === updatedBoat.id ? updatedBoat : boat));
    setBoats(updatedBoats);
    setSelectedBoat(null);
  };

  const handleDeleteBoat = (boatId) => {
    const updatedBoats = boats.filter((boat) => boat.id !== boatId);
    setBoats(updatedBoats);
  };

  return (
    <>
    <div id="imm" style={{
      overflowX:scroll
    }}>
      <AdminDashboard />
      <div className="Add_admin">
        <div id="im">
          <h2>Types of boats</h2>

    
          {/* <button onClick={() => setShowModal(true)}>Add New boat</button> */}

          <div id='update'>
                  <Link to='/AddBoat'>
                    <button>Add boat</button>
                  </Link>
                </div>
        </div>

        <div className="image-container">
          {boats.map((boat) => (
            <div key={boat.id} className="boat-card">
              <img className="image" src={boat.image} alt={`Boat ${boat.id}`} />
              <p>Boat Name: {boat.name}</p>
              <p>Capacity: {boat.capacity}</p>
              <p>Ratings: <StarRating rating={boat.ratings} /> </p>
              <p>
                Availability:
                <span className={`available-status ${boat.availability ? 'available' : 'not-available'}`}>
                  {boat.availability ? 'Available' : 'Not Available'}
                </span>
              </p>
              <div>
                {/* <button onClick={() => setSelectedBoat(boat)}>Update</button> */}

                <div id='update'>
                  <Link to='/Updateboat'>
                    <button>Update boat</button>
                  </Link>
                </div>

                <button onClick={() => handleDeleteBoat(boat.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <AddBoat
            onAdd={handleAddNewBoat}
            onUpdate={handleUpdateBoat}
            onCancel={() => {
              setShowModal(false);
              setSelectedBoat(null);
            }}
            selectedBoat={selectedBoat}
          />
        )}
      </div>
      </div>
    </>
  );
};

export default Bookboat;
