import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../assets/css/Admin.css'
import Navbar from '../components/Navbar';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
   
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (loggedIn) {
    
    return <Navigate to="/DashboardAdmin" />  
  }

  return (
    <>
  <div className='classadmin'>
    <Navbar/>
    <div>
    {loggedIn ? (

      <AdminDashboard/>
    ) : (
     
      <div className="login-form">
        <h2>Admin Login</h2>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
        {/* <p>
          Not registered? <Link to="/register">Register here</Link>.
        </p> */}
      </div>
    )}
  </div>
</div>
  </>
);
};

export default Admin;
