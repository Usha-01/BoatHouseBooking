import React, { useState } from 'react';
import '../assets/css/BoatDetails.css'
import axios from 'axios';
const BoatDetails = ({ onAddBoat }) => {
  const [boatName, setBoatName] = useState('');
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState(0);
  const [acRoom, setAcRoom] = useState('No');
  const [food, setFood] = useState('No');
  const [foodType, setFoodType] = useState(''); 
  const [fromTime, setFromTime] = useState('');
  const [price, setPrice] = useState(''); 
  const [image, setImage] = useState('');
  const [toTime, setToTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8081/addboat', {
            boatName,
            location,
            rooms,
            food,
            foodType,
            acRoom,
            price,
            image,
            fromTime,
            toTime
        });
        console.log(response.data);
        alert('Boat added successfully!');
    } 
    catch (error) {
        console.error('Error adding boat:', error);
        setError('Error adding boat. Please try again.');
    }
};
  return (
    <>
    <div className='addboat'>
    <form onSubmit={handleSubmit}>
    <label>
      Boat Name:
      <select value={boatName} onChange={(e) => setBoatName(e.target.value)}>
        <option value="">Select</option>
        <option value="Wooden Boats">Wooden Boats</option>
        <option value="Premium Boats">Premium Boats</option>
        <option value="Luxury Boats">Luxury Boats</option>
      </select>
    </label>
      <br />
      <label>
      Location:
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select</option>
        <option value="alappuzha">Alappuzha</option>
        <option value="kolam">Kolam</option>
        <option value="kumarakom">Kumarakom</option>
        {/* Add more locations as needed */}
      </select>
    </label>
      <br />
     

            <label>
              Number of Rooms:
              <input
                type="number"
                value={rooms}
                onChange={(e) => {
                  // Ensure the entered value is between 0 and 10
                  const value = Math.min(10, Math.max(0, parseInt(e.target.value, 10)));
                  setRooms(value);
                }}
              />
            </label>

      <br />
      <label>
        AC Preference:
        <select value={acRoom} onChange={(e) => setAcRoom(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br />
      <label>
        Food Preference:
        <select value={food} onChange={(e) => setFood(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      {food === 'Yes' && (
        <div>
          <label>
            Food Option:
            <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
              <option value="">Select</option>
              <option value="Veg">Veg</option>
              <option value="NonVeg">Non-Veg</option>
            </select>
          </label>
          <br />
        </div>
      )}
      
      <br />
      <div>
                        <label>Image:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>

                    <br/>
      <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <br/>
      <label>
         From Time:
        <input type="text" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
      </label>
      <br />
      <label>
        To  Time:
        <input type="text" value={toTime} onChange={(e) => setToTime(e.target.value)} />
      </label>
      <br />
      <div className='addbutton'>
      <button type="submit">Add Boat</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default BoatDetails;
