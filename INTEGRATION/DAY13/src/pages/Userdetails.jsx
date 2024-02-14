import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Userdetail.css'; 
import AdminDashboard from '../components/AdminDashboard';
import UserDetailPage from './UserDetailPage';

const Userdetails = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null); // State to store booking details
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(null); // State to store error message

  // Function to fetch all bookings
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8081/book/getbooking');
      setBookingDetails(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching bookings. Please try again later.');
      setLoading(false);
    }
  };

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <div id="detaill">
        <AdminDashboard />
        <div className="booking-table-containerr">
          <h2>Booking Details </h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : bookingDetails ? ( // Add conditional check for bookingDetails
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>MobileNumber</th>
                  <th>Proof</th>
                  <th>Food</th>
                  <th>Ac Room</th>
                  <th>Check In Date</th>
                  <th>Check Out Date</th>
                  {/* <th>User Details</th> */}
                </tr>
              </thead>
              <tbody>
                {bookingDetails.map((booking) => (
                  <tr key={booking.userId}>
                    <td>{booking.userId}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.mobileNumber}</td>
                    <td>{booking.proof}</td>
                    <td>{booking.food}</td>
                    <td>{booking.acRoom}</td>
                    <td>{booking.checkInDate}</td>
                    <td>{booking.checkOutDate}</td>

                    {/* <td> */}
                      {/* <button onClick={() => setSelectedUserId(booking.userId)}>Details</button> */}
                      {/* <button>
                      <Link to='/UserDetailPage'>Details</Link>
                      </button> */}
                    {/* </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>

      {/* Pass booking details to UserDetailPage component */}
      {selectedUserId !== null && <UserDetailPage userId={selectedUserId} />}
    </>
  );
};

export default Userdetails;
