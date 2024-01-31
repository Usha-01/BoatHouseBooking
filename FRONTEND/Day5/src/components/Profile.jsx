import React, { useState } from 'react';
import '../assets/css/UserProfile.css';
import UserDashboard from '../components/UserDashboard';


const UserProfile = () => {
  
  const user = {
    name: 'Soma Sundari R',
    age: 20,
    gender: 'Female',
    mobileNumber: '7539931784',
    idProof: 'A1234567',
    imageUrl: 'https://placekitten.com/200/200', 
  };

  return (
    <>
    <div id="user">
   <UserDashboard/>
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.imageUrl} alt="User" className="user-image" />
        <h2>{user.name}</h2>
      </div>
      <div className="profile-details">
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Mobile Number:</strong> {user.mobileNumber}
        </p>
        <p>
          <strong>ID Proof:</strong> {user.idProof}
        </p>
      </div>
    </div>
   </div>
    </>
  );
};

export default  UserProfile;
