// OfferCard.jsx

import React from 'react';

const OfferCard = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default OfferCard;
