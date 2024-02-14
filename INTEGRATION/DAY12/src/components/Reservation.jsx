import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/Reservation.css";
import { Link } from 'react-router-dom';

const Reservation = () => {
  const { boatName } = useParams();
  
  const [formData, setFormData] = useState({
    userId: 0,
    name: '',
    email: '',
    mobileNumber: '',
    proof: '',
    food: '',
    acRoom: '',
    checkInDate: '',
    checkOutDate: '',
    boatName: boatName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/book/addbooking', formData);
      
      console.log('Form Data:', formData);

      if (response.status === 200) {
        alert('Form submitted successfully!');
      } else {
        console.error('Failed to submit form:', response.statusText);
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };
  
  return (
    <div id="reser">
      <div className='rev'>
        <h2>Boat Reservation Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            User ID:
            <input type="number" name="userId" value={formData.userId} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Mobile Number:
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Proof:
            <input type="text" name="proof" value={formData.proof} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Food:
            <input type="text" name="food" value={formData.food} onChange={handleChange} required />
          </label>
          <br />
          <label>
            AC Room:
            <input type="text" name="acRoom" value={formData.acRoom} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Check-in Date:
            <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Check-out Date:
            <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Boat Name:
            <input type="text" name="boatName" value={formData.boatName} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Submit for Reservation</button>

          <br>
          </br>
          <div className='ln'>
          <Link to="/book">
          <button>Back to Book Page</button>
        </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
