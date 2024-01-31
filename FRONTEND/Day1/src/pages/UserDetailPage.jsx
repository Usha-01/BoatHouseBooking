// UserDetailPage.js
import React, { useEffect, useState } from 'react';
import '../assets/css/UserDetailPage.css'; 

const UserDetailPage = ({ userId }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Simulated API response with dummy values
        const dummyApiResponse = [
        {
          id: '1',
          userName: 'SomaSundari R',
          age: 20,
          email: 'Soma@gmail.com',
          mobileNumber: '7654321895',
          bookedBoat: 'Luxury boat',
        },
        {
          id: '2',
          userName: 'Rasika B',
          age: 21,
          email: 'Rasika@gmail.com',
          mobileNumber: '9876543210',
          bookedBoat: 'Wooden boat',
        },
    ];

        // Simulate a delay to mimic API response time
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Update state with fetched user details
        setUserDetails(dummyApiResponse);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    // Call the fetchUserDetails function
    fetchUserDetails();
  }, [userId]);

  return (
    <div className="user-detail-container">
      <h2 className="user-details-heading">User Details</h2>
      {userDetails ? (
        <>
          <div className="user-detail-item">User ID: {userDetails.id}</div>
          <div className="user-detail-item">User Name: {userDetails.userName}</div>
          <div className="user-detail-item">Age: {userDetails.age}</div>
          <div className="user-detail-item">Email: {userDetails.email}</div>
          <div className="user-detail-item">Mobile Number: {userDetails.mobileNumber}</div>
          <div className="user-detail-item">Booked Boat: {userDetails.bookedBoat}</div>
          
        </>
      ) : (
        <p className="loading-message">Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetailPage;
