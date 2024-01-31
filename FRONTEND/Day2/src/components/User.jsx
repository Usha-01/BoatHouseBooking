import Navbar from './Navbar';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import '../assets/css/Admin.css'
const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
   
    if (email === 'sasi2701@gmail.com' && password === 'sasi2701') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (loggedIn) {
    
    return <Navigate to="/Dashboard_user" />  
  }

  return (
    <>
     <div className='classadmin'>
    <Navbar/>
    <div>
    {loggedIn ? (

      <UserDashboard />
    ) : (
     
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
        <p>
          Not registered? <Link to="/register">Register here</Link>.
        </p>
      </div>
    )}
  </div>
  </div>
  </>
);
};

export default User;
