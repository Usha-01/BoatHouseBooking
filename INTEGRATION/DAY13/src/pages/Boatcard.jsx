
// import React from 'react';
// import axios from 'axios';

// const BoatCard = ({ boatDetails }) => {
//   const { boatId, boatName, type, price, rooms, foodType, image, food, acRoom, fromTime, toTime } = boatDetails;

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:8081/deleteboat/${boatId}`);
//       // onDelete(boatId);
//       alert('Boat deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting boat:', error);
//       alert('Error deleting boat. Please try again.');
//     }
//   };
  

//   return (
//     <div className="boat-card">
//       <img src={image} alt={type} />
//       <h2>{type}</h2>
//       <b>Boat Name: {boatName}</b>
//       <p>Price: ₹{price}</p>
//       <p>Rooms: {rooms}</p>
//       <p>Food: {food}</p>
//       <p>Food Type: {foodType}</p>
//       <p>AC Room: {acRoom}</p>
//       <p>From Time: {fromTime}</p>
//       <p>To Time: {toTime}</p>
//       <div>
//       <button onClick={() => handleDelete(boatId)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default BoatCard;


import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BoatCard = ({ boatDetails, onUpdate }) => {
  const { boatId, boatName, type, price, rooms, foodType, image, food, acRoom, fromTime, toTime } = boatDetails;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8081/deleteboat/${boatId}`);
      // onDelete(boatId);
      alert('Boat deleted successfully!');
    } catch (error) {
      console.error('Error deleting boat:', error);
      alert('Error deleting boat. Please try again.');
    }
  };

  // const handleUpdate = () => {
  //   onUpdate(boatId);
  // };

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
      <div>
        {/* <button onClick={() => handleUpdate(boatId)}>Update</button> */}
        <Link to={`/update/${boatId}`}>
          <button>Update</button>
        </Link>
        <button onClick={() => handleDelete(boatId)}>Delete</button>
      </div>
    </div>
  );
};

export default BoatCard;
