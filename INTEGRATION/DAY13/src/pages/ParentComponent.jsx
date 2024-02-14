// import React, { useState } from 'react';
// import axios from 'axios';
// import Updatingboat from './Updatingboat';


// const ParentComponent = () => {
//   const [showUpdatingBoat, setShowUpdatingBoat] = useState(false);
//   const [selectedBoatId, setSelectedBoatId] = useState(null);

//   const handleUpdate = (boatId) => {
//     setSelectedBoatId(boatId);
//     setShowUpdatingBoat(true);
//   };

//   return (
//     <div>
//       {!showUpdatingBoat ? (
//         <div>
         
//           {boats.map((boat) => (
//             <BoatCard key={boat.boatId} boatDetails={boat} onUpdate={handleUpdate} />
//           ))}
//         </div>
//       ) : (
//         <Updatingboat boatId={selectedBoatId} />
//       )}
//     </div>
//   );
// };

// export default ParentComponent;


import React, { useState } from 'react';
import axios from 'axios';
import Updatingboat from './Updatingboat'; 
import BoatCard from './Boatcard';

const ParentComponent = ({ boats }) => {
  const [selectedBoatId, setSelectedBoatId] = useState(null);
  const [showUpdatingBoat, setShowUpdatingBoat] = useState(false);

  const handleUpdate = (boatId) => {
    setSelectedBoatId(boatId);
    setShowUpdatingBoat(true);
  };

  return (
    <div>
      {!showUpdatingBoat ? (
        <div>
          {/* Map over your boat data and render BoatCard components */}
          {boats.map((boat) => (
            <BoatCard key={boat.boatId} boatDetails={boat} onUpdate={handleUpdate} />
          ))}
        </div>
      ) : (
        <Updatingboat boatId={selectedBoatId} />
      )}
    </div>
  );
};

export default ParentComponent;
