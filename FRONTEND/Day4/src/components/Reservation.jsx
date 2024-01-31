import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import "../assets/css/Reservation.css"

const Reservation = () => {
    
  const { boatId } = useParams();
  
  const [formData, setFormData] = useState({
    userId: '',
    numberOfPassengers: '',
    fromDate: '',
    toDate: '',
    boatName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
  };



  return (
    <div className='rev'>
      <h2>Boat Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" name="userId" value={formData.userId} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Number of Passengers:
          <input
            type="number"
            name="numberOfPassengers"
            value={formData.numberOfPassengers}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          From Date:
          <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} required />
        </label>
        <br />
        <label>
          To Date:
          <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Boat Name:
          <input type="text" name="boatName" value={formData.boatId} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit for Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
