import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { PieChart } from '@mui/x-charts';
import axios from 'axios'; // Import axios for API requests
import '../assets/css/Admindash.css';
import AdminDashboard from '../components/AdminDashboard';
import boat1 from '../assets/images/Ad_dash.jpg'
import boat2 from '../assets/images/Keralaboat.jpeg';
import boat3 from '../assets/images/home.jpg';
import boat4 from '../assets/images/img.jpg';
import boat5 from '../assets/images/photo.jpg';
import boat6 from '../assets/images/view.avif';
import boat7 from '../assets/images/ex1.jpg';
import boat8 from '../assets/images/ex2.jpg';
import boat9 from '../assets/images/ex3.jpg';


const Admin_dash = () => {
  const series = [
    {
      data: [
        { id: 0, value: 10, label: 'Luxury boat' },
        { id: 1, value: 15, label: 'Premium boat' },
        { id: 2, value: 20, label: 'Wooden boat' },
      ],
    },
  ];

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null); // State to store booking details
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(null); // State to store error message

  // Function to fetch all bookings
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8081/user');
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
    <div className='background'>
      <div id="detail">
        <AdminDashboard />
        <div className="chart-container">
          <PieChart
            series={series}
            width={400}
            height={200}
          />
          <div className="booking-table-container">
            <h2>Registered User Details </h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : bookingDetails ? (
              <table>
                <thead>
                  <tr>
                  
                    <th>Name</th>
                    <th>Email</th>
                    <th>MobileNumber</th>
                  
                
                  </tr>
                </thead>
                <tbody>
                  {bookingDetails.map((user) => (
                    <tr key={user.userId}>
                  
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNumber}</td>
                 
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </div>
      {selectedUserId !== null && <UserDetailPage userId={selectedUserId} />}

      <div className='recent'>
        <h2>Recently booked boats</h2>

        <div className="image-container">
        <h2>Wooden boats</h2>
        <img className="image" src={boat1} alt="Boat 1" />
        <img className="image" src={boat2} alt="Boat 2" />
        <img className="image" src={boat3} alt="Boat 3" />

        <br></br>
        <h2>Premium boats</h2>
        <img className="image" src={boat4} alt="Boat 4" />
        <img className="image" src={boat5} alt="Boat 5" />
        <img className="image" src={boat6} alt="Boat 6" />
        
        <h2>Luxury boats</h2>
        <img className="image" src={boat7} alt="Boat 7" />
        <img className="image" src={boat8} alt="Boat 8" />
        <img className="image" src={boat9} alt="Boat 9" />
      </div>
    </div>
  </div>
    </>
  );
};

export default Admin_dash;
