// import React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import ex1 from '../assets/images/ex1.jpg'; 
// import ex2 from '../assets/images/ex2.jpg'; 
// import ex3 from '../assets/images/ex3.jpg'; 
// import '../assets/css/BoatDetailsCard.css';
// import { Link } from 'react-router-dom';
// import AdminDashboard from '../components/AdminDashboard';

// export default function BoatDetailsCard() {
//   return (
//     <>
//     <AdminDashboard/>
//     <div className="card-container">
//       <Card className="card">
//         <CardMedia
//           component="img"
//           height="194"
//           image={ex1}
//           alt="Boat Image"
//         />
//         <div className="boat-type">Luxury Boat</div>
//         <h5>Luxury boats often provide a more private and exclusive environment compared to other boats</h5>
//         <Link to="/boat-details">
//           <button className="book-button">Book</button>
//         </Link>
//       </Card>
//       <Card className="card">
//         <CardMedia
//           component="img"
//           height="194"
//           image={ex2}
//           alt="Boat Image"
//         />
//         <div className="boat-type">Premium Boat</div>
//         <h5>Premium boats may offer exclusive features or experiences that are not available on other types of boats</h5>
//         <Link to="/boat-details">
//           <button className="book-button">Book</button>
//         </Link>
//       </Card>
//       <Card className="card">
//         <CardMedia
//           component="img"
//           height="194"
//           image={ex3}
//           alt="Boat Image"
//         />
//         <div className="boat-type">Wooden Boat</div>
//         <h5> Wooden boats often have a classic and elegant appearance that appeals to many people</h5>
//         <Link to="/boat-details">
//           <button className="book-button">Book</button>
//         </Link>
//       </Card>
//     </div>
//     </>
//   );
// }





import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ex1 from '../assets/images/ex1.jpg'; 
import ex2 from '../assets/images/ex2.jpg'; 
import ex3 from '../assets/images/ex3.jpg'; 
import '../assets/css/BoatDetailsCard.css';
import { Link } from 'react-router-dom';
import AdminDashboard from '../components/AdminDashboard';
import BoatDetailsModal from './BoatDetailModal';


export default function BoatDetailsCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='detail-container'>
      <AdminDashboard/>

      <div className="card-container">
        <Card className="card">
          <CardMedia
            component="img"
            height="194"
            image={ex1}
            alt="Boat Image"
          />
          <div className="boat-type">Luxury Boat</div>
          <h5>Luxury boats often provide a more private and exclusive environment compared to other boats</h5>
          <button className="book-button" onClick={openModal}>Add new boat</button> 
        </Card>
        <Card className="card">
          <CardMedia
            component="img"
            height="194"
            image={ex2}
            alt="Boat Image"
          />
         <div className="boat-type">Premium Boat</div>
        <h5>Premium boats may offer exclusive features or experiences that are not available on other types of boats</h5>

          <button className="book-button" onClick={openModal}>Add new boat</button> 
        </Card>
        <Card className="card">
          <CardMedia
            component="img"
            height="194"
            image={ex3}
            alt="Boat Image"
          />
          <div className="boat-type">Wooden Boat</div>
        <h5> Wooden boats often have a classic and elegant appearance that appeals to many people</h5>

          <button className="book-button" onClick={openModal}>Add new boat</button> 
        </Card>
          
      </div>
      <BoatDetailsModal isOpen={isModalOpen} onClose={closeModal} /> 
      </div>
    </>
  );
}
