

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExplorePage from './pages/ExploreBooking';
import About from './components/About'
import User from './components/User';
import UserRegister from './components/Register'
import UserDashboard from './components/UserDashboard';
import User_dashboard from './components/User_dashboard';
import UserProfile from './components/Profile';
import Book from './components/Bookboat';
import AdminDashboard from './components/AdminDashboard';
import Bookboat from './pages/Add_admin'
import Admin from './pages/Admin';
import Reservation from './components/Reservation';
import BookedBoatsPage from './pages/Userbooked';
import Userdetails from './pages/Userdetails';
import AddBoat from './pages/Addboat';
import Updateboat from './pages/Updateboat';
import Admin_dash from './pages/Admin_dash';
import Contact from './components/Contact';
import UserDetailPage from './pages/UserDetailPage';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const redirectToAdminDashboard = () => {
    setAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<ExplorePage/>} />

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/Dashboard_user" element={<User_dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/book" element={<Book/>} />
        <Route path="/Reservation" element={<Reservation/>} />



        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Admindashboard" element={<AdminDashboard/>} />
        <Route path="/DashboardAdmin" element={<Admin_dash/>} />
        <Route path="/Add" element={<Bookboat/>} />
         <Route path="/AddBoat" element={<AddBoat/>}/>
         <Route path="/Updateboat" element={<Updateboat/>}/>
        <Route path="/booked" element={<BookedBoatsPage/>} />
        <Route path="/Userdetails" element={<Userdetails/>} />
        <Route path="/UserDetailPage" element={<UserDetailPage/>} />

        
      </Routes>

    </Router>
  );
}

export default App;
