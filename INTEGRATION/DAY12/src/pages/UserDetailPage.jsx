// UserDetailPage.js
import React from 'react';
import '../assets/css/UserDetailPage.css'

const getUserDetails = (userId) => {
  // Dummy user details for demonstration
  const dummyUserDetails = {
    id: 1,
    userName: `Soma Sundari`,
    age: 20,
    email: `Soma@gmail.com`,
    mobileNumber: '7345612893',
    bookedBoat: 'Luxury Boat',
  };

  return dummyUserDetails;
};

const UserDetailPage = ({ userId }) => {
  // Fetch user details using the dummy function
  const userDetails = getUserDetails(userId);

  if (!userDetails) {
    // Handle the case where userDetails are not available
    return <div>User details not found</div>;
  }

  return (
    <>
    <div className='detail'>
    <div className='userdetail'>
      <h2>User Details</h2>
      <p>ID: {userDetails.id}</p>
      <p>User Name: {userDetails.userName}</p>
      <p>Age: {userDetails.age}</p>
      <p>Email: {userDetails.email}</p>
      <p>Mobile Number: {userDetails.mobileNumber}</p>
      <p>Booked Boat: {userDetails.bookedBoat}</p>
      {/* Add more details as needed */}
    </div>
    </div>
    </>
  );
};

export default UserDetailPage;
