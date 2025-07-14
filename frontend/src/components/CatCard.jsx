import React from 'react';
import { Phone, Mail } from 'lucide-react';

const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} />
      <h2>{cat.name}</h2>

      <div className="contact-info">
        <Phone />
        <span>{cat.phone}</span>
      </div>

      <div className="contact-info">
        <Mail />
        <span className="break-all">{cat.email}</span>
      </div>
    </div>
  );
};

export default CatCard;
