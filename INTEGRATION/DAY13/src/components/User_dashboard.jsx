
// import '../assets/css/Home.css'
// import UserDashboard from '../components/UserDashboard';
// function User_dashboard() {
//     return(
//         <>
//         <UserDashboard/>
//        <div id="Boat">
      
//         <h5>
//             User Dashboard

//         </h5>
       
       
//      </div>
//      </>
//     )
// }
// export default User_dashboard;




// UserDashboard.jsx

import React from 'react';
import OfferCard from './OfferCard';
import SpecialBoatCard from './SpectalBoatCard';
import '../assets/css/Userdash.css'
import boat from '../assets/images/img.jpg';
import boat1 from '../assets/images/ex1.jpg';
import boat2 from '../assets/images/ex3.jpg';
import boat3 from '../assets/images/photo.jpg';
import UserDashboard from './UserDashboard';

const User_dashboard = () => {
  // Sample data for offers and special selling boats
  const offers = [
    { id: 1, title: 'Seize the moment and explore the seas! ', image: boat },
    { id: 2, title: 'Navigate your way to excitement! ', image: boat1 },
    // Add more offers as needed
  ];

  const specialBoats = [
    { id: 1, name: 'Experience luxury on the waves with our special boat offers.', image: boat2 },
    { id: 2, name: 'Set course for unparalleled experiences with our special boat offers.', image: boat3 },
    // Add more special selling boats as needed
  ];

  return (
    <div className='boar'>
        <UserDashboard/>
      <h2>Offers</h2>
      <div className="card-containe">
        {offers.map((offer) => (
          <OfferCard key={offer.id} title={offer.title} image={offer.image} />
        ))}
      </div>

      <h2>Special Selling Boats</h2>
      <div className="card-containe">
        {specialBoats.map((boat) => (
          <SpecialBoatCard key={boat.id} name={boat.name} image={boat.image} />
        ))}
      </div>
    </div>
  );
};

export default User_dashboard;
