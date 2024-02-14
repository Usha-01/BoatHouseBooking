// import React, { useState } from 'react';
// import '../assets/css/BoatDetails.css'
// import axios from 'axios';

// const Updatingboat = ({ boatId }) => {
//   const [boatName, setBoatName] = useState('');
//   const [location, setLocation] = useState('');
//   const [rooms, setRooms] = useState(0);
//   const [acRoom, setAcRoom] = useState('No');
//   const [food, setFood] = useState('No');
//   const [foodType, setFoodType] = useState(''); 
//   const [fromTime, setFromTime] = useState('');
//   const [price, setPrice] = useState(''); 
//   const [image, setImage] = useState('');
//   const [toTime, setToTime] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8081/updateboat/${boatId}`, {
//         boatName,
//         location,
//         rooms,
//         food,
//         foodType,
//         acRoom,
//         price,
//         image,
//         fromTime,
//         toTime
//       });
//       console.log(response.data);
//       alert('Boat updated successfully!');
//     } 
//     catch (error) {
//       console.error('Error updating boat:', error);
//       setError('Error updating boat. Please try again.');
//     }
//   };

//   return (
//     <>
//       <div className='addboat'>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Boat Name:
//             <input type="text" value={boatName} onChange={(e) => setBoatName(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Location:
//             <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Number of Rooms:
//             <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             AC Preference:
//             <select value={acRoom} onChange={(e) => setAcRoom(e.target.value)}>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </label>
//           <br />
//           <label>
//             Food Preference:
//             <select value={food} onChange={(e) => setFood(e.target.value)}>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </label>
//           {food === 'Yes' && (
//             <div>
//               <label>
//                 Food Option:
//                 <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
//                   <option value="Veg">Veg</option>
//                   <option value="NonVeg">Non-Veg</option>
//                 </select>
//               </label>
//               <br />
//             </div>
//           )}
//           <br />
//           <label>
//             From Time:
//             <input type="text" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             To Time:
//             <input type="text" value={toTime} onChange={(e) => setToTime(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Image:
//             <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Price:
//             <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Update Boat</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Updatingboat;

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Updatingboat.css'

const Updatingboat = ({ boatId }) => {
  const [boatDetails, setBoatDetails] = useState({
    boatName: '',    // Initialize boatName
    location: '',    // Initialize location
    rooms: '',       // Initialize rooms
    acRoom: 'No',    // Initialize acRoom
    food: 'No',      // Initialize food
    foodType: '',    // Initialize foodType
    fromTime: '',    // Initialize fromTime
    price: '',       // Initialize price
    image: '',       // Initialize image
    toTime: ''       // Initialize toTime
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8081/updateboat/${boatId}`, boatDetails);
      console.log(response.data);
      alert('Boat updated successfully!');
    } catch (error) {
      console.error('Error updating boat:', error);
      alert('Error updating boat. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { boatName, location, rooms, acRoom, food, foodType, fromTime, price, image, toTime } = boatDetails;

  return (
    <div className='addboat-update'>
      <form onSubmit={handleSubmit}>
        <label>
          Boat Name:
          <input type="text" name="boatName" value={boatName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={location} onChange={handleChange} />
        </label>
        <br />
        <label>
          Number of Rooms:
          <input type="number" name="rooms" value={rooms} onChange={handleChange} />
        </label>
        <br />
        <label>
          AC Preference:
          <select name="acRoom" value={acRoom} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <br />
        <label>
          Food Preference:
          <select name="food" value={food} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        {food === 'Yes' && (
          <div>
            <label>
              Food Option:
              <select name="foodType" value={foodType} onChange={handleChange}>
                <option value="Veg">Veg</option>
                <option value="NonVeg">Non-Veg</option>
              </select>
            </label>
            <br />
          </div>
        )}
        <br />
        <label>
          From Time:
          <input type="text" name="fromTime" value={fromTime} onChange={handleChange} />
        </label>
        <br />
        <label>
          To Time:
          <input type="text" name="toTime" value={toTime} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={image} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={price} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Boat</button>
      </form>
    </div>
  );
};

export default Updatingboat;
