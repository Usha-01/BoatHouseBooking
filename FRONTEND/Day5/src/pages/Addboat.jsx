import React, { useState } from 'react';
import '../assets/css/Addboat.css'
import { Link } from 'react-router-dom';

const AddBoat = ({ onAdd }) => {
  const [newBoat, setNewBoat] = useState({
    image: '',
    name: '',
    capacity: '',
    ratings: '',
    availability: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBoat((prevBoat) => ({
      ...prevBoat,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    onAdd(newBoat);
    setNewBoat({
      image: '',
      name: '',
      capacity: '',
      ratings: '',
      availability: false,
    });
  };

  return (
    <div className='boatadd'>
    <div className="add-boat-form">
      <h2>Add New Boat</h2>
      <label>
        Image URL:
        <input type="text" name="image" value={newBoat.image} onChange={handleChange} />
      </label>
      <label>
        Boat Name:
        <input type="text" name="name" value={newBoat.name} onChange={handleChange} />
      </label>
      <label>
        Capacity:
        <input type="text" name="capacity" value={newBoat.capacity} onChange={handleChange} />
      </label>
      <label>
        Ratings:
        <input type="text" name="ratings" value={newBoat.ratings} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <input
          type="checkbox"
          name="availability"
          checked={newBoat.availability}
          onChange={() => setNewBoat((prevBoat) => ({ ...prevBoat, availability: !prevBoat.availability }))}
        />
      </label>
      {/* <button onClick={handleAdd}>Add Boat</button> */}

      <Link to='/Add'>
      <button >Add boat</button>
      </Link>
      </div>
    </div>
  );
};

export default AddBoat;
