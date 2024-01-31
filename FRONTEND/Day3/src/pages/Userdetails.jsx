// Userdetails.js
import React, { useState } from 'react';
import '../assets/css/Userdetail.css'; 
import AdminDashboard from '../components/AdminDashboard';
import UserDetailPage from './UserDetailPage';
import { Link } from 'react-router-dom';
const Userdetails = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const bookings = [
    { id: 1, userName: 'Soma sundari', age: 20, email: 'Soma@gmail.com', mobileNumber: '7345612893', bookedBoat: 'Luxury Boat' },
    { id: 2, userName: 'Rasika', age: 21, email: 'Rasika@gmail.com', mobileNumber: '9876543210', bookedBoat: 'Wooden Boat' },
    // Add more booking details as needed
  ];

  return (
    <>
      <div id="detail">
        <AdminDashboard />
        <div className="booking-table-container">
          <h2>Booking Details Table</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Booked Boat</th>
                <th>Booking Details</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.userName}</td>
                  <td>{booking.age}</td>
                  <td>{booking.email}</td>
                  <td>{booking.mobileNumber}</td>
                  <td>{booking.bookedBoat}</td>
                  <td>

                    <Link to='/UserDetailPage'>
                      <button>Details</button>
                    </Link>
                    {/* <button onClick={() => setSelectedUserId(booking.id)}>Details</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUserId !== null && (
        <UserDetailPage userId={selectedUserId} />
      )}
    </>
  );
};

export default Userdetails;
