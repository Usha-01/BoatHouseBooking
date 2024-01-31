import React, { useState } from 'react';
import '../assets/css/Updateboat.css'; 
import { Link } from 'react-router-dom';
const Updateboat = ({ onUpdate, onCancel, selectedBoat }) => {
  const [boat, setBoat] = useState({
    name: selectedBoat ? selectedBoat.name : '',
    capacity: selectedBoat ? selectedBoat.capacity : '',
    ratings: selectedBoat ? selectedBoat.ratings : '',
    availability: selectedBoat ? selectedBoat.availability : false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoat((prevBoat) => ({
      ...prevBoat,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate({ ...selectedBoat, ...boat });
  };

  return (
    <>
    <div id="boatupdate">

    <div className="update-boat-form">
      <h2>{selectedBoat ? 'Update Boat' : 'Update Boat'}</h2>
      <label>
        Boat Name:
        <input type="text" name="name" value={boat.name} onChange={handleChange} />
      </label>
      <label>
        Capacity:
        <input type="text" name="capacity" value={boat.capacity} onChange={handleChange} />
      </label>
      <label>
        Ratings:
        <input type="text" name="ratings" value={boat.ratings} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <input
          type="checkbox"
          name="availability"
          checked={boat.availability}
          onChange={() => setBoat((prevBoat) => ({ ...prevBoat, availability: !prevBoat.availability }))}
        />
      </label>
      {/* <button onClick={handleUpdate}>{selectedBoat ? 'Update Boat' : 'Update Boat'}</button>

      <button onClick={onCancel}>Cancel</button> */}

      <Link to='/Add'>
      <button >Update boat</button>
      </Link>
    </div>
    </div>
    </>
  );
};

export default Updateboat;
