import React from 'react';
import CatCard from './CatCard';

const CatGrid = ({ cats }) => {
  return (
    <>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </>
  );
};

export default CatGrid;
