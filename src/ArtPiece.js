import React from 'react';
import { Link } from 'react-router-dom';

const ArtPiece = ({ item }) => {
  return (
    <Link to={item.link} className="art-piece">
      <div>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Link>
  );
}

export default ArtPiece;
