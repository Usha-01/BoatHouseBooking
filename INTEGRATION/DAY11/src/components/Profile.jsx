import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/UserProfile.css';
import profile from '../assets/images/boat.jpg'
import UserDashboard from './UserDashboard';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:8081/get/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem('userId');
      await axios.put(`http://localhost:8081/api/v1/auth/${userId}`, user); // Fixed URL formatting and removed the comma before "user"
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };
  

  return (
    <div className='user-profile'>
      <UserDashboard/>
      <div className='user-profile-container-profile'>
        <div className="user-card-profile">
          <div className="profile-pic-profile">
            <img src={profile} alt="Common" />
          </div>
          <div className="user-details-profile">
            <div className="detail-profile">
              <span>Name:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.name}</span>
              )}
            </div>
            <div className="detail-profile">
              <span>Mobile Number:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="mobileNumber"
                  value={user.mobileNumber}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.mobileNumber}</span>
              )}
            </div>
            <div className="detail-profile">
              <span>Email:</span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.email}</span>
              )}
            </div>
            {isEditing ? (
              <button onClick={handleSave} className="save-button">
                Save
              </button>
            ) : (
              <button onClick={handleEdit} className="edit-button">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
