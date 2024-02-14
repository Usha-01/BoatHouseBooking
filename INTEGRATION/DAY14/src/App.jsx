

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
import Admin from './pages/Admin';
import Reservation from './components/Reservation';
import BookedBoatsPage from './pages/Userbooked';
import Userdetails from './pages/Userdetails';
import Updateboat from './pages/Boatcard';
import Admin_dash from './pages/Admin_dash';
import Contact from './components/Contact';
import UserDetailPage from './pages/UserDetailPage';
import Updateabout from './pages/Updateabout';
import BoatDetails from './pages/BoatDetails';
import Viewboat from './pages/Viewboat';
import BoatDetailsCard from './pages/BoatDetailsCard';
import BoatDetailsModal from './pages/BoatDetailModal';
import Usercard from './components/Usercard';
import ParentComponent from './pages/ParentComponent';
import Updatingboat from './pages/Updatingboat';


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

        <Route path="/Userdetails" element={<Userdetails/>} />
        <Route path="/Usercard" element={<Usercard/>} />
        <Route path="/UserDetailPage" element={<UserDetailPage/>} />
        <Route path="/Updateabout" element={<Updateabout/>} />

        <Route path="/Parent" element={<ParentComponent/>} />
        {/* <Route path="/Updatingboat" element={<Updatingboat/>} /> */}
        <Route path="/update/:boatId" element={<Updatingboat/>} />

        
        <Route path="/Reservation" element={<Reservation/>} />
        


        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Admindashboard" element={<AdminDashboard/>} />
        <Route path="/DashboardAdmin" element={<Admin_dash/>} />
        <Route path="/AddDetails" element={<BoatDetailsCard/>} />
       
    
        <Route path="/boat-details" element={<BoatDetails/>} />
        <Route path="/booked" element={<Viewboat/>} />
        {/* <Route path="/modal" element={<BoatDetailsModal/>} /> */}

        
      </Routes>

    </Router>
  );
}

export default App;
