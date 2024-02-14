import Navbar from './Navbar';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import UserDashboard from './UserDashboard';
import '../assets/css/Admin.css';

const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', { email, password });
      if (response.status === 200) {
        setLoggedIn(true);
        // Optionally, you can store the token in local storage
        localStorage.setItem('userId', response.data.id); // Store the user ID in localStorage
        localStorage.setItem('token', response.data.token);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Failed to authenticate. Please try again later.');
    }
  };

  if (loggedIn) {
    return <Navigate to="/Dashboard_user" />;
    // return <Navigate to="/profile/${userEmail} "/>;
  }

  return (
    <>
      <div className='classadmin'>
        <Navbar />
        <div>
          <div className="login-form">
            <h2>User Login</h2>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
            {error && <div className="error">{error}</div>}
            <p>
              Not registered? <Link to="/register">Register here</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
