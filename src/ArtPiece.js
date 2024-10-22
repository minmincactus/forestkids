import React from 'react';
import { useParams, Link } from 'react-router-dom';
import bunnycloud from './assets/bunnycloud.png';  
import amulet from './assets/Amulet.jpeg';
import anthropology from './assets/anthropology.png';
import articuno from './assets/articuno.png';
import beanbean from './assets/beanbean.png';
import butterfly from './assets/butterfly.png';
import moltres from './assets/moltres.png';
import paintingAustralia from './assets/paintingAustralopithicus.jpeg';
import pockethome from './assets/pockethome.png';
import zapdo from './assets/zapdo.png';
import tomatocats from './assets/tomatocats.jpg';
import siamese from './assets/siamese.jpg';
import dusty from './assets/dusty.jpg';
import mikupotato from './assets/mikupotato.jpg';
import mikubag from './assets/mikubag.jpg';

const items = [
  { id: 1, image: bunnycloud, title: 'Bunny Cloud', description: 'A fluffy bunny cloud.' },
  { id: 2, image: amulet, title: 'Amulet', description: 'A magical amulet image.' },
  { id: 3, image: anthropology, title: 'Anthropology', description: 'Anthropology image.' },
  { id: 4, image: paintingAustralia, title: 'Australia Painting', description: 'A painting of Australia.' },
  { id: 5, image: articuno, title: 'Articuno', description: 'Legendary bird Articuno.' },
  { id: 6, image: zapdo, title: 'Zapdos', description: 'Legendary bird Zapdos.' },
  { id: 7, image: moltres, title: 'Moltres', description: 'Legendary bird Moltres.' },
  { id: 8, image: beanbean, title: 'Bean Bean', description: 'A cute bean character.' },
  { id: 9, image: butterfly, title: 'catfly', description: 'Colorful butterfly image.' },
  { id: 10, image: tomatocats, title: 'Pocket Home', description: 'Pocket home design.' },
  { id: 11, image: dusty, title: 'Pocket Home', description: 'Pocket home design.' },
  { id: 12, image: siamese, title: 'Pocket Home', description: 'Pocket home design.' },
  { id: 13, image: mikupotato, title: 'Pocket Home', description: 'Pocket home design.' },
  { id: 14, image: mikubag, title: 'Pocket Home', description: 'Pocket home design.' },
];

const ArtPiece = () => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const itemIndex = items.findIndex((piece) => piece.id === itemId);

  if (itemIndex === -1) {
    return <div>Art piece not found!</div>;
  }

  const nextIndex = (itemIndex + 1) % items.length;
  const prevIndex = (itemIndex - 1 + items.length) % items.length;

  const nextItem = items[nextIndex];
  const prevItem = items[prevIndex];

  return (
    <div className="art-piece-detail">
      <img src={items[itemIndex].image} alt={items[itemIndex].title} className="art-piece-image" />
      <h1>{items[itemIndex].title}</h1>

      <div className="navigation-buttons">
        <Link to={`/art/${prevItem.id}`} className="arrow left-arrow">
          &#8592;
        </Link>
        <Link to={`/art/${nextItem.id}`} className="arrow right-arrow">
          &#8594;
        </Link>
      </div>

      {/* Back to Gallery Button */}
      <Link to="/gallery" className="back-button">
        Back to Gallery
      </Link>
    </div>
  );
};

export default ArtPiece;
