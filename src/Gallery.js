import React from 'react';
import bunnycloud from './assets/bunnycloud.png';  // Adjust the path as necessary


const items = [
  { id: 1, image: bunnycloud, title: 'Bunny Cloud' },
  { id: 2, image: bunnycloud, title: 'Bunny Cloud' },
  { id: 3, image: bunnycloud, title: 'Bunny Cloud' },
  { id: 4, image: bunnycloud, title: 'Bunny Cloud' },
  { id: 5, image: bunnycloud, title: 'Bunny Cloud' },
  { id: 6, image: bunnycloud, title: 'Bunny Cloud' },
];

const Gallery = () => {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <div className="gallery-item" key={item.id}>
          <img src={item.image} alt={item.title} className="gallery-image" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
