import React from 'react';
import { Link } from 'react-router-dom';
import bunnycloud from './assets/bunnycloud.png';  
import amulet from './assets/Amulet.jpeg';
import anthropology from './assets/Anthropology.png';
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

// Video items
const videoItems = [
  { id: 1, videoUrl: 'https://player.vimeo.com/video/1021821249', title: 'Minathan', description: 'Minathan video' },
  { id: 2, videoUrl: 'https://player.vimeo.com/video/895652634', title: "Spider Web Spiderweb Spider's Web", description:  "Spider Web Spiderweb Spider's Web Video" },
  { id: 3, videoUrl: 'https://player.vimeo.com/video/904990901', title: 'Metamorphosing Stripes', description: 'Metamorphosing Stripes Video' },
  { id: 4, videoUrl: 'https://player.vimeo.com/video/1021819637', title: 'Mindy Land', description: 'Mindy Land Video' },
];


const Gallery = () => {
  return (
    <>
      {/* Image Gallery */}
      <div className="gallery-grid">
        {items.map((item) => (
          <div className="gallery-item" key={item.id}>
            <Link to={`/art/${item.id}`}>
              <img src={item.image} alt={item.title} className="gallery-image" />
              {/* <h3>{item.title}</h3> */}
            </Link>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="video-gallery">
        <div className="gallery-grid">
          {videoItems.map((video) => (
            <div className="gallery-item" key={video.id}>
              <div className="video-container">
                <iframe
                  src={video.videoUrl}
                  style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                ></iframe>
              </div>
              {/* <h3>{video.title}</h3> */}
              {/* <p>{video.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
