// import React from 'react';
// import '../assets/css/Updateabout.css'
// import AdminDashboard from '../components/AdminDashboard';
// import { Link } from 'react-router-dom';

// function Updateabout() {
//   return (
//     <>
//       <AdminDashboard />
//       <div id="boat" >
//         <div className="about-container">
//         <h5>
//           Boat house booking offers a unique and serene experience for those seeking a getaway surrounded 
//           <br></br>by the tranquility of waterways. Imagine waking up to the gentle lapping of waves, with 
//           <br></br>the comfort of a floating home that seamlessly merges nature and luxury. Our boat houses
//           <br></br> are carefully curated to provide an immersive escape, allowing you to connect with nature 
//           <br></br>while enjoying modern amenities.
//         </h5>
//         <Link to=''>
//       <button className='bn' style={{width:'20%',
//     marginLeft:'35%'}}>Edit</button>
//       </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Updateabout;


import React, { useState } from 'react';
import '../assets/css/Updateabout.css';
import AdminDashboard from '../components/AdminDashboard';
import { Link } from 'react-router-dom';

function Updateabout() {
  
  const [aboutContent, setAboutContent] = useState(
    "Boat house booking offers a unique and serene experience for those seeking a getaway surrounded by the tranquility of waterways. Imagine waking up to the gentle lapping of waves, with the comfort of a floating home that seamlessly merges nature and luxury. Our boat houses are carefully curated to provide an immersive escape, allowing you to connect with nature while enjoying modern amenities."
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Perform the logic to save the content (e.g., send it to the server)
    // For now, let's log it to the console
    console.log("Saving content:", aboutContent);
    
    // Exit edit mode
    setIsEditing(false);
  };

  return (
    <>
      <AdminDashboard />
      <div id="boat">
        <div className="about-container">
          {isEditing ? (
           
            <textarea
              value={aboutContent}
              onChange={(e) => setAboutContent(e.target.value)}
            />
          ) : (
          
            <h5>{aboutContent}</h5>
          )}
          {isEditing ? (
            // Render save button when in edit mode
            <button
              className='bn'
              style={{ width: '20%', marginLeft: '35%' }}
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            // Render edit button when not in edit mode
            <Link to='' onClick={() => setIsEditing(true)}>
              <button
                className='bn'
                style={{ width: '20%', marginLeft: '35%' }}
              >
                Edit
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Updateabout;
