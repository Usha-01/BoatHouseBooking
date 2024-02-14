import React, { useState, useEffect } from 'react';
import BoatCard from './Boatcard';
import AdminDashboard from '../components/AdminDashboard';
import axios from 'axios';
import '../assets/css/View.css';

const Viewboat = () => {
  const [boats, setBoats] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const apiUrl = 'http://localhost:8081/boat';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBoats(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (boatName) => {
    if (boatName === selectedType) {
      setSelectedType('');
    } else {
      setSelectedType(boatName);
    }
  };

  const boatNames = [...new Set(boats.map(boat => boat.boatName))]; 

  return (
    <>
      <AdminDashboard />
      <div className="viewer">
        {error && <div>Error: {error}</div>}
        <div className="select-container">
          <label htmlFor="boatName">Select Boat Name:</label>
          <select id="boatName" onChange={(e) => handleFilter(e.target.value)} value={selectedType}>
            <option value="">All Boats</option>
            {boatNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className='adjust'>
          {boats.filter(boat => !selectedType || boat.boatName === selectedType).map((boat, index) => (
            <div key={index} className='boat-card-container'>
              <BoatCard boatDetails={boat} />
            </div>
          ))}
        </div>  
      </div>
    </>
  );
};

export default Viewboat;
